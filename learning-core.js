export function normalize(value) {
  const superscripts={'⁺':'+','⁻':'-','⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9'};
  const normalized = String(value ?? '').trim().replace(/10([⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,(_,exponent)=>'10^'+[...exponent].map(c=>superscripts[c]).join('')).normalize('NFKC')
    .replace(/\s/g,'').replace(/[，、]/g,',').replace(/[：∶]/g,':')
    .replace(/[＝]/g,'=').replace(/[→⟶]/g,'→').replace(/−/g,'-');
  // 只对单个数值做等值处理；单位和百分号仍保留，化学式及比值不改写。
  const candidate=normalized.replace(/^([+-]?(?:\d+\.?\d*|\.\d+))[×x*·]10\^([+-]?\d+)/,'$1e$2').replace(/^10\^([+-]?\d+)/,'1e$1');
  const numeric = candidate.match(/^([+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)(%|kg|mg|g|t|mL|ml|L|l|mm|cm|dm|m|km|mm2|cm2|m2|cm3|dm3|m3|s|min|h|Hz|kHz|MHz|N|kN|Pa|kPa|MPa|J|kJ|MJ|W|mW|kW|MW|A|mA|V|mV|kV|Ω|kΩ|MΩ|C|W·h|kW·h|kWh|g\/mL|g\/ml|g\/cm3|kg\/m3|m\/s|km\/h|N\/kg|J\/\(kg·°C\)|°C|K)?$/);
  const aliases={ml:'mL',l:'L','g/ml':'g/mL'};
  return numeric && Number.isFinite(Number(numeric[1])) ? String(Number(numeric[1]))+(aliases[numeric[2]]||numeric[2]||'') : normalized;
}
export function isAnswered(question, answer) {
  if(question.type==='case') return Array.isArray(answer) && question.parts.every((_,i)=>normalize(answer?.[i]).length>0);
  if(question.type==='multi') return Array.isArray(answer) && answer.length>0;
  return answer!==undefined && answer!==null && normalize(answer)!=='';
}
export function grade(question, answer) {
  if(question.type==='case') {
    const parts = question.parts.map(([,accepted],i)=>accepted.some(a=>normalize(a)===normalize(answer?.[i])) && normalize(answer?.[i])!=='');
    return {correct:parts.every(Boolean),parts};
  }
  if(!isAnswered(question,answer)) return {correct:false};
  if(question.type==='text') return {correct:question.answers.some(a=>normalize(a)===normalize(answer))};
  if(question.type==='multi') return {correct:[...new Set(answer.map(Number))].sort((a,b)=>a-b).join(',')===[...question.answers].sort((a,b)=>a-b).join(',')};
  return {correct:Number(answer)===question.answer};
}
export function shuffled(items) {
  const output=[...items];
  for(let i=output.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[output[i],output[j]]=[output[j],output[i]];}
  return output;
}
export function drawByDifficulty(pool, limit) {
  if(pool.length<=limit)return [...pool].sort((a,b)=>a.difficulty-b.difficulty);
  const quotas=[Math.round(limit*.25),Math.round(limit*.35)];quotas.push(limit-quotas[0]-quotas[1]);
  const chosen=quotas.flatMap((n,i)=>shuffled(pool.filter(q=>q.difficulty===i+1)).slice(0,n));
  const selected=new Set(chosen.map(q=>q.id));
  chosen.push(...shuffled(pool.filter(q=>!selected.has(q.id))).slice(0,limit-chosen.length));
  return chosen.sort((a,b)=>a.difficulty-b.difficulty);
}
export function cleanProgress(input, lessonIds, questionIds, questions) {
  const result={statuses:{},wrong:{},attempts:[],lastLessonId:null,draft:null};
  if(!input||typeof input!=='object')return result;
  for(const [id,status] of Object.entries(input.statuses||{}))if(lessonIds.has(id)&&['new','studying','done','skipped'].includes(status))result.statuses[id]=status;
  for(const [id,count] of Object.entries(input.wrong||{}))if(questionIds.has(id)&&Number.isFinite(count)&&count>0)result.wrong[id]=Math.floor(count);
  result.attempts=(Array.isArray(input.attempts)?input.attempts:[]).filter(a=>a&&Number.isFinite(a.correct)&&Number.isFinite(a.total)&&a.correct>=0&&a.correct<=a.total&&typeof a.date==='string').slice(0,100);
  if(lessonIds.has(input.lastLessonId))result.lastLessonId=input.lastLessonId;
  const draft=input.draft;
  if(draft&&Array.isArray(draft.ids)&&draft.ids.length&&draft.ids.every(id=>questionIds.has(id))&&new Set(draft.ids).size===draft.ids.length){
    const index=Number(draft.index);
    result.draft={title:String(draft.title||'继续练习').slice(0,160),type:['lesson','unit','all','upper','lower','g8-upper','g8-lower','g9-full','wrong','question'].includes(draft.type)?draft.type:'all',id:String(draft.id||''),ids:draft.ids,answers:{},index:Number.isFinite(index)?Math.max(0,Math.min(Math.floor(index),draft.ids.length-1)):0};
    for(const id of draft.ids){
      const a=draft.answers?.[id],q=questions?.get(id);
      if(q&&['case','multi'].includes(q.type)&&!Array.isArray(a))continue;
      if(q&&['text','choice'].includes(q.type)&&Array.isArray(a))continue;
      if(typeof a==='string'||typeof a==='number')result.draft.answers[id]=String(a).slice(0,1000);
      else if(Array.isArray(a))result.draft.answers[id]=a.slice(0,20).map(x=>String(x??'').slice(0,1000));
    }
  }
  return result;
}

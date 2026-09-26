export function normalize(value) {
  const normalized = String(value ?? '').trim().normalize('NFKC')
    .replace(/\s/g,'').replace(/[，、]/g,',').replace(/[：∶]/g,':')
    .replace(/[＝]/g,'=').replace(/[→⟶]/g,'→');
  // 只对单个数值做等值处理；单位和百分号仍保留，化学式及比值不改写。
  const numeric = normalized.match(/^([+-]?(?:\d+\.?\d*|\.\d+))(%|kg|mg|g|t|ml|l|cm|cm3|kwh|g\/ml|°c)?$/i);
  return numeric && Number.isFinite(Number(numeric[1])) ? String(Number(numeric[1]))+(numeric[2]||'').toLowerCase() : normalized;
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
    result.draft={title:String(draft.title||'继续练习').slice(0,160),type:['lesson','unit','all','upper','lower','wrong','question'].includes(draft.type)?draft.type:'all',id:String(draft.id||''),ids:draft.ids,answers:{},index:Number.isFinite(index)?Math.max(0,Math.min(Math.floor(index),draft.ids.length-1)):0};
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

// Explanations use authored answers and lesson facts. No generated grading claims.
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const phrases=text=>new Set([...String(text).normalize('NFKC').matchAll(/[\u4e00-\u9fff]{2,}|[A-Za-z][A-Za-z0-9]*/g)].flatMap(m=>m[0].match(/[A-Za-z]/)?[m[0]]:Array.from({length:m[0].length-1},(_,i)=>m[0].slice(i,i+2))));
export function explanationSections(question,lesson,detail){
  const query=phrases(question.stem+' '+question.explain);
  const points=(lesson.points||[]).map((text,index)=>({text,index,score:[...phrases(text)].filter(p=>query.has(p)).length})).sort((a,b)=>b.score-a.score||a.index-b.index);
  const steps=question.solutionSteps||String(question.explain||'').split(/[；。]+/).map(s=>s.trim()).filter(Boolean);
  return {basis:question.knowledgeNote||points[0]?.text||detail.definition,steps,method:detail.method,pitfall:question.pitfall||lesson.pitfall};
}
export function explanationHTML(question,lesson,detail,format){
  const e=explanationSections(question,lesson,detail);
  return `<div class="answer-analysis"><h3>解题依据</h3><p>${format(e.basis)}</p><h3>解题过程</h3><ol class="solution-steps">${e.steps.map(step=>`<li>${format(step)}</li>`).join('')}</ol>${e.pitfall?`<div class="analysis-pitfall"><strong>本课易错提醒</strong><p>${format(e.pitfall)}</p></div>`:''}<details class="analysis-method"><summary>展开本课通用解题方法</summary><p>${format(e.method)}</p></details><div class="analysis-links"><a class="btn small" href="#/lesson/${escape(lesson.id)}/definition">回看相关知识点 ↗</a><a class="btn small" href="#/lesson/${escape(lesson.id)}/worked">查看本课例题 ↗</a></div></div>`;
}

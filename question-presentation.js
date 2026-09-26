// 题型与评分提示以真实评分规则为准，不让自定义 kind 覆盖“多选题”。
export const questionTypes={choice:'单选题',multi:'多选题',text:'填空题',case:'综合探究',order:'操作排序',match:'分类匹配'};
export function questionBadge(q){return `<strong class="question-type ${q.type==='multi'?'question-type-multi':''}">${questionTypes[q.type]||'练习题'}</strong>`;}
export function answerInstructions(q){
  if(q.type==='multi')return '<div class="multi-select-notice" role="note" aria-label="多选题作答提示"><span class="multi-select-symbol" aria-hidden="true">☑</span><div><strong>本题为多选题</strong><p>有多个正确选项，请选出全部正确选项。漏选、错选均不得分。</p></div></div>';
  const text=q.type==='choice'?'只有一个正确选项，请选择一项。':['case','order','match'].includes(q.type)?'请完成每一小问，全部正确计为本题答对。单位、精度及填写形式以各小问要求为准。':'请按题目要求填写，注意数值单位、百分号及化学式大小写。';
  return `<p class="question-instructions">${text}</p>`;
}
export function correctAnswerHTML(q,format){
  let answer;
  if(['case','order','match'].includes(q.type))answer=`<ol class="correct-answer-parts">${q.parts.map(([,values],i)=>`<li><span>第 ${i+1} 小问</span><div>${format(values[0])}</div></li>`).join('')}</ol>`;
  else if(q.type==='text')answer=`<p class="correct-answer-text">${format(q.answers[0])}</p>`;
  else{const selected=q.type==='multi'?[...q.answers].sort((a,b)=>a-b):[q.answer];answer=`<ul class="correct-answer-options">${selected.map(i=>`<li><span class="answer-letter">${String.fromCharCode(65+i)}</span><div>${format(q.options[i])}</div></li>`).join('')}</ul>`;}
  return `<section class="correct-answer-block" aria-label="正确答案"><h3>正确答案${q.type==='multi'?' · 多选':''}</h3>${answer}</section>`;
}
export const chemistryReference='计算参考（题目另有规定时以题目为准）：相对原子质量 H 1、C 12、N 14、O 16、Na 23、Mg 24、Al 27、P 31、S 32、Cl 35.5、K 39、Ca 40、Mn 55、Fe 56、Cu 64、Zn 65、Ag 108、Ba 137。';

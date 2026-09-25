import { unit1 } from "./bank/unit1.js";
import { unit2 } from "./bank/unit2.js";
import { unit3 } from "./bank/unit3.js";
import { unit4 } from "./bank/unit4.js";
import { unit5 } from "./bank/unit5.js";
import { unit6 } from "./bank/unit6.js";
import { unit7 } from "./bank/unit7.js";
import { cases } from "./bank/cases.js";

export const packs = Object.assign({}, unit1, unit2, unit3, unit4, unit5, unit6, unit7);

export function questionsFor(lesson) {
  const pack = packs[lesson.id];
  if (!pack) throw new Error(`缺少 ${lesson.id} 的进阶题库`);
  const foundation = lesson.questions.map(q => ({...q,difficulty:1,kind:q.type==="text"?"基础填空":"基础选择"}));
  const claims = pack.claims.map(([stem,correct,explain],index) => ({
    id:`exam-${lesson.id}-j${index+1}`,type:"choice",difficulty:index<2?1:2,kind:"判断辨析",
    stem:`判断下列说法是否正确：${stem}`,options:["正确","错误"],answer:correct?0:1,explain
  }));
  const tasks = pack.tasks.map((q,index) => ({...q,id:`exam-${lesson.id}-t${index+1}`,kind:q.kind||({choice:"情境选择",multi:"多项分析",text:"综合填空"}[q.type])}));
  if (!cases[lesson.id]) throw new Error(`缺少 ${lesson.id} 的综合题`);
  const scenario = {...cases[lesson.id],id:`exam-${lesson.id}-case`,difficulty:3,kind:"情境综合题"};
  return [...foundation,...claims,...tasks,scenario].sort((a,b)=>a.difficulty-b.difficulty);
}

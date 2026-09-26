import {chemistryQuestionDiagram} from './chemistry/question-diagrams.js?v=20260926-sixteen-type1';
import {chemistryQuestions} from './chemistry/questions-2026.js?v=20260926-sixteen-type1';
import { units as upperUnits } from './content.js?v=20260926-sixteen-type1';
import { questionsFor } from './bank.js?v=20260926-sixteen-type1';
import { lessonDetails } from './lesson-details.js?v=20260926-sixteen-type1';
import { lowerUnitsA, lowerDetailsA } from './lower-part-a.js?v=20260926-sixteen-type1';
import { lowerUnitsB, lowerDetailsB } from './lower-part-b.js?v=20260926-sixteen-type1';
import { upperDetailsA } from './upper-details-a.js?v=20260926-sixteen-type1';
import { upperDetailsB } from './upper-details-b.js?v=20260926-sixteen-type1';
import { upperDetailsC } from './upper-details-c.js?v=20260926-sixteen-type1';

// 课程与学习记录按课程 ID 隔离；新增学科只需提供同一内容结构。
export const stages = [
  { id:'primary', title:'小学', grades:'一年级 — 六年级', description:'建立好奇心，打好基础' },
  { id:'middle', title:'初中', grades:'七年级 — 九年级', description:'理解知识，学会独立思考' },
  { id:'high', title:'高中', grades:'高一 — 高三', description:'深入探究，连接知识体系' }
];
export const course = {
  id:'chemistry-grade9-pep', stage:'middle', grade:9, subject:'chemistry',
  title:'九年级化学', publisher:'人民教育出版社', edition:'人教版新教材',
  description:'从认识物质，到用化学理解生活。',
  terms:[{id:'upper',title:'上册',subtitle:'认识物质与化学变化'}, {id:'lower',title:'下册',subtitle:'探索物质与社会生活'}]
};
const originalUnits = [
  ...upperUnits.map(unit => ({...unit, term:'upper', lessons:unit.lessons.map(lesson=>({...lesson,questions:questionsFor(lesson)}))})),
  ...lowerUnitsA, ...lowerUnitsB
];
export const units = originalUnits.map(unit=>({...unit,lessons:unit.lessons.map(lesson=>({...lesson,questions:chemistryQuestions[lesson.id].map(q=>({...q,...(chemistryQuestionDiagram(q.id)?{diagram:chemistryQuestionDiagram(q.id)}:{})}))}))}));
const activeIds=new Set(units.flatMap(u=>u.lessons.flatMap(l=>l.questions.map(q=>q.id))));
export const retiredQuestionIds=new Set(originalUnits.flatMap(u=>u.lessons.flatMap(l=>l.questions.map(q=>q.id))).filter(id=>!activeIds.has(id)));
const upperExtra = {...upperDetailsA,...upperDetailsB,...upperDetailsC};
export const details = {
  ...Object.fromEntries(Object.entries(lessonDetails).map(([id,detail])=>[id,{...detail,...upperExtra[id]}])),
  ...lowerDetailsA, ...lowerDetailsB
};
export const allLessons = units.flatMap(unit => unit.lessons.map(lesson => ({
  ...lesson, courseId:course.id, unitId:unit.id, unitTitle:unit.title, term:unit.term,
  questions:lesson.questions.map((question,index)=>({...question,id:question.id || `${lesson.id}-q${index}`}))
})));
export const lessonById = new Map(allLessons.map(lesson=>[lesson.id,lesson]));
export const questionById = new Map(allLessons.flatMap(lesson=>lesson.questions.map(q=>[q.id,{...q,lessonId:lesson.id,unitId:lesson.unitId,term:lesson.term}])));

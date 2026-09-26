import {chemistryQuestionDiagram} from './chemistry/question-diagrams.js';
import {chemistryQuestions} from './chemistry/questions-2026.js';
import {fixChemistryData} from './chemistry/equations.js';
import { units as upperUnits } from './content.js';
import { questionsFor } from './bank.js';
import { lessonDetails } from './lesson-details.js';
import { lowerUnitsA, lowerDetailsA } from './lower-part-a.js';
import { lowerUnitsB, lowerDetailsB } from './lower-part-b.js';
import { upperDetailsA } from './upper-details-a.js';
import { upperDetailsB } from './upper-details-b.js';
import { upperDetailsC } from './upper-details-c.js';

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
export const units = fixChemistryData(originalUnits.map(unit=>({...unit,lessons:unit.lessons.map(lesson=>({...lesson,questions:chemistryQuestions[lesson.id].map(q=>({...q,...(chemistryQuestionDiagram(q.id)?{diagram:chemistryQuestionDiagram(q.id)}:{})}))}))})));
const activeIds=new Set(units.flatMap(u=>u.lessons.flatMap(l=>l.questions.map(q=>q.id))));
export const retiredQuestionIds=new Set(originalUnits.flatMap(u=>u.lessons.flatMap(l=>l.questions.map(q=>q.id))).filter(id=>!activeIds.has(id)));
const upperExtra = {...upperDetailsA,...upperDetailsB,...upperDetailsC};
export const details = fixChemistryData({
  ...Object.fromEntries(Object.entries(lessonDetails).map(([id,detail])=>[id,{...detail,...upperExtra[id]}])),
  ...lowerDetailsA, ...lowerDetailsB
});
export const allLessons = units.flatMap(unit => unit.lessons.map(lesson => ({
  ...lesson, courseId:course.id, unitId:unit.id, unitTitle:unit.title, term:unit.term,
  questions:lesson.questions.map((question,index)=>({...question,id:question.id || `${lesson.id}-q${index}`}))
})));
export const lessonById = new Map(allLessons.map(lesson=>[lesson.id,lesson]));
export const questionById = new Map(allLessons.flatMap(lesson=>lesson.questions.map(q=>[q.id,{...q,lessonId:lesson.id,unitId:lesson.unitId,term:lesson.term}])));

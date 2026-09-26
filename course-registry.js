// 课程元信息与内容分开；只在进入课程时载入其讲解与题库。
export const stages = [
  {id:'primary',title:'小学',grades:'一年级 — 六年级',description:'建立好奇心，打好基础'},
  {id:'middle',title:'初中',grades:'七年级 — 九年级',description:'理解知识，学会独立思考'},
  {id:'high',title:'高中',grades:'高一 — 高三',description:'深入探究，连接知识体系'}
];
export const courses = [
  {
    id:'physics-middle-pep',stage:'middle',grades:[8,9],subject:'physics',subjectTitle:'物理',
    title:'初中物理',gradeLabel:'八至九年级',edition:'人教版新教材',publisher:'人民教育出版社',
    unitLabel:'章',unitTitle:'章节',scopeLabel:'八上 · 八下 · 九年级',shortScope:'完整三册',
    description:'从生活中的现象，理解力、声、光、热与电。',eyebrow:'PHYSICS',
    summary:'22 章 · 八上、八下、九年级全一册',
    practiceDescription:'每课16题，每4题提升一级：基础理解、应用辨析、中考综合、拓展拔高。可自由跳题，按自己的进度完成。',
    difficultyLabels:{1:'基础理解',2:'应用辨析',3:'中考综合',4:'拓展拔高'},
    verifiedAt:'2026-09-26',editionNote:'截至2026核验 · 2024修订人教版体系',
    terms:[
      {id:'g8-upper',title:'八年级上册',short:'八上',subtitle:'运动、声、光、物态与密度'},
      {id:'g8-lower',title:'八年级下册',short:'八下',subtitle:'力、运动、压强与机械能'},
      {id:'g9-full',title:'九年级全一册',short:'九年级',subtitle:'内能、电学、电磁与能源'}
    ],
    async load(){
      const [a,b,c,review]=await Promise.all([import('./physics/grade8-upper.js?v=20260926-sixteen-type1'),import('./physics/grade8-lower.js?v=20260926-sixteen-type1'),import('./physics/grade9.js?v=20260926-sixteen-type1'),import('./physics/question-refinements.js?v=20260926-sixteen-type1')]);
      return buildCourse(this,review.refinePhysicsUnits([...a.physicsUnits8U,...b.physicsUnits8L,...c.physicsUnits9]),{...a.physicsDetails8U,...b.physicsDetails8L,...c.physicsDetails9},{...a.physicsVisuals8U,...b.physicsVisuals8L,...c.physicsVisuals9});
    }
  },
  {
    id:'chemistry-grade9-pep',stage:'middle',grades:[9],subject:'chemistry',subjectTitle:'化学',
    title:'九年级化学',gradeLabel:'九年级',edition:'人教版新教材',publisher:'人民教育出版社',
    unitLabel:'单元',unitTitle:'单元',scopeLabel:'上册 · 下册',shortScope:'上下册',
    description:'从认识物质，到用化学理解生活。',eyebrow:'CHEMISTRY',summary:'11 单元 · 九年级上下册',
    verifiedAt:'2026-09-26',editionNote:'人教版新教材 · 上下册 · 广州中考分层训练',
    practiceDescription:'每课16题，每4题提升一级：基础理解、应用辨析、广州中考综合、拓展拔高。可自由跳题，按自己的进度完成。',
    difficultyLabels:{1:'基础理解',2:'应用辨析',3:'广州中考综合',4:'拓展拔高'},
    terms:[{id:'upper',title:'九年级上册',short:'上册',subtitle:'认识物质与化学变化'},{id:'lower',title:'九年级下册',short:'下册',subtitle:'探索物质与社会生活'}],
    async load(){const [content,upper,lower]=await Promise.all([import('./catalog.js?v=20260926-sixteen-type1'),import('./lesson-visuals.js?v=20260926-sixteen-type1'),import('./lower-visuals.js?v=20260926-sixteen-type1')]);return {...buildCourse(this,content.units,content.details,{},id=>content.lessonById.get(id)?.term==='lower'?lower.lowerDiagramFor(id):upper.diagramFor(id)),retiredQuestionIds:content.retiredQuestionIds};}
  }
];
const cache=new Map();
export function courseMeta(id){return courses.find(c=>c.id===id);}
export function courseIdForRoute({name,id}){
  if(name==='course')return courseMeta(id)?.id;
  if(name==='lesson'&&id)return id.startsWith('p')?'physics-middle-pep':'chemistry-grade9-pep';
  if(name==='unit'&&id)return id.startsWith('p')?'physics-middle-pep':'chemistry-grade9-pep';
  return null;
}
export function loadCourse(id){
  const meta=courseMeta(id);if(!meta)return Promise.reject(new Error('找不到这门课程'));
  if(!cache.has(id))cache.set(id,meta.load().catch(error=>{cache.delete(id);throw error;}));
  return cache.get(id);
}
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function buildCourse(course,units,details,visuals={},renderDiagram){
  const normalizedUnits=units.map(u=>({...u,number:u.number??u.id}));
  const allLessons=normalizedUnits.flatMap(unit=>unit.lessons.map(lesson=>({...lesson,courseId:course.id,unitId:unit.id,unitNumber:unit.number,unitTitle:unit.title,term:unit.term,questions:lesson.questions.map((q,index)=>({...q,id:q.id||`${lesson.id}-q${index}`}))})));
  const lessonById=new Map(allLessons.map(l=>[l.id,l]));
  const questionById=new Map(allLessons.flatMap(l=>l.questions.map(q=>[q.id,{...q,lessonId:l.id,unitId:l.unitId,term:l.term}])));
  return {course,units:normalizedUnits,details,allLessons,lessonById,questionById,visuals,
    diagramFor(id){if(renderDiagram)return renderDiagram(id);const v=visuals[id];if(!v)throw new Error(`缺少图示：${id}`);return `<figure class="diagram-card">${v.svg}<figcaption>${escape(v.caption||v.title)} · 原创教学示意，可放大查看</figcaption></figure>`;}
  };
}

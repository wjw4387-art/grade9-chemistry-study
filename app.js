import { units } from "./content.js";
import { questionsFor } from "./bank.js";
import { lessonDetails } from "./lesson-details.js";
import { diagramFor } from "./lesson-visuals.js";

const KEY = "chemistry-grade9-up-v1";
const allLessons = units.flatMap(unit => unit.lessons.map(lesson => ({...lesson, questions:questionsFor(lesson), unitId: unit.id, unitTitle: unit.title})));
const lessonById = new Map(allLessons.map(lesson => [lesson.id, lesson]));
const questionById = new Map(allLessons.flatMap(lesson => lesson.questions.map(question => [question.id, {...question, lessonId: lesson.id, unitId: lesson.unitId}])));
const labels = {new:"未学",studying:"学习中",done:"已掌握",skipped:"暂时跳过"};
let state = loadState();
let activeTest = null;
let lastResult = null;
let unitFilter = "all";

function loadState(){
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {statuses:saved.statuses || {}, wrong:saved.wrong || {}, attempts:saved.attempts || []};
  } catch { return {statuses:{}, wrong:{}, attempts:[]}; }
}
function saveState(){ try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} }
function escapeHtml(value){ return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function statusOf(id){ return state.statuses[id] || "new"; }
function statusChip(id){ const status=statusOf(id); return `<span class="chip ${status}">${labels[status]}</span>`; }
function percent(unit){ if(!unit.lessons.length) return 0; return Math.round(unit.lessons.filter(l=>statusOf(l.id)==="done").length/unit.lessons.length*100); }
function navigate(path){ const next="#"+path; if(location.hash===next)render(); else location.hash=next; }
function route(){ const path=(location.hash || "#/home").slice(1); const parts=path.split("/").filter(Boolean); return {name:parts[0]||"home",id:parts[1],sub:parts[2]}; }
function header(current){
  return `<header class="topbar"><a class="brand" href="#/home"><span class="brand-mark">H</span><span>九上化学自主学</span></a><nav class="topnav" aria-label="主导航"><a class="navbtn ${current==="home"||current==="unit"||current==="lesson"?"active":""}" href="#/home">知识地图</a><a class="navbtn ${current==="review"?"active":""}" href="#/review">复习本</a><a class="navbtn ${current==="test"?"active":""}" href="#/test">做题测试</a></nav></header>`;
}
function sidebar(selected){ return `<aside class="sidebar"><div class="side-title">九年级上册 · 七个单元</div><nav class="unitnav" aria-label="单元导航">${units.map(u=>`<a class="unitlink ${selected==u.id?'active':''}" href="#/unit/${u.id}"><span class="unitnum">${String(u.id).padStart(2,'0')}</span><span>${u.title}</span></a>`).join("")}</nav><div class="side-note">自由选择内容。暂时跳过不会算作已掌握，之后可以随时回来学习。</div></aside>`; }
function frame(page,current,selected){ return `<div class="shell">${header(current)}<div class="layout">${sidebar(selected)}<main class="main" id="main" tabindex="-1">${page}<div class="footer">内容依据人教版九年级上册新教材整理 · 学习记录仅保存在本设备</div></main></div></div>`; }
function summary(){const counts={new:0,studying:0,done:0,skipped:0}; allLessons.forEach(l=>counts[statusOf(l.id)]++); return `<div class="summary-row"><div class="summary-item"><b>${allLessons.length}</b><span>学习内容</span></div><div class="summary-item"><b>${counts.done}</b><span>已掌握</span></div><div class="summary-item"><b>${counts.skipped}</b><span>暂时跳过</span></div><div class="summary-item"><b>${Object.keys(state.wrong).length}</b><span>待复习题</span></div></div>`;}
function homePage(){return `<p class="eyebrow">九年级上册 · 自由学习</p><h1 class="page-title">选一个单元，直接开始</h1><p class="page-sub">可按自己的进度学习任意课题，也可以先做题。已经会的内容标记“已掌握”，暂时不学的内容选择“跳过”。</p>${summary()}<div class="grid">${units.map(u=>`<a class="card unit-card" href="#/unit/${u.id}"><span class="meta">单元 ${String(u.id).padStart(2,'0')}</span><h2>${u.title}</h2><p>${u.intro}</p><div class="progress-track" aria-label="已掌握 ${percent(u)}%"><div class="progress-fill" style="width:${percent(u)}%"></div></div><div class="bottom"><span class="muted">${u.lessons.length} 项内容</span><strong>${percent(u)}% 已掌握</strong></div></a>`).join("")}</div>`;}
function lessonRow(l){return `<div class="lesson-row"><div><span class="meta">${l.kind}</span> ${statusChip(l.id)}<h3><a href="#/lesson/${l.id}">${l.title}</a></h3><p>${l.goal}</p></div><div class="lesson-actions"><button class="btn small" data-action="open" data-id="${l.id}">学习</button><button class="btn small" data-action="test-lesson" data-id="${l.id}">先做题</button><button class="btn small" data-action="done" data-id="${l.id}">已掌握</button><button class="btn small" data-action="skip" data-id="${l.id}">跳过</button></div></div>`;}
function unitPage(id){const unit=units.find(u=>String(u.id)===String(id));if(!unit)return missingPage(); const lessons=unit.lessons.filter(l=>unitFilter==="all"||statusOf(l.id)===unitFilter);return `<div class="crumb"><button data-action="home">知识地图</button><span>/</span><span>第${unit.id}单元</span></div><p class="eyebrow">第 ${unit.id} 单元</p><h1 class="page-title">${unit.title}</h1><p class="page-sub">${unit.intro} 可从任意课题、实验或实践活动进入。</p><div class="toolbar"><button class="btn primary" data-action="test-unit" data-id="${unit.id}">本单元测试</button><span class="chip done">${percent(unit)}% 已掌握</span></div><div class="filterbar" aria-label="内容筛选">${[["all","全部"],["new","未学"],["studying","学习中"],["done","已掌握"],["skipped","暂时跳过"]].map(([key,label])=>`<button class="btn small ${unitFilter===key?'active':''}" data-action="filter" data-filter="${key}">${label}</button>`).join("")}</div><div class="lesson-list">${lessons.length?lessons.map(lessonRow).join(""):'<div class="empty">此状态下暂无内容。可以切换上方筛选。</div>'}</div>`;}
function lessonPage(id){
 const l=lessonById.get(id);if(!l)return missingPage();
 const unit=units.find(u=>u.id===l.unitId), d=lessonDetails[id];
 if(!d)throw new Error(`缺少 ${id} 的详细讲解`);
 if(statusOf(id)==="new"){state.statuses[id]="studying";saveState();}
 return `<div class="reading"><div class="crumb"><button data-action="home">知识地图</button><span>/</span><button data-action="unit" data-id="${l.unitId}">${unit.title}</button><span>/</span><span>${l.title}</span></div><p class="eyebrow">${l.kind} · 第${l.unitId}单元</p><h1 class="page-title">${l.title}</h1><p class="lead">${l.goal}</p><div class="toolbar">${statusChip(l.id)}<button class="btn primary" data-action="test-lesson" data-id="${l.id}">做这节的题</button><button class="btn" data-action="done" data-id="${l.id}">标记已掌握</button><button class="btn" data-action="skip" data-id="${l.id}">暂时跳过</button></div>
 <section class="panel teaching-section"><h2>教材核心定义</h2><p>${escapeHtml(d.definition)}</p></section>
 ${diagramFor(id)}
 <section class="panel teaching-section"><h2>讲明白</h2><p>${escapeHtml(d.plain)}</p></section>
 <section class="panel teaching-section"><h2>考试怎么用</h2><p>${escapeHtml(d.method)}</p></section>
 <section class="panel teaching-section"><h2>例题分步看</h2><p>${escapeHtml(d.worked)}</p></section>
 <section class="panel"><h2>知识清单</h2><ol class="point-list">${l.points.map(p=>`<li>${p}</li>`).join("")}</ol></section>
 ${l.pitfall?`<div class="callout"><b>容易混淆</b><p>${l.pitfall}</p></div>`:''}
 <div class="toolbar"><button class="btn primary" data-action="test-lesson" data-id="${l.id}">按难度练习 ${l.questions.length} 题</button><button class="btn ghost" data-action="unit" data-id="${l.unitId}">返回单元</button></div></div>`;
}
function reviewPage(){const wrongIds=Object.keys(state.wrong).filter(id=>questionById.has(id));const skipped=allLessons.filter(l=>statusOf(l.id)==="skipped");return `<p class="eyebrow">按自己的节奏巩固</p><h1 class="page-title">复习本</h1><p class="page-sub">这里收集做错的题和暂时跳过的内容。答对错题后，它会从待复习题中移出。</p>${summary()}<section class="panel"><h2>待复习题</h2>${wrongIds.length?`<p class="muted">${wrongIds.length} 题需要巩固。</p><button class="btn primary" data-action="test-wrong">重做错题</button> <button class="btn" data-action="clear-wrong">清空错题记录</button><div class="lesson-list" style="margin-top:16px">${wrongIds.map(id=>{const q=questionById.get(id);const l=lessonById.get(q.lessonId);return `<div class="lesson-row"><div><span class="chip wrong">错题</span><h3>${l.title}</h3><p>${q.stem}</p></div><div class="lesson-actions"><button class="btn small" data-action="open" data-id="${l.id}">回看知识点</button></div></div>`}).join("")}</div>`:'<div class="empty">目前没有待复习的错题。可以选择一个单元开始测试。</div>'}</section><section class="panel"><h2>暂时跳过的内容</h2>${skipped.length?`<div class="lesson-list">${skipped.map(lessonRow).join("")}</div>`:'<p class="muted">暂无跳过的内容。</p>'}</section>`;}
function testHome(){return `<p class="eyebrow">随时检测掌握情况</p><h1 class="page-title">做题测试</h1><p class="page-sub">小课练习至少15题，按基础→提高→中考挑战排序；单元和全册测试按难度分层抽题。一次提交后显示解析，错题进入复习本。</p><div class="panel"><div class="test-config"><div class="field"><label for="scope">测试范围</label><select id="scope"><option value="all">九上全册 · 40题</option>${units.map(u=>`<option value="unit:${u.id}">第${u.id}单元 · ${u.title} · 24题</option>`).join("")}</select></div><button class="btn primary" data-action="test-selected">开始测试</button></div></div><div class="section-head"><h2>按单元开始</h2></div><div class="grid">${units.map(u=>`<div class="card"><span class="meta">第${u.id}单元</span><h3>${u.title}</h3><p>${u.lessons.reduce((n,l)=>n+questionsFor(l).length,0)} 道练习题</p><div class="bottom"><button class="btn small" data-action="test-unit" data-id="${u.id}">开始</button></div></div>`).join("")}</div>`;}
function shuffled(items){const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function drawByDifficulty(pool,limit){if(pool.length<=limit)return [...pool].sort((a,b)=>a.difficulty-b.difficulty);const quotas=[Math.round(limit*.25),Math.round(limit*.35)];quotas.push(limit-quotas[0]-quotas[1]);let chosen=[];for(let level=1;level<=3;level++)chosen.push(...shuffled(pool.filter(q=>q.difficulty===level)).slice(0,quotas[level-1]));if(chosen.length<limit){const selected=new Set(chosen.map(q=>q.id));chosen.push(...shuffled(pool.filter(q=>!selected.has(q.id))).slice(0,limit-chosen.length));}return chosen.sort((a,b)=>a.difficulty-b.difficulty);}
function startTest(type,id){let pool=[];let title="";if(type==="lesson"){const l=lessonById.get(id);if(!l)return;pool=l.questions;title=l.title+" · 课题练习";}else if(type==="unit"){const u=units.find(u=>String(u.id)===String(id));if(!u)return;pool=u.lessons.flatMap(l=>lessonById.get(l.id).questions);title=u.title+" · 单元测试";}else if(type==="wrong"){pool=Object.keys(state.wrong).map(qid=>questionById.get(qid)).filter(Boolean);title="错题重练";}else{pool=[...questionById.values()];title="九上全册测试";}if(!pool.length){alert("这个范围暂时没有题目。");return;}const limit=type==="lesson"||type==="wrong"?pool.length:type==="unit"?Math.min(pool.length,24):Math.min(pool.length,40);activeTest={title,questions:drawByDifficulty(pool,limit),type,id,submitted:false};lastResult=null;navigate("/test/run");}
function testRun(){if(!activeTest)return testHome();const t=activeTest;return `<div class="crumb"><button data-action="test-home">做题测试</button><span>/</span><span>${t.title}</span></div><p class="eyebrow">${t.questions.length} 道题</p><h1 class="page-title">${t.title}</h1><p class="page-sub">先独立作答，再一次提交。未作答的题按错误记录。</p>${lastResult?`<div class="panel"><span class="results-score">答对 ${lastResult.correct} / ${lastResult.total} 题</span><p class="muted">错题已加入复习本，可随时重做。</p>${t.type==='lesson'&&lastResult.correct===lastResult.total?`<button class="btn gold" data-action="done" data-id="${t.id}">这节已掌握</button> `:''}<button class="btn" data-action="test-home">选择其他测试</button></div>`:""}<form id="quiz-form">${t.questions.map((q,index)=>questionCard(q,index,lastResult)).join("")}${!t.submitted?'<button class="btn primary" type="submit">提交并查看解析</button>':'<button class="btn" type="button" data-action="test-home">返回测试</button>'}</form>`;}
function caseTable(table){if(!table)return '';return `<div class="table-scroll"><table class="case-table"><thead><tr>${table.headers.map(h=>`<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map(cell=>`<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
function questionCard(q,index,result){
 const answer=result?.items.find(item=>item.id===q.id),selected=answer?.answer;
 let options,expected;
 if(q.type==='case'){
   options=`${caseTable(q.table)}<div class="case-parts">${q.parts.map(([prompt],i)=>`<label class="case-part"><span>（${i+1}）${escapeHtml(prompt)}</span><input class="text-answer" type="text" name="${q.id}::${i}" aria-label="第${index+1}题第${i+1}空" ${result?'disabled':''} value="${answer?escapeHtml(selected?.[i]||''):''}" placeholder="输入答案"></label>`).join('')}</div>`;
   expected=q.parts.map(([,answers],i)=>`（${i+1}）${answers[0]}`).join('；');
 }else if(q.type==='text'){
   options=`<input class="text-answer" type="text" name="${q.id}" aria-label="第${index+1}题答案" ${result?'disabled':''} value="${answer?escapeHtml(selected||''):''}" placeholder="输入答案">`;
   expected=q.answers[0];
 }else{
   options=`<div class="options">${q.options.map((op,i)=>`<label class="option"><input type="${q.type==='multi'?'checkbox':'radio'}" name="${q.id}" value="${i}" ${result?'disabled':''} ${answer&&(Array.isArray(selected)?selected.includes(String(i)):selected!==null&&Number(selected)===i)?'checked':''}><span>${String.fromCharCode(65+i)}. ${escapeHtml(op)}</span></label>`).join('')}</div>`;
   expected=q.type==='multi'?q.answers.map(i=>String.fromCharCode(65+i)).join('、'):String.fromCharCode(65+q.answer);
 }
 const difficulty={1:'基础',2:'提高',3:'中考挑战'}[q.difficulty];
 return `<section class="panel question"><span class="meta">第 ${index+1} 题 · ${difficulty} · ${q.kind||'练习'}${q.type==='multi'?' · 多选':''}</span><h3>${escapeHtml(q.stem)}</h3>${options}${answer?`<div class="feedback ${answer.correct?'':'bad'}"><b>${answer.correct?'回答正确':'回答有误'} · 正确答案：${escapeHtml(expected)}</b>${escapeHtml(q.explain)}</div>`:''}</section>`;
}
function normalize(value){return String(value||"").trim().toLowerCase().replace(/\s/g,"").replace(/[，、]/g,",").replace(/[：∶]/g,":").replace(/％/g,"%");}
function submitQuiz(form){
 if(!activeTest||activeTest.submitted)return;
 const data=new FormData(form);let correct=0;
 const items=activeTest.questions.map(q=>{
   const raw=q.type==='case'?q.parts.map((_,i)=>data.get(`${q.id}::${i}`)):q.type==='multi'?data.getAll(q.id):data.get(q.id);
   const ok=q.type==='case'?q.parts.every(([,answers],i)=>answers.some(a=>normalize(a)===normalize(raw[i]))):q.type==='text'?q.answers.some(a=>normalize(a)===normalize(raw)):q.type==='multi'?raw.map(Number).sort((a,b)=>a-b).join(',')===q.answers.slice().sort((a,b)=>a-b).join(','):raw!==null&&Number(raw)===q.answer;
   if(ok){correct++;delete state.wrong[q.id];}else{state.wrong[q.id]=(state.wrong[q.id]||0)+1;}
   return {id:q.id,correct:ok,answer:raw};
 });
 state.attempts.unshift({date:new Date().toISOString(),type:activeTest.type,id:activeTest.id,correct,total:items.length});state.attempts=state.attempts.slice(0,100);saveState();activeTest.submitted=true;lastResult={correct,total:items.length,items};render();window.scrollTo({top:0,behavior:'smooth'});
}
function missingPage(){return `<h1 class="page-title">内容未找到</h1><p class="page-sub">请从知识地图重新选择。</p><a class="btn primary" href="#/home">返回知识地图</a>`;}
function render(){const r=route();const selected=r.name==="unit"?r.id:r.name==="lesson"?lessonById.get(r.id)?.unitId:null;let page;if(r.name==="home")page=homePage();else if(r.name==="unit")page=unitPage(r.id);else if(r.name==="lesson")page=lessonPage(r.id);else if(r.name==="review")page=reviewPage();else if(r.name==="test")page=r.id==="run"?testRun():testHome();else page=missingPage();document.getElementById("app").innerHTML=frame(page,r.name,selected);}
document.addEventListener("click",event=>{const button=event.target.closest("[data-action]");if(!button)return;const action=button.dataset.action,id=button.dataset.id;if(action==="home")navigate("/home");if(action==="unit")navigate("/unit/"+id);if(action==="open")navigate("/lesson/"+id);if(action==="done"||action==="skip"){state.statuses[id]=action==="done"?"done":"skipped";saveState();render();}if(action==="filter"){unitFilter=button.dataset.filter;render();}if(action==="test-lesson")startTest("lesson",id);if(action==="test-unit")startTest("unit",id);if(action==="test-wrong")startTest("wrong");if(action==="clear-wrong"&&confirm("确定清空本设备的错题记录吗？")){state.wrong={};saveState();render();}if(action==="test-selected"){const scope=document.getElementById("scope")?.value||"all";scope.startsWith("unit:")?startTest("unit",scope.split(":")[1]):startTest("all");}if(action==="test-home"){activeTest=null;lastResult=null;navigate("/test");}});
document.addEventListener("submit",event=>{if(event.target.id==="quiz-form"){event.preventDefault();submitQuiz(event.target);}});
window.addEventListener("hashchange",render);
render();

// 让支持 WebMCP 的浏览器调用与页面按钮相同的学习状态和测试动作。
if (document.modelContext?.registerTool) {
  const context = document.modelContext;
  const register = tool => { try { Promise.resolve(context.registerTool(tool)).catch(()=>{}); } catch {} };
  register({name:"list_chemistry_units",title:"查看化学单元",description:"列出九年级上册的单元和学习状态。",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute(){return units.map(u=>({id:u.id,title:u.title,lessons:u.lessons.length,masteredPercent:percent(u)}));}});
  register({name:"set_chemistry_lesson_status",title:"更新知识点状态",description:"将指定内容标记为学习中、已掌握或暂时跳过，并更新页面。",inputSchema:{type:"object",properties:{lessonId:{type:"string"},status:{type:"string",enum:["studying","done","skipped"]}},required:["lessonId","status"],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||!lessonById.has(input.lessonId)||!["studying","done","skipped"].includes(input.status))throw new Error("无效的知识点或状态");state.statuses[input.lessonId]=input.status;saveState();render();return {lessonId:input.lessonId,status:input.status};}});
  register({name:"start_chemistry_unit_test",title:"开始单元测试",description:"打开指定单元的测试，学生可在页面答题。",inputSchema:{type:"object",properties:{unitId:{type:"integer",minimum:1,maximum:7}},required:["unitId"],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||!units.some(u=>u.id===input.unitId))throw new Error("无效的单元");startTest("unit",input.unitId);return {unitId:input.unitId,questionCount:activeTest.questions.length};}});
}

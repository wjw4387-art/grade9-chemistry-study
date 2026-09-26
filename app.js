import {course, stages, units, details, allLessons, lessonById, questionById} from './catalog.js';
import {diagramFor} from './lesson-visuals.js';
import {lowerDiagramFor} from './lower-visuals.js';
import {grade, isAnswered, drawByDifficulty, cleanProgress} from './learning-core.js';

const KEY='zhixue-learning-v2';
const labels={new:'未学',studying:'学习中',done:'已掌握',skipped:'暂时跳过'};
const icons={book:'▤',home:'⌂',review:'↺',test:'✓',arrow:'↗',search:'⌕'};
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let record={},storageOK=true;
try{record=JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch{record={};}
if(typeof record!=='object'||Array.isArray(record))record={};
if(!record.courses||typeof record.courses!=='object'||Array.isArray(record.courses))record.courses={};
if(!record.courses[course.id]){
  try{record.courses[course.id]=JSON.parse(localStorage.getItem('chemistry-grade9-up-v1')||'{}');}catch{}
}
let state=cleanProgress(record.courses[course.id],new Set(lessonById.keys()),new Set(questionById.keys()),questionById);
let activeTest=state.draft?{...state.draft,submitted:false}:null;
let result=null;
let term=['all','upper','lower'].includes(record.term)?record.term:'all';
let unitFilter='all';
let search='';
let lastRoute='';

function save(){
  record.courses[course.id]=state;record.term=term;record.version=2;
  try{localStorage.setItem(KEY,JSON.stringify(record));storageOK=true;}catch{storageOK=false;}
}
function toast(message){
  document.getElementById('toast')?.remove();
  const el=document.createElement('div');el.id='toast';el.className='toast';el.setAttribute('role','status');el.textContent=message;document.body.append(el);setTimeout(()=>el.remove(),3000);
}
function statusOf(id){return state.statuses[id]||'new';}
function chip(id){const value=statusOf(id);return `<span class="chip ${value}">${labels[value]}</span>`;}
function termName(value){return value==='upper'?'上册':value==='lower'?'下册':'上下册';}
function visibleUnits(){return units.filter(u=>term==='all'||u.term===term);}
function percent(unit){return Math.round(unit.lessons.filter(l=>statusOf(l.id)==='done').length/unit.lessons.length*100);}
function route(){const parts=(location.hash||'#/home').slice(1).split('/').filter(Boolean);return {name:parts[0]||'home',id:parts[1]};}
function navigate(path){if(location.hash==='#'+path)render();else location.hash=path;}
function progressBar(value){return `<div class="progress-bar" role="progressbar" aria-label="已掌握比例" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span style="width:${value}%"></span></div>`;}
function termTabs(){return `<div class="term-tabs" aria-label="学期筛选">${[['all','全部内容'],['upper','九年级上册'],['lower','九年级下册']].map(([id,label])=>`<button data-action="term" data-id="${id}" class="${term===id?'active':''}" aria-pressed="${term===id}">${label}</button>`).join('')}</div>`;}
function frame(page,current,selected){
  const nav=[['home','学习地图','home'],['review','复习与错题','review'],['test','练习与测试','test']];
  const navCurrent=['lesson','unit'].includes(current)?'home':current;
  return `<a class="skip-link" href="#main" data-action="skip-content">跳转到正文</a><div class="app-layout">
  <aside class="app-sidebar" aria-label="学习导航"><button class="sidebar-close" data-action="menu" aria-label="关闭学习导航">✕</button><a class="brand" href="#/courses"><span class="brand-icon">知</span><span class="brand-copy">知学<span class="brand-sub">自主学习空间</span></span></a>
  <a class="course-context" href="#/courses"><span class="context-pill">初中 · 九年级</span><strong>化学 <span aria-hidden="true">⌄</span></strong><span>人教版 · 上下册</span></a>
  <nav class="side-main-nav" aria-label="主要功能">${nav.map(([id,label,icon])=>`<a href="#/${id}" class="navbtn ${navCurrent===id?'active':''}"><span class="icon" aria-hidden="true">${icons[icon]}</span>${label}${id==='review'&&Object.keys(state.wrong).length?`<span class="nav-count">${Object.keys(state.wrong).length}</span>`:''}</a>`).join('')}</nav>
  <div class="sidebar-section-label">课程目录 <span>${units.length} 单元</span></div><nav class="unitnav" aria-label="单元目录">${['upper','lower'].map(t=>`<div class="sidebar-term-label">九年级${termName(t)}</div>${units.filter(u=>u.term===t).map(u=>`<a class="unitlink ${String(selected)===String(u.id)?'active':''}" href="#/unit/${u.id}"><span class="unitnum">${String(u.id).padStart(2,'0')}</span><span>${u.title}</span>${percent(u)===100?'<span class="unit-check">✓</span>':''}</a>`).join('')}`).join('')}</nav>
  <div class="sidebar-footer"><span class="sidebar-section-label">按自己的节奏学习</span><p>可以自由选课，也可以跳过。<br>每一点进步，都在这里。</p><a href="#/about">课程说明与学习记录 ↗</a></div></aside>
  <div class="workspace"><header class="app-header"><button class="mobile-menu" data-action="menu" aria-label="展开学习导航">☰</button><a class="header-course" href="#/courses">学习空间 <span>/</span> 九年级化学</a><div class="header-actions"><div class="search-box"><span aria-hidden="true">${icons.search}</span><input id="lesson-search" type="search" aria-label="搜索知识点" placeholder="搜索知识点…" value="${esc(search)}" autocomplete="off"><span class="search-hint">⌕</span></div><span class="course-badge">自主学习</span></div></header>
  <main id="main" class="main" tabindex="-1">${storageOK?'':'<div class="inline-note">浏览器未能保存记录。请先导出备份，并检查浏览器存储设置。</div>'}${page}<footer class="footer"><span>知学 · 把知识学明白</span><span>人教版九年级化学新教材 · 记录保存在当前浏览器</span></footer></main></div></div><div id="dialog-root"></div>`;
}
function pageHeading(kicker,title,description){return `<div class="page-header"><div class="page-heading"><p class="header-kicker">${kicker}</p><h1>${title}</h1><p class="page-sub">${description}</p></div></div>`;}
function heroArt(){return `<svg viewBox="0 0 300 230" role="img" aria-label="烧瓶与微粒组成的化学插画"><circle cx="158" cy="115" r="95" fill="#dcece4"/><ellipse cx="158" cy="198" rx="87" ry="10" fill="#a5c5b6" opacity=".35"/><path d="M130 37h57m-43 0v65l-47 74q-7 14 9 14h106q16 0 9-14l-48-74V37" fill="#fff" stroke="#397968" stroke-width="4" stroke-linejoin="round"/><path d="M120 139h78l23 37q7 14-9 14H106q-16 0-9-14Z" fill="#70afa0"/><circle cx="146" cy="159" r="7" fill="#e7f2ed"/><circle cx="181" cy="174" r="4" fill="#e7f2ed"/><circle cx="162" cy="131" r="5" fill="#73ad9d"/><circle cx="174" cy="112" r="3" fill="#73ad9d"/><path d="M48 87l23 16 27-28" fill="none" stroke="#b89456" stroke-width="3"/><circle cx="48" cy="87" r="11" fill="#dfbc79"/><circle cx="72" cy="103" r="8" fill="#fff2d8"/><circle cx="97" cy="75" r="13" fill="#dfbc79"/><circle cx="235" cy="81" r="19" fill="#faf5e9" stroke="#bc9b64"/><text x="235" y="87" text-anchor="middle" font-size="16" fill="#7c623c">O₂</text><text x="232" y="153" fill="#789789" font-size="25">+</text><path d="M87 38v12m-6-6h12" stroke="#789789" stroke-width="2"/></svg>`;}
function unitCard(unit){
  const count=unit.lessons.reduce((n,l)=>n+lessonById.get(l.id).questions.length,0);
  const symbols=['','⚗','O₂','He','H₂O','⇌','C','☀','Fe','NaCl','pH','♧'];
  return `<a class="unit-card" href="#/unit/${unit.id}"><div class="unit-card-top"><span class="meta">${termName(unit.term)} / 第 ${String(unit.id).padStart(2,'0')} 单元</span><span class="unit-symbol" aria-hidden="true">${symbols[unit.id]||'✦'}</span></div><h2>${unit.title}</h2><p>${unit.intro}</p><div class="unit-card-footer"><span>${unit.lessons.length} 小课 <i>·</i> ${count} 道题</span><span class="card-arrow">↗</span></div>${progressBar(percent(unit))}<div class="unit-progress-label">${percent(unit)===100?'已完成本单元':`${percent(unit)}% 已掌握`}</div></a>`;
}
function homePage(){
  const done=allLessons.filter(l=>statusOf(l.id)==='done').length;
  const next=lessonById.get(state.lastLessonId)||allLessons.find(l=>!['done','skipped'].includes(statusOf(l.id)))||allLessons[0];
  return `<section class="hero"><div class="hero-copy"><p class="header-kicker">初中 / 九年级 / 化学</p><h1>让每一个知识点，<br>都真正学明白。</h1><p>选自己想学的，从理解开始。<br>系统讲解、直观图示与分层练习，陪你一步步掌握化学。</p><div class="hero-actions"><a class="btn primary" href="#/lesson/${next.id}">${state.lastLessonId?'继续上次学习':'开始第一课'} <span>→</span></a><a class="btn ghost" href="#/test">先测一测</a></div><span class="hero-resume">${state.lastLessonId?'上次学到':'推荐起点'}：${next.title}</span></div><div class="hero-art">${heroArt()}</div></section>
  <div class="hero-stats"><div class="stat-block"><span>课程内容</span><strong>${allLessons.length}<small> 小课</small></strong><p>上下册 ${units.length} 个单元</p></div><div class="stat-block"><span>已经掌握</span><strong>${done}<small> / ${allLessons.length}</small></strong><p>按你的节奏积累</p></div><div class="stat-block"><span>分层题库</span><strong>${questionById.size}<small> 题</small></strong><p>基础 → 提高 → 中考挑战</p></div><a class="stat-block" href="#/review"><span>待复习错题</span><strong>${Object.keys(state.wrong).length}<small> 题</small></strong><p>复习巩固 ↗</p></a></div>
  <div class="section-title"><div><p class="header-kicker">LEARNING MAP</p><h2>我的学习地图</h2></div><span class="muted-label">自由选课 · 掌握后可跳过</span></div>${termTabs()}<div class="dashboard-grid">${visibleUnits().map(unitCard).join('')}</div>`;
}
function lessonRow(lesson){
  const l=lessonById.get(lesson.id);
  return `<article class="lesson-row"><div class="lesson-row-main"><div class="reading-meta"><span class="meta">${esc(l.kind)}</span>${chip(l.id)}<span class="muted-label">${l.questions.length} 题</span></div><h3><a href="#/lesson/${l.id}">${l.title}</a></h3><p>${l.goal}</p></div><div class="lesson-actions"><a class="btn small primary" href="#/lesson/${l.id}">${statusOf(l.id)==='studying'?'继续学习':'去学习'} →</a><button class="btn small" data-action="test-lesson" data-id="${l.id}">练习</button><select aria-label="${esc(l.title)}的学习状态" data-status="${l.id}">${Object.entries(labels).map(([value,label])=>`<option value="${value}" ${statusOf(l.id)===value?'selected':''}>${label}</option>`).join('')}</select></div></article>`;
}
function unitPage(id){
  const unit=units.find(u=>String(u.id)===id);if(!unit)return missingPage();
  const lessons=unit.lessons.filter(l=>unitFilter==='all'||statusOf(l.id)===unitFilter);
  return `<div class="crumb"><a href="#/home">学习地图</a><span>/</span><span>${termName(unit.term)} · 第${unit.id}单元</span></div>${pageHeading(`${termName(unit.term)} · UNIT ${String(unit.id).padStart(2,'0')}`,unit.title,unit.intro)}<div class="toolbar"><button class="btn primary" data-action="test-unit" data-id="${unit.id}">本单元测试 · 24题</button><span class="chip done">${percent(unit)}% 已掌握</span><span class="muted-label">先选课，或先做题了解自己的掌握程度</span></div><div class="filterbar" aria-label="学习状态筛选">${[['all','全部'],...Object.entries(labels)].map(([id,label])=>`<button class="btn small ${unitFilter===id?'active':''}" data-action="filter" data-id="${id}" aria-pressed="${unitFilter===id}">${label}</button>`).join('')}</div><div class="lesson-list">${lessons.length?lessons.map(lessonRow).join(''):'<div class="empty-state">这个状态下还没有小课。切换“全部”可查看本单元。</div>'}</div>`;
}
function paragraphs(value){return String(value||'').split(/\n+/).filter(Boolean).map(p=>`<p>${esc(p)}</p>`).join('');}
function lessonPage(id){
  const l=lessonById.get(id),d=details[id];if(!l||!d)return missingPage();
  if(statusOf(id)==='new')state.statuses[id]='studying';state.lastLessonId=id;save();
  const index=allLessons.findIndex(x=>x.id===id),next=allLessons.slice(index+1).find(x=>!['done','skipped'].includes(statusOf(x.id)));
  const blocks=[['definition','核心定义',d.definition,'definition-block'],['plain','把知识讲明白',d.plain,'explanation-block'],...(d.sections||[]).map((s,i)=>['section-'+i,s.title,s.body,'']),['method','遇到题目，怎么用',d.method,''],['worked','跟着例题走一遍',d.worked,'worked-example']];
  const diagram=l.term==='lower'?lowerDiagramFor(id):diagramFor(id);
  return `<div class="crumb"><a href="#/home">学习地图</a><span>/</span><a href="#/unit/${l.unitId}">${l.unitTitle}</a><span>/</span><span>${l.title}</span></div><div class="lesson-layout"><article class="reading"><header class="lesson-header"><p class="header-kicker">${termName(l.term)} · 第 ${l.unitId} 单元 · ${esc(l.kind)}</p><h1>${l.title}</h1><p class="lead">${l.goal}</p><div class="reading-meta">${chip(id)}<span>${l.questions.length} 道分层练习</span><span>随时开始 · 自由跳过</span></div>${l.sourceTopic?`<p class="muted-label">教材对应：${esc(l.sourceTopic)}</p>`:''}</header>
  ${blocks.map(([key,title,body,cls],i)=>`<section id="learn-${key}" class="learning-block ${cls}"><span class="block-label">${String(i+1).padStart(2,'0')}</span><h2>${esc(title)}</h2>${paragraphs(body)}${key==='method'&&d.steps?`<ol class="learning-steps">${d.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`:''}</section>${i===0?`<div class="diagram-wrap">${diagram}<button class="diagram-zoom" data-action="zoom" data-id="${id}">⤢ 放大图示</button></div>`:''}`).join('')}
  <section class="learning-block" id="learn-checklist"><span class="block-label">✓</span><h2>学完后，检查自己</h2><ul class="point-list">${l.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></section>${l.pitfall?`<div class="callout"><strong>易错提醒</strong><p>${esc(l.pitfall)}</p></div>`:''}
  <div class="lesson-bottom"><div><h2>懂了，就用题目检验一下。</h2><p>${l.questions.length} 道题，从基础到中考挑战。</p></div><button class="btn primary" data-action="test-lesson" data-id="${id}">开始本课练习 →</button></div><div class="toolbar"><button class="btn" data-action="status" data-id="${id}" data-value="done">✓ 标记已掌握</button><button class="btn ghost" data-action="status" data-id="${id}" data-value="skipped">暂时跳过</button>${next?`<a class="next-lesson" href="#/lesson/${next.id}">下一课：${next.title} →</a>`:''}</div></article>
  <aside class="lesson-toc"><span class="sidebar-section-label">本课学习路线</span>${blocks.map(([key,title],i)=>`<button class="toc-link" data-action="scroll" data-id="learn-${key}"><span>${String(i+1).padStart(2,'0')}</span>${esc(title)}</button>`).join('')}<button class="toc-link" data-action="scroll" data-id="learn-checklist"><span>✓</span>知识清单</button><div class="toc-practice"><p>用练习巩固理解</p><button class="btn primary" data-action="test-lesson" data-id="${id}">本课 ${l.questions.length} 题 →</button></div></aside></div>`;
}
function reviewPage(){
  const wrong=[...questionById.values()].filter(q=>state.wrong[q.id]&&(term==='all'||q.term===term));
  const skipped=allLessons.filter(l=>statusOf(l.id)==='skipped'&&(term==='all'||l.term===term));
  return `${pageHeading('REVIEW & REFLECT','把不熟悉的，再学扎实。','错题会自动收进来，重做答对后移出。暂时跳过的课，也可以随时回来。')}${termTabs()}<div class="review-grid"><section class="panel"><div class="section-title"><h2>待复习错题 <span class="badge">${wrong.length}</span></h2>${wrong.length?'<button class="btn small primary" data-action="test-wrong">开始重练 →</button>':''}</div>${wrong.length?`<div class="wrong-list">${wrong.map(q=>`<div class="wrong-item"><span class="meta">${lessonById.get(q.lessonId).title} · 待巩固 ${state.wrong[q.id]} 次</span><p>${esc(q.stem)}</p><div class="toolbar"><button class="btn small" data-action="test-question" data-id="${q.id}">重做这题</button><a class="text-link" href="#/lesson/${q.lessonId}">回看知识点 ↗</a></div></div>`).join('')}</div>`:'<div class="empty-state"><span class="empty-icon">✓</span><h3>这里暂时没有错题</h3><p>做一次练习，发现还需要巩固的知识。</p><a class="btn" href="#/test">去做练习</a></div>'}</section><section class="panel"><h2>学习回顾</h2><p class="muted-label">最近 5 次测试</p>${state.attempts.length?state.attempts.slice(0,5).map(a=>`<div class="attempt-row"><span>${esc(a.title||'化学练习')}<small>${new Date(a.date).toLocaleDateString('zh-CN')}</small></span><strong>${a.correct}<small> / ${a.total}</small></strong></div>`).join(''):'<div class="empty-state">完成测试后，这里会留下记录。</div>'}</section></div><section class="section-title"><div><h2>暂时跳过的内容</h2><p class="muted-label">跳过不会计入“已掌握”</p></div><span class="badge">${skipped.length}</span></section><div class="lesson-list">${skipped.length?skipped.map(lessonRow).join(''):'<div class="empty-state">当前范围没有跳过的内容。</div>'}</div>`;
}
function testHome(){return `${pageHeading('PRACTICE & GROW','练一次，更清楚自己的掌握。','每个小课至少15题。题目从基础到中考挑战，涵盖单选、多选、填空与综合探究。')}${activeTest&&!activeTest.submitted?`<section class="activity-card"><div><span class="header-kicker">上次还没做完</span><h3>${esc(activeTest.title)}</h3><p>已完成 ${answeredCount()} / ${activeTest.ids.length} 题，作答已保存。</p></div><button class="btn primary" data-action="resume">继续作答 →</button></section>`:''}<section class="panel test-config"><div class="field"><label for="scope">选择测试范围</label><select id="scope"><option value="all">九年级化学 · 上下册 · 40题</option><option value="upper">九年级上册 · 40题</option><option value="lower">九年级下册 · 40题</option>${units.map(u=>`<option value="unit:${u.id}">第${u.id}单元 · ${u.title} · 24题</option>`).join('')}</select></div><button class="btn primary" data-action="test-selected">开始测试 →</button><p class="muted-label">分层抽题 · 自动保存作答 · 提交后查看解析</p></section><div class="section-title"><h2>按单元练习</h2><a class="text-link" href="#/home">按小课练习 ↗</a></div>${termTabs()}<div class="dashboard-grid">${visibleUnits().map(u=>`<section class="test-option-card"><span class="meta">${termName(u.term)} · UNIT ${String(u.id).padStart(2,'0')}</span><h3>${u.title}</h3><p>${u.lessons.length} 个小课 · ${u.lessons.reduce((n,l)=>n+lessonById.get(l.id).questions.length,0)} 道题库</p><button class="btn small" data-action="test-unit" data-id="${u.id}">单元测试 →</button></section>`).join('')}</div>`;}
function makeTest(type,id){
  let pool=[],title='';
  if(type==='lesson'){const l=lessonById.get(id);if(!l)return;pool=l.questions.map(q=>questionById.get(q.id));title=l.title+' · 小课练习';}
  else if(type==='unit'){const u=units.find(u=>String(u.id)===String(id));if(!u)return;pool=u.lessons.flatMap(l=>lessonById.get(l.id).questions.map(q=>questionById.get(q.id)));title=u.title+' · 单元测试';}
  else if(type==='wrong'){pool=[...questionById.values()].filter(q=>state.wrong[q.id]&&(term==='all'||q.term===term));title=termName(term)+' · 错题重练';}
  else if(type==='question'){pool=[questionById.get(id)].filter(Boolean);title='错题巩固';}
  else{pool=[...questionById.values()].filter(q=>type==='all'||q.term===type);title='九年级化学'+termName(type)+' · 综合测试';}
  if(!pool.length){toast('这个范围暂无待练习题目。');return;}
  const limit=['lesson','wrong','question'].includes(type)?pool.length:type==='unit'?24:40;
  activeTest={title,type,id,ids:drawByDifficulty(pool,limit).map(q=>q.id),answers:{},index:0,submitted:false};result=null;search='';persistDraft();navigate('/test/run');
}
function startTest(type,id){
  if(activeTest&&!activeTest.submitted&&Object.keys(activeTest.answers).length){showDialog('开始新的练习？','当前未完成练习的作答会被替换。你也可以先继续完成它。','开始新练习',()=>makeTest(type,id));return;}makeTest(type,id);
}
function persistDraft(){state.draft=activeTest&&!activeTest.submitted?{title:activeTest.title,type:activeTest.type,id:activeTest.id,ids:activeTest.ids,answers:activeTest.answers,index:activeTest.index}:null;save();}
function answeredCount(){return activeTest?.ids.filter(id=>isAnswered(questionById.get(id),activeTest.answers[id])).length||0;}
function caseTable(table){return table?`<div class="table-scroll"><table class="case-table"><thead><tr>${table.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';}
function expectedAnswer(q){if(q.type==='case')return q.parts.map(([,answers],i)=>`（${i+1}）${answers[0]}`).join('；');if(q.type==='text')return q.answers[0];return q.type==='multi'?q.answers.map(i=>String.fromCharCode(65+i)).join('、'):String.fromCharCode(65+q.answer);}
function questionCard(q,index){
  const answer=activeTest.answers[q.id],item=result?.items.find(x=>x.id===q.id),disabled=activeTest.submitted?'disabled':'';
  let options;
  if(q.type==='case')options=`${caseTable(q.table)}<div class="case-parts">${q.parts.map(([prompt],i)=>`<label class="case-part"><span>（${i+1}）${esc(prompt)}</span><input class="text-answer" type="text" data-answer="${q.id}" data-part="${i}" aria-label="第${i+1}小问答案" ${disabled} value="${esc(answer?.[i]||'')}" placeholder="输入答案" autocomplete="off">${item?`<small class="${item.parts[i]?'correct-text':'incorrect-text'}">${item.parts[i]?'✓ 此问正确':`此问参考答案：${esc(q.parts[i][1][0])}`}</small>`:''}</label>`).join('')}</div>`;
  else if(q.type==='text')options=`<label class="field"><span class="muted-label">填写答案（注意题目要求的单位和格式）</span><input class="text-answer" type="text" data-answer="${q.id}" aria-label="本题答案" ${disabled} value="${esc(answer||'')}" placeholder="输入答案" autocomplete="off"></label>`;
  else options=`<div class="options">${q.options.map((op,i)=>{const checked=q.type==='multi'?(answer||[]).includes(String(i)):String(answer)===String(i);return `<label class="option ${checked?'selected':''}"><input type="${q.type==='multi'?'checkbox':'radio'}" name="${q.id}" data-answer="${q.id}" value="${i}" ${disabled} ${checked?'checked':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(op)}</span></label>`;}).join('')}</div>`;
  return `<section class="panel question"><div class="reading-meta"><span class="badge difficulty-${q.difficulty}">${{1:'基础',2:'提高',3:'中考挑战'}[q.difficulty]}</span><span class="meta">${{choice:'单选题',multi:'多选题',text:'填空题',case:'综合探究'}[q.type]}</span><span class="muted-label">${q.type==='multi'?'选出所有正确选项':q.type==='case'?'每一小问都需要作答':''}</span></div><h2>${esc(q.stem)}</h2>${options}${item?`<div class="feedback ${item.correct?'':'bad'}"><strong>${item.correct?'✓ 回答正确':'再理解一下这道题'}</strong><p>参考答案：${esc(expectedAnswer(q))}</p><p>${esc(q.explain)}</p><a class="text-link" href="#/lesson/${q.lessonId}">回看：${lessonById.get(q.lessonId).title} ↗</a></div>`:''}</section>`;
}
function testRun(){
  if(!activeTest)return testHome();
  const t=activeTest,q=questionById.get(t.ids[t.index]),count=answeredCount();
  return `<div class="crumb"><a href="#/test">练习与测试</a><span>/</span><span>${esc(t.title)}</span></div>${pageHeading(t.submitted?'REVIEW YOUR ANSWERS':'ONE STEP AT A TIME',esc(t.title),t.submitted?'逐题查看答案与解析，找到需要巩固的地方。':'专注这一题。作答自动保存，可随时切换题目或稍后继续。')}${result?`<section class="activity-card result-card"><div><span class="header-kicker">本次完成</span><h2>答对 ${result.correct} <small>/ ${result.total} 题</small></h2><p>${result.correct===result.total?'全部答对，做得很扎实。':'答错和未作答的题已加入复习本。综合题全部小问正确计为答对。'}</p></div><div class="toolbar">${t.type==='lesson'?`<button class="btn primary" data-action="status" data-value="done" data-id="${t.id}">标记本课已掌握</button>`:''}<a class="btn" href="#/review">查看复习本</a></div></section>`:''}<div class="quiz-layout"><div><div class="quiz-progress"><strong>第 ${t.index+1} 题 <span>/ ${t.ids.length}</span></strong><span>${t.submitted?'解析模式':`已答 ${count} 题`}</span></div>${questionCard(q,t.index)}<div class="quiz-actions"><button class="btn" data-action="quiz-prev" ${t.index===0?'disabled':''}>← 上一题</button><button class="btn primary" data-action="${t.index<t.ids.length-1?'quiz-next':t.submitted?'test-home':'submit'}">${t.index<t.ids.length-1?'下一题 →':t.submitted?'返回练习中心':'提交并查看解析'}</button></div></div><aside class="quiz-aside panel"><h3>答题卡</h3><p class="muted-label">点击题号，自由切换</p><div class="quiz-nav">${t.ids.map((id,i)=>{const item=result?.items[i];return `<button class="quiz-dot ${i===t.index?'current':''} ${item?(item.correct?'correct':'incorrect'):isAnswered(questionById.get(id),t.answers[id])?'answered':''}" data-action="quiz-goto" data-id="${i}" aria-label="第${i+1}题${item?(item.correct?'，正确':'，有误'):isAnswered(questionById.get(id),t.answers[id])?'，已答':'，未答'}" ${i===t.index?'aria-current="step"':''}>${i+1}</button>`;}).join('')}</div><div class="quiz-legend"><span>○ ${t.submitted?'绿：正确':'空白：未答'}</span><span>● ${t.submitted?'橙：有误':'绿色：已答'}</span></div>${!t.submitted?`<button class="btn primary full-width" data-action="submit">提交练习</button><p class="muted-label save-note">作答保存在当前浏览器</p>`:'<a class="btn full-width" href="#/test">选择其他测试</a>'}</aside></div>`;
}
function submitQuiz(){
  if(!activeTest||activeTest.submitted)return;
  const remaining=activeTest.ids.length-answeredCount();
  if(remaining){showDialog(`还有 ${remaining} 题未答完整`,'现在提交，未作答的题也会进入错题本。可以返回继续答题。','仍然提交',finishQuiz);return;}finishQuiz();
}
function finishQuiz(){
  const items=activeTest.ids.map(id=>{const outcome=grade(questionById.get(id),activeTest.answers[id]);if(outcome.correct)delete state.wrong[id];else state.wrong[id]=(state.wrong[id]||0)+1;return {id,...outcome};});
  result={correct:items.filter(x=>x.correct).length,total:items.length,items};activeTest.submitted=true;activeTest.index=0;
  state.attempts.unshift({title:activeTest.title,date:new Date().toISOString(),type:activeTest.type,id:activeTest.id,correct:result.correct,total:result.total});state.attempts=state.attempts.slice(0,100);persistDraft();render();window.scrollTo({top:0});
}
function coursesPage(){return `${pageHeading('YOUR LEARNING SPACE','让学习，连成一张地图。','按学段、年级和学科组织课程。当前开放九年级化学，后续课程将在这里逐步加入。')}<div class="stage-grid">${stages.map(s=>`<section class="stage-card ${s.id==='middle'?'available':''}"><span class="meta">${s.grades}</span><h2>${s.title}</h2><p>${s.description}</p><span class="chip ${s.id==='middle'?'done':''}">${s.id==='middle'?'1 门课程已开放':'课程筹备中'}</span></section>`).join('')}</div><div class="section-title"><h2>现在可以学习</h2><span class="muted-label">初中 · 九年级</span></div><a class="course-tile" href="#/home"><div class="course-tile-art">${heroArt()}</div><div><span class="header-kicker">CHEMISTRY · 人教版新教材</span><h2>九年级化学</h2><p>上册 + 下册 · ${units.length} 单元 · ${allLessons.length} 小课</p><p>讲解、图示、分层练习与错题复习</p><span class="btn primary">进入学习 →</span></div></a>`;}
function aboutPage(){return `${pageHeading('ABOUT THIS COURSE','课程说明与学习记录','清楚内容从哪里来，也保管好自己的学习进度。')}<section class="panel teaching-section"><h2>教材范围</h2><p>本课程按人民教育出版社九年级化学新教材整理：上册第1—7单元，下册第8—11单元，覆盖绪言、课题、实验活动和跨学科实践。部分较长课题拆为多个自主小课。</p><p>“部编版”不是初中化学教材的统一名称。本课程对应2024年启用的上册、2025年启用的下册新版结构；没有把出版年份改称“2026新版”。请对照自己学校使用的教材。</p><p>核心定义按教材含义归纳；讲解、图示和习题为原创整理。上册题型及难度参考项目提供的2025秋练习册和解析资料，下册采用同样的分层标准。原始试卷、照片不公开上传。</p><p>填空和综合题按列出的答案表达进行匹配，不能完整理解所有同义长句；可对照解析核查。课堂实验应在教师指导下完成。</p><p><a class="text-link" href="https://jc.pep.com.cn/" target="_blank" rel="noopener">人教社电子教材 ↗</a> · <a class="text-link" href="https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html" target="_blank" rel="noopener">教育部课程标准 ↗</a></p></section><section class="panel"><h2>学习记录备份</h2><p>进度、错题和未完成练习保存在当前浏览器，换设备或清理浏览器数据后不会自动同步。可以导出备份，在另一台设备导入继续学习。</p><div class="toolbar"><button class="btn primary" data-action="export">导出学习记录</button><label class="btn" for="import-progress">导入学习记录</label><input class="visually-hidden" id="import-progress" type="file" accept="application/json,.json"></div><p class="muted-label">导入前会检查文件，确认后仅替换本课程的学习记录。</p></section>`;}
function searchPage(){const fold=text=>text.normalize('NFKC').toLowerCase();const needle=fold(search.trim());const found=allLessons.filter(l=>fold([l.title,l.goal,...l.points,details[l.id].definition,details[l.id].plain,...(details[l.id].sections||[]).map(s=>s.body)].join(' ')).includes(needle));return `${pageHeading('FIND A TOPIC','寻找一个知识点',`“${esc(search)}” · 找到 ${found.length} 项内容`)}<div class="lesson-list search-results">${found.length?found.map(lessonRow).join(''):'<div class="empty-state"><h3>暂时没有找到</h3><p>试试“氧气”“溶解度”“中和”等关键词。</p></div>'}</div>`;}
function missingPage(){return `${pageHeading('PAGE NOT FOUND','这里还没有课程内容','从学习地图选择一个单元，即可继续。')}<a class="btn primary" href="#/home">返回学习地图</a>`;}
function render(options={}){
  const r=route();let page;
  if(search.trim())page=searchPage();else if(r.name==='home')page=homePage();else if(r.name==='courses')page=coursesPage();else if(r.name==='unit')page=unitPage(r.id);else if(r.name==='lesson')page=lessonPage(r.id);else if(r.name==='review')page=reviewPage();else if(r.name==='test')page=r.id==='run'?testRun():testHome();else if(r.name==='about')page=aboutPage();else page=missingPage();
  const selected=r.name==='unit'?r.id:r.name==='lesson'?lessonById.get(r.id)?.unitId:null;
  document.getElementById('app').innerHTML=frame(page,r.name,selected);
  if(options.searchFocus){const input=document.getElementById('lesson-search');input.focus();if(Number.isInteger(options.caret))input.setSelectionRange(options.caret,options.caret);}
  else if(lastRoute!==location.hash){window.scrollTo({top:0});lastRoute=location.hash;}
  document.title=`${r.name==='lesson'?lessonById.get(r.id)?.title+' · ':''}九年级化学 · 知学`;
}
let dialogAction=null,dialogPreviousFocus=null;
function showDialog(title,body,confirmLabel,onConfirm,extra=''){
  dialogAction=onConfirm;dialogPreviousFocus=document.activeElement;
  document.getElementById('dialog-root').innerHTML=`<div class="dialog-backdrop"><section class="dialog-panel ${extra?'diagram-dialog':''}" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div class="section-title"><h2 id="dialog-title">${esc(title)}</h2><button class="btn small" data-action="close-dialog" aria-label="关闭弹窗">✕</button></div>${body?`<p>${esc(body)}</p>`:''}${extra}<div class="toolbar"><button class="btn" data-action="close-dialog">${extra?'关闭':'返回'}</button>${confirmLabel?`<button class="btn primary" data-action="confirm-dialog">${esc(confirmLabel)}</button>`:''}</div></section></div>`;
  document.body.classList.add('dialog-open');document.querySelector('[data-action="close-dialog"]').focus();
}
function closeDialog(){document.getElementById('dialog-root').innerHTML='';document.body.classList.remove('dialog-open');dialogAction=null;dialogPreviousFocus?.focus();}
function setStatus(id,value){if(!lessonById.has(id)||!Object.hasOwn(labels,value))return;state.statuses[id]=value;save();render();toast(`已标记为“${labels[value]}”`);}
function exportProgress(){const blob=new Blob([JSON.stringify({format:'zhixue-progress',version:2,courseId:course.id,exportedAt:new Date().toISOString(),progress:state},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`知学-九年级化学-学习记录-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('学习记录已导出。');}
async function importProgress(file){
  if(!file)return;if(file.size>5*1024*1024){toast('文件过大，请选择本网站导出的学习记录。');return;}
  try{const data=JSON.parse(await file.text());if(data.format!=='zhixue-progress'||data.courseId!==course.id||data.version!==2||!data.progress)throw new Error();const imported=cleanProgress(data.progress,new Set(lessonById.keys()),new Set(questionById.keys()),questionById);showDialog('导入这份学习记录？',`文件含 ${Object.keys(imported.statuses).length} 项学习状态、${Object.keys(imported.wrong).length} 道错题。导入后将替换当前九年级化学记录。`,'确认导入',()=>{state=imported;activeTest=state.draft?{...state.draft,submitted:false}:null;result=null;save();render();toast('学习记录已导入。');});}catch{toast('无法识别此文件，请选择本网站导出的学习记录。');}
}
function captureAnswer(input){
  if(!activeTest||activeTest.submitted)return;
  const id=input.dataset.answer,q=questionById.get(id);if(!q)return;
  if(q.type==='case'){const answer=Array.isArray(activeTest.answers[id])?[...activeTest.answers[id]]:q.parts.map(()=>'');answer[Number(input.dataset.part)]=input.value;activeTest.answers[id]=answer;}
  else if(q.type==='multi')activeTest.answers[id]=[...document.querySelectorAll('[data-answer]')].filter(x=>x.dataset.answer===id&&x.checked).map(x=>x.value);
  else activeTest.answers[id]=input.value;
  persistDraft();
  document.querySelectorAll('.option').forEach(label=>label.classList.toggle('selected',!!label.querySelector('input:checked')));
  const dot=document.querySelector(`.quiz-dot[data-id="${activeTest.index}"]`);dot?.classList.toggle('answered',isAnswered(q,activeTest.answers[id]));dot?.setAttribute('aria-label',`第${activeTest.index+1}题，${isAnswered(q,activeTest.answers[id])?'已答':'未答'}`);
  const counter=document.querySelector('.quiz-progress>span');if(counter)counter.textContent=`已答 ${answeredCount()} 题`;
}
document.addEventListener('click',event=>{
  if(event.target.closest('a[href^="#/"]')){document.querySelector('.app-sidebar')?.classList.remove('mobile-open');document.querySelector('.mobile-menu')?.setAttribute('aria-expanded','false');}
  const button=event.target.closest('[data-action]');if(!button){if(event.target.closest('a[href^="#/"]')&&search){search='';if(event.target.closest('a').hash===location.hash)render();}return;}
  const {action,id,value}=button.dataset;
  if(action==='skip-content'){event.preventDefault();document.getElementById('main').focus();}
  if(action==='term'){term=id;save();render();}
  if(action==='filter'){unitFilter=id;render();}
  if(action==='status')setStatus(id,value);
  if(action==='test-lesson')startTest('lesson',id);
  if(action==='test-unit')startTest('unit',id);
  if(action==='test-wrong')startTest('wrong');
  if(action==='test-question')startTest('question',id);
  if(action==='test-selected'){const scope=document.getElementById('scope').value;scope.startsWith('unit:')?startTest('unit',scope.split(':')[1]):startTest(scope);}
  if(action==='resume')navigate('/test/run');
  if(action==='test-home')navigate('/test');
  if(action==='submit')submitQuiz();
  if(['quiz-next','quiz-prev','quiz-goto'].includes(action)&&activeTest){activeTest.index=Math.max(0,Math.min(activeTest.ids.length-1,action==='quiz-goto'?Number(id):activeTest.index+(action==='quiz-next'?1:-1)));persistDraft();render();document.querySelector('.quiz-progress')?.scrollIntoView({block:'start'});}
  if(action==='scroll')document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  if(action==='zoom'){const lesson=lessonById.get(id);showDialog(lesson.title+' · 知识图示','','',null,lesson.term==='lower'?lowerDiagramFor(id):diagramFor(id));}
  if(action==='close-dialog')closeDialog();
  if(action==='confirm-dialog'){const fn=dialogAction;closeDialog();fn?.();}
  if(action==='menu'){const sidebar=document.querySelector('.app-sidebar');sidebar.classList.toggle('mobile-open');button.setAttribute('aria-expanded',String(sidebar.classList.contains('mobile-open')));}
  if(action==='export')exportProgress();
});
function updateSearch(input){search=input.value;render({searchFocus:true,caret:input.selectionStart});}
document.addEventListener('input',event=>{if(event.target.id==='lesson-search'&&!event.isComposing)updateSearch(event.target);if(event.target.dataset.answer)captureAnswer(event.target);});
document.addEventListener('compositionend',event=>{if(event.target.id==='lesson-search')updateSearch(event.target);});
document.addEventListener('change',event=>{if(event.target.dataset.status)setStatus(event.target.dataset.status,event.target.value);if(event.target.id==='import-progress')importProgress(event.target.files[0]);});
document.addEventListener('keydown',event=>{const dialog=document.querySelector('[role="dialog"]');if(!dialog){if(event.key==='Escape'){document.querySelector('.app-sidebar')?.classList.remove('mobile-open');document.querySelector('.mobile-menu')?.focus();}return;}if(event.key==='Escape')closeDialog();if(event.key==='Tab'){const focusable=[...dialog.querySelectorAll('button,a,input,select')].filter(e=>!e.disabled);const first=focusable[0],last=focusable.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
window.addEventListener('hashchange',()=>{search='';document.body.classList.remove('dialog-open');render();});
save();render();

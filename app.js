import {explanationHTML} from './question-explanations.js';
import {applyReadingSize,readingControl,readableDiagram} from './reading-settings.js';
import {formatChemistryText} from './chemistry/equations.js';
import {courses, stages, courseMeta, courseIdForRoute, loadCourse} from './course-registry.js';
import {grade, isAnswered, drawByDifficulty, cleanProgress} from './learning-core.js';

applyReadingSize();
const KEY='zhixue-learning-v2';
const labels={new:'未学',studying:'学习中',done:'已掌握',skipped:'暂时跳过'};
const icons={book:'▤',home:'⌂',review:'↺',test:'✓',arrow:'↗',search:'⌕'};
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let record={},storageOK=true;
try{record=JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch{record={};}
if(typeof record!=='object'||Array.isArray(record))record={};
if(!record.courses||typeof record.courses!=='object'||Array.isArray(record.courses))record.courses={};
if(!record.courses['chemistry-grade9-pep']){
  try{record.courses['chemistry-grade9-pep']=JSON.parse(localStorage.getItem('chemistry-grade9-up-v1')||'{}');}catch{}
}
if(!record.terms||typeof record.terms!=='object'||Array.isArray(record.terms))record.terms={};
if(!record.terms['chemistry-grade9-pep']&&['all','upper','lower'].includes(record.term))record.terms['chemistry-grade9-pep']=record.term;
let course,units=[],details={},allLessons=[],lessonById=new Map(),questionById=new Map(),dataset;
let state,activeTest=null,result=null,term='all',unitFilter='all',search='',lastRoute='',renderRevision=0;
const study=value=>course?.subject==='chemistry'?formatChemistryText(value):esc(value);
function activate(data){
  dataset=data;({course,units,details,allLessons,lessonById,questionById}=data);
  state=cleanProgress(record.courses[course.id],new Set(lessonById.keys()),new Set(questionById.keys()),questionById,dataset.retiredQuestionIds);
  activeTest=state.draft?{...state.draft,submitted:false}:null;result=null;
  term=['all',...course.terms.map(t=>t.id)].includes(record.terms[course.id])?record.terms[course.id]:'all';
  unitFilter='all';search='';save();
}
function save(){
  if(!course||!state)return;
  record.courses[course.id]=state;record.terms[course.id]=term;record.activeCourse=course.id;record.version=2;
  try{localStorage.setItem(KEY,JSON.stringify(record));storageOK=true;}catch{storageOK=false;}
}
function toast(message){
  document.getElementById('toast')?.remove();
  const el=document.createElement('div');el.id='toast';el.className='toast';el.setAttribute('role','status');el.textContent=message;document.body.append(el);setTimeout(()=>el.remove(),3000);
}
function statusOf(id){return state.statuses[id]||'new';}
function chip(id){const value=statusOf(id);return `<span class="chip ${value}">${labels[value]}</span>`;}
function termName(value){return course.terms.find(t=>t.id===value)?.title||course.shortScope;}
function numberOf(id){return units.find(u=>String(u.id)===String(id))?.number||id;}
function visibleUnits(){return units.filter(u=>term==='all'||u.term===term);}
function percent(unit){return Math.round(unit.lessons.filter(l=>statusOf(l.id)==='done').length/unit.lessons.length*100);}
function route(){const parts=(location.hash||'#/courses').slice(1).split('/').filter(Boolean);return {name:parts[0]||'home',id:parts[1],section:parts[2]};}
function navigate(path){if(location.hash==='#'+path)render();else location.hash=path;}
function progressBar(value){return `<div class="progress-bar" role="progressbar" aria-label="已掌握比例" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span style="width:${value}%"></span></div>`;}
function termTabs(){return `<div class="term-tabs" aria-label="册次筛选">${[['all','全部内容'],...course.terms.map(t=>[t.id,t.title])].map(([id,label])=>`<button data-action="term" data-id="${id}" class="${term===id?'active':''}" aria-pressed="${term===id}">${label}</button>`).join('')}</div>`;}

function frame(page,current,selected){
  const nav=[['courses','课程中心','book'],['home','学习地图','home'],['review','复习与错题','review'],['test','练习与测试','test']];
  const navCurrent=['lesson','unit'].includes(current)?'home':current;
  return `<a class="skip-link" href="#main" data-action="skip-content">跳转到正文</a><div class="app-layout subject-${course.subject}">
  <aside class="app-sidebar" aria-label="学习导航"><button class="sidebar-close" data-action="menu" aria-label="关闭学习导航">✕</button><a class="brand" href="#/courses"><span class="brand-icon">知</span><span class="brand-copy">知学<span class="brand-sub">自主学习空间</span></span></a>
  <a class="course-context" href="#/courses"><span class="context-pill">初中 · ${course.gradeLabel}</span><strong>${course.subjectTitle} <span aria-hidden="true">⌄</span></strong><span>人教版 · ${course.shortScope}</span></a>
  <nav class="side-main-nav" aria-label="主要功能">${nav.map(([id,label,icon])=>`<a href="#/${id}" class="navbtn ${navCurrent===id?'active':''}"><span class="icon" aria-hidden="true">${icons[icon]}</span>${label}${id==='review'&&Object.keys(state.wrong).length?`<span class="nav-count">${Object.keys(state.wrong).length}</span>`:''}</a>`).join('')}</nav>
  <div class="sidebar-section-label">课程目录 <span>${units.length} ${course.unitLabel}</span></div><nav class="unitnav" aria-label="单元目录">${course.terms.map(book=>`<div class="sidebar-term-label">${book.title}</div>${units.filter(u=>u.term===book.id).map(u=>`<a class="unitlink ${String(selected)===String(u.id)?'active':''}" href="#/unit/${u.id}"><span class="unitnum">${String(u.number).padStart(2,'0')}</span><span>${u.title}</span>${percent(u)===100?'<span class="unit-check">✓</span>':''}</a>`).join('')}`).join('')}</nav>
  <div class="sidebar-footer"><span class="sidebar-section-label">按自己的节奏学习</span><p>可以自由选课，也可以跳过。<br>每一点进步，都在这里。</p><a href="#/about">课程说明与学习记录 ↗</a></div></aside>
  <div class="workspace"><header class="app-header"><button class="mobile-menu" data-action="menu" aria-label="展开学习导航">☰</button><a class="header-course" href="#/courses">学习空间 <span>/</span> ${current==='courses'?'课程中心':course.title}</a><div class="header-actions">${current==='courses'?'':`<div class="search-box"><span aria-hidden="true">${icons.search}</span><input id="lesson-search" type="search" aria-label="搜索知识点" placeholder="搜索本学科知识点…" value="${esc(search)}" autocomplete="off"><span class="search-hint">⌕</span></div>`}${readingControl()}</div></header>
  <main id="main" class="main" tabindex="-1">${storageOK?'':'<div class="inline-note">浏览器未能保存记录。请先导出备份，并检查浏览器存储设置。</div>'}${page}<footer class="footer"><span>知学 · 把知识学明白</span><span>${course.edition} · ${course.title} · 记录保存在当前浏览器</span></footer></main></div></div><div id="dialog-root"></div>`;
}
function pageHeading(kicker,title,description){return `<div class="page-header"><div class="page-heading"><p class="header-kicker">${kicker}</p><h1>${title}</h1><p class="page-sub">${description}</p></div></div>`;}
function portalFrame(page){
  const recent=courseMeta(record.activeCourse);
  return `<a class="skip-link" href="#main" data-action="skip-content">跳转到正文</a><header class="portal-header"><a class="brand" href="#/courses"><span class="brand-icon">知</span><span class="brand-copy">知学<span class="brand-sub">自主学习空间</span></span></a>${readingControl()}${recent?`<a class="text-link" href="#/course/${recent.id}">继续学习 · ${recent.title} →</a>`:'<span class="muted-label">每一次好奇，都值得探索</span>'}</header><main id="main" class="portal-main" tabindex="-1">${page}<footer class="footer"><span>知学 · 把知识学明白</span><span>自由选课 · 按自己的节奏学习</span></footer></main><div id="dialog-root"></div>`;
}
function physicsArt(){return `<svg viewBox="0 0 300 230" role="img" aria-label="摆球、波形与测量刻度组成的物理插画"><circle cx="156" cy="116" r="95" fill="#dceaf1"/><ellipse cx="156" cy="200" rx="86" ry="9" fill="#a6c0cf" opacity=".3"/><path d="M108 187V42h100M99 188h56" stroke="#486f85" fill="none" stroke-width="5" stroke-linecap="round"/><path d="M193 44v109" stroke="#a4bdcb" stroke-width="2" stroke-dasharray="5 5"/><path d="M193 44l-50 98" stroke="#34566d" stroke-width="3"/><path d="M143 149q52 26 97-15" stroke="#86a9bc" stroke-width="2" stroke-dasharray="5 5" fill="none"/><circle cx="143" cy="144" r="18" fill="#d0a362"/><circle cx="138" cy="139" r="5" fill="#f0d9b5"/><circle cx="193" cy="44" r="5" fill="#34566d"/><path d="M28 113q12-33 24 0t24 0" stroke="#6995ad" stroke-width="3" fill="none"/><path d="M215 78h48m-41-7v14m13-10v10m13-14v14m13-10v10" stroke="#6995ad" stroke-width="2"/><text x="213" y="181" fill="#627e8f" font-size="20" font-style="italic">F</text><path d="M222 137v20m-5-6 5 6 5-6" stroke="#627e8f" fill="none" stroke-width="2"/><path d="M66 47v12m-6-6h12" stroke="#b69a72" stroke-width="2"/></svg>`;}
function heroArt(subject=course.subject){if(subject==='physics')return physicsArt();return `<svg viewBox="0 0 300 230" role="img" aria-label="烧瓶与微粒组成的化学插画"><circle cx="158" cy="115" r="95" fill="#dcece4"/><ellipse cx="158" cy="198" rx="87" ry="10" fill="#a5c5b6" opacity=".35"/><path d="M130 37h57m-43 0v65l-47 74q-7 14 9 14h106q16 0 9-14l-48-74V37" fill="#fff" stroke="#397968" stroke-width="4" stroke-linejoin="round"/><path d="M120 139h78l23 37q7 14-9 14H106q-16 0-9-14Z" fill="#70afa0"/><circle cx="146" cy="159" r="7" fill="#e7f2ed"/><circle cx="181" cy="174" r="4" fill="#e7f2ed"/><circle cx="162" cy="131" r="5" fill="#73ad9d"/><circle cx="174" cy="112" r="3" fill="#73ad9d"/><path d="M48 87l23 16 27-28" fill="none" stroke="#b89456" stroke-width="3"/><circle cx="48" cy="87" r="11" fill="#dfbc79"/><circle cx="72" cy="103" r="8" fill="#fff2d8"/><circle cx="97" cy="75" r="13" fill="#dfbc79"/><circle cx="235" cy="81" r="19" fill="#faf5e9" stroke="#bc9b64"/><text x="235" y="87" text-anchor="middle" font-size="16" fill="#7c623c">O₂</text><text x="232" y="153" fill="#789789" font-size="25">+</text><path d="M87 38v12m-6-6h12" stroke="#789789" stroke-width="2"/></svg>`;}
function unitCard(unit){
  const count=unit.lessons.reduce((n,l)=>n+lessonById.get(l.id).questions.length,0);
  const symbols=['','⚗','O₂','He','H₂O','⇌','C','☀','Fe','NaCl','pH','♧'];
  return `<a class="unit-card" href="#/unit/${unit.id}"><div class="unit-card-top"><span class="meta">${termName(unit.term)} / 第 ${String(unit.number).padStart(2,'0')} ${course.unitLabel}</span><span class="unit-symbol" aria-hidden="true">${course.subject==='physics'?(['','v','♪','℃','λ','f','ρ','F','ΣF','p','F浮','W','η','Q','E','I','U','R','P','⚡','B','λ','E'][unit.number]||'✦'):symbols[unit.id]||'✦'}</span></div><h2>${unit.title}</h2><p>${unit.intro}</p><div class="unit-card-footer"><span>${unit.lessons.length} 小课 <i>·</i> ${count} 道题</span><span class="card-arrow">↗</span></div>${progressBar(percent(unit))}<div class="unit-progress-label">${percent(unit)===100?'本章内容已掌握':`${percent(unit)}% 已掌握`}</div></a>`;
}
function homePage(){
  const done=allLessons.filter(l=>statusOf(l.id)==='done').length;
  const next=lessonById.get(state.lastLessonId)||allLessons.find(l=>!['done','skipped'].includes(statusOf(l.id)))||allLessons[0];
  return `<section class="hero"><div class="hero-copy"><p class="header-kicker">初中 / ${course.gradeLabel} / ${course.subjectTitle}</p><h1>让每一个知识点，<br>都真正学明白。</h1><p>选自己想学的，从理解开始。<br>系统讲解、直观图示与分层练习，陪你一步步掌握${course.subjectTitle}。</p><div class="hero-actions"><a class="btn primary" href="#/lesson/${next.id}">${state.lastLessonId?'继续上次学习':'开始第一课'} <span>→</span></a><a class="btn ghost" href="#/test">先测一测</a></div><span class="hero-resume">${state.lastLessonId?'上次学到':'推荐起点'}：${next.title}</span></div><div class="hero-art">${heroArt()}</div></section>
  <div class="hero-stats"><div class="stat-block"><span>课程内容</span><strong>${allLessons.length}<small> 小课</small></strong><p>${course.shortScope} · ${units.length} ${course.unitLabel}</p></div><div class="stat-block"><span>已经掌握</span><strong>${done}<small> / ${allLessons.length}</small></strong><p>按你的节奏积累</p></div><div class="stat-block"><span>分层题库</span><strong>${questionById.size}<small> 题</small></strong><p>${course.subject==='chemistry'?'每课10题 · 五级递进':'基础 → 提高 → 中考挑战'}</p></div><a class="stat-block" href="#/review"><span>待复习错题</span><strong>${Object.keys(state.wrong).length}<small> 题</small></strong><p>复习巩固 ↗</p></a></div>
  <p class="edition-note">${course.editionNote} <a href="#/about">查看课程依据 ↗</a></p><div class="section-title"><div><p class="header-kicker">LEARNING MAP</p><h2>我的学习地图</h2></div><span class="muted-label">自由选课 · 掌握后可跳过</span></div>${termTabs()}<div class="dashboard-grid">${visibleUnits().map(unitCard).join('')}</div>`;
}
function lessonRow(lesson){
  const l=lessonById.get(lesson.id);
  return `<article class="lesson-row"><div class="lesson-row-main"><div class="reading-meta"><span class="meta">${esc(l.kind)}</span>${chip(l.id)}<span class="muted-label">${l.questions.length} 题</span></div><h3><a href="#/lesson/${l.id}">${l.title}</a></h3><p>${l.goal}</p></div><div class="lesson-actions"><a class="btn small primary" href="#/lesson/${l.id}">${statusOf(l.id)==='studying'?'继续学习':'去学习'} →</a><button class="btn small" data-action="test-lesson" data-id="${l.id}">练习</button><select aria-label="${esc(l.title)}的学习状态" data-status="${l.id}">${Object.entries(labels).map(([value,label])=>`<option value="${value}" ${statusOf(l.id)===value?'selected':''}>${label}</option>`).join('')}</select></div></article>`;
}
function unitPage(id){
  const unit=units.find(u=>String(u.id)===id);if(!unit)return missingPage();
  const lessons=unit.lessons.filter(l=>unitFilter==='all'||statusOf(l.id)===unitFilter);
  return `<div class="crumb"><a href="#/home">学习地图</a><span>/</span><span>${termName(unit.term)} · 第${unit.number}${course.unitLabel}</span></div>${pageHeading(`${termName(unit.term)} · ${course.unitLabel} ${String(unit.number).padStart(2,'0')}`,unit.title,unit.intro)}<div class="toolbar"><button class="btn primary" data-action="test-unit" data-id="${unit.id}">本${course.unitLabel}测试 · ${course.subject==='chemistry'?10:24}题</button><span class="chip done">${percent(unit)}% 已掌握</span><span class="muted-label">先选课，或先做题了解自己的掌握程度</span></div><div class="filterbar" aria-label="学习状态筛选">${[['all','全部'],...Object.entries(labels)].map(([id,label])=>`<button class="btn small ${unitFilter===id?'active':''}" data-action="filter" data-id="${id}" aria-pressed="${unitFilter===id}">${label}</button>`).join('')}</div><div class="lesson-list">${lessons.length?lessons.map(lessonRow).join(''):'<div class="empty-state">这个状态下还没有小课。切换“全部”可查看本章内容。</div>'}</div>`;
}
function paragraphs(value){return String(value||'').split(/\n+/).filter(Boolean).map(p=>`<p>${study(p)}</p>`).join('');}
function lessonPage(id){
  const l=lessonById.get(id),d=details[id];if(!l||!d)return missingPage();
  if(statusOf(id)==='new')state.statuses[id]='studying';state.lastLessonId=id;save();
  const index=allLessons.findIndex(x=>x.id===id),next=allLessons.slice(index+1).find(x=>!['done','skipped'].includes(statusOf(x.id)));
  const blocks=[['definition','核心定义',d.definition,'definition-block'],['plain','把知识讲明白',d.plain,'explanation-block'],...(d.sections||[]).map((s,i)=>['section-'+i,s.title,s.body,'']),['method','遇到题目，怎么用',d.method,''],['worked','跟着例题走一遍',d.worked,'worked-example']];
  const diagram=readableDiagram(dataset.diagramFor(id));
  return `<div class="crumb"><a href="#/home">学习地图</a><span>/</span><a href="#/unit/${l.unitId}">${l.unitTitle}</a><span>/</span><span>${l.title}</span></div><div class="lesson-layout"><article class="reading"><header class="lesson-header"><p class="header-kicker">${termName(l.term)} · 第 ${l.unitNumber} ${course.unitLabel} · ${esc(l.kind)}</p><h1>${l.title}</h1>${activeTest?`<a class="btn return-to-question" href="#/test/run">← 回到本题（第${activeTest.index+1}题）</a>`:''}<p class="lead">${l.goal}</p><div class="reading-meta">${chip(id)}<span>${l.questions.length} 道分层练习</span><span>随时开始 · 自由跳过</span></div>${l.sourceTopic?`<p class="muted-label">教材对应：${esc(l.sourceTopic)}</p>`:''}</header>
  ${blocks.map(([key,title,body,cls],i)=>`<section id="learn-${key}" class="learning-block ${cls}"><span class="block-label">${String(i+1).padStart(2,'0')}</span><h2>${esc(title)}</h2>${paragraphs(body)}${key==='method'&&d.steps?`<ol class="learning-steps">${d.steps.map(s=>`<li>${study(s)}</li>`).join('')}</ol>`:''}</section>${i===0?`<div class="diagram-wrap">${diagram}<button class="diagram-zoom" data-action="zoom" data-id="${id}">⤢ 放大图示</button></div>`:''}`).join('')}
  <section class="learning-block" id="learn-checklist"><span class="block-label">✓</span><h2>学完后，检查自己</h2><ul class="point-list">${l.points.map(p=>`<li>${study(p)}</li>`).join('')}</ul></section>${l.pitfall?`<div class="callout"><strong>易错提醒</strong><p>${study(l.pitfall)}</p></div>`:''}
  <div class="lesson-bottom"><div><h2>懂了，就用题目检验一下。</h2><p>${l.questions.length} 道题，${course.subject==='chemistry'?'每2题提升一级，最后2题为拓展拔高':'从基础到中考挑战'}。</p></div><button class="btn primary" data-action="test-lesson" data-id="${id}">开始本课练习 →</button></div><div class="toolbar"><button class="btn" data-action="status" data-id="${id}" data-value="done">✓ 标记已掌握</button><button class="btn ghost" data-action="status" data-id="${id}" data-value="skipped">暂时跳过</button>${next?`<a class="next-lesson" href="#/lesson/${next.id}">下一课：${next.title} →</a>`:''}</div></article>
  <aside class="lesson-toc"><span class="sidebar-section-label">本课学习路线</span>${blocks.map(([key,title],i)=>`<button class="toc-link" data-action="scroll" data-id="learn-${key}"><span>${String(i+1).padStart(2,'0')}</span>${esc(title)}</button>`).join('')}<button class="toc-link" data-action="scroll" data-id="learn-checklist"><span>✓</span>知识清单</button><div class="toc-practice"><p>用练习巩固理解</p><button class="btn primary" data-action="test-lesson" data-id="${id}">本课 ${l.questions.length} 题 →</button></div></aside></div>`;
}
function archiveNote(){const a=state.archive;if(!a)return '';return `<div class="inline-note">题库已更新为每课10题。${Object.keys(a.wrong||{}).length}道旧版错题${a.draft?'和一份旧版练习草稿':''}已归档，仍包含在导出的学习记录中；新练习使用修订题库。学习状态与历史成绩保留。<a href="#/about">导出记录 ↗</a></div>`;}
function reviewPage(){
  const wrong=[...questionById.values()].filter(q=>state.wrong[q.id]&&(term==='all'||q.term===term));
  const skipped=allLessons.filter(l=>statusOf(l.id)==='skipped'&&(term==='all'||l.term===term));
  return `${pageHeading('REVIEW & REFLECT','把不熟悉的，再学扎实。','错题会自动收进来，重做答对后移出。暂时跳过的课，也可以随时回来。')}${archiveNote()}${termTabs()}<div class="review-grid"><section class="panel"><div class="section-title"><h2>待复习错题 <span class="badge">${wrong.length}</span></h2>${wrong.length?'<button class="btn small primary" data-action="test-wrong">开始重练 →</button>':''}</div>${wrong.length?`<div class="wrong-list">${wrong.map(q=>`<div class="wrong-item"><span class="meta">${lessonById.get(q.lessonId).title} · 待巩固 ${state.wrong[q.id]} 次</span><p>${study(q.stem)}</p><div class="toolbar"><button class="btn small" data-action="test-question" data-id="${q.id}">重做这题</button><a class="text-link" href="#/lesson/${q.lessonId}">回看知识点 ↗</a></div></div>`).join('')}</div>`:'<div class="empty-state"><span class="empty-icon">✓</span><h3>这里暂时没有错题</h3><p>做一次练习，发现还需要巩固的知识。</p><a class="btn" href="#/test">去做练习</a></div>'}</section><section class="panel"><h2>学习回顾</h2><p class="muted-label">最近 5 次测试</p>${state.attempts.length?state.attempts.slice(0,5).map(a=>`<div class="attempt-row"><span>${esc(a.title||'课程练习')}<small>${new Date(a.date).toLocaleDateString('zh-CN')}</small></span><strong>${a.correct}<small> / ${a.total}</small></strong></div>`).join(''):'<div class="empty-state">完成测试后，这里会留下记录。</div>'}</section></div><section class="section-title"><div><h2>暂时跳过的内容</h2><p class="muted-label">跳过不会计入“已掌握”</p></div><span class="badge">${skipped.length}</span></section><div class="lesson-list">${skipped.length?skipped.map(lessonRow).join(''):'<div class="empty-state">当前范围没有跳过的内容。</div>'}</div>`;
}
function testHome(){return `${pageHeading('PRACTICE & GROW','练一次，更清楚自己的掌握。',course.practiceDescription||'每个小课16题，从基础到中考挑战，涵盖单选、多选、填空与综合探究。')}${activeTest&&!activeTest.submitted?`<section class="activity-card"><div><span class="header-kicker">上次还没做完</span><h3>${esc(activeTest.title)}</h3><p>已完成 ${answeredCount()} / ${activeTest.ids.length} 题，作答已保存。</p></div><button class="btn primary" data-action="resume">继续作答 →</button></section>`:''}<section class="panel test-config"><div class="field"><label for="scope">选择测试范围</label><select id="scope"><option value="all">${course.title} · ${course.shortScope} · ${course.subject==='chemistry'?10:40}题</option>${course.terms.map(t=>`<option value="${t.id}">${t.title} · ${course.subject==='chemistry'?10:40}题</option>`).join('')}${units.map(u=>`<option value="unit:${u.id}">第${u.number}${course.unitLabel} · ${u.title} · ${course.subject==='chemistry'?10:24}题</option>`).join('')}</select></div><button class="btn primary" data-action="test-selected">开始测试 →</button><p class="muted-label">分层抽题 · 自动保存作答 · 提交后查看解析</p></section><div class="section-title"><h2>按${course.unitTitle}练习</h2><a class="text-link" href="#/home">按小课练习 ↗</a></div>${termTabs()}<div class="dashboard-grid">${visibleUnits().map(u=>`<section class="test-option-card"><span class="meta">${termName(u.term)} · UNIT ${String(u.number).padStart(2,'0')}</span><h3>${u.title}</h3><p>${u.lessons.length} 个小课 · ${u.lessons.reduce((n,l)=>n+lessonById.get(l.id).questions.length,0)} 道题库</p><button class="btn small" data-action="test-unit" data-id="${u.id}">章节测试 →</button></section>`).join('')}</div>`;}
function makeTest(type,id){
  let pool=[],title='';
  if(type==='lesson'){const l=lessonById.get(id);if(!l)return;pool=l.questions.map(q=>questionById.get(q.id));title=l.title+' · 小课练习';}
  else if(type==='unit'){const u=units.find(u=>String(u.id)===String(id));if(!u)return;pool=u.lessons.flatMap(l=>lessonById.get(l.id).questions.map(q=>questionById.get(q.id)));title=u.title+' · 章节测试';}
  else if(type==='wrong'){pool=[...questionById.values()].filter(q=>state.wrong[q.id]&&(term==='all'||q.term===term));title=termName(term)+' · 错题重练';}
  else if(type==='question'){pool=[questionById.get(id)].filter(Boolean);title='错题巩固';}
  else{pool=[...questionById.values()].filter(q=>type==='all'||q.term===type);title=course.title+' · '+termName(type)+'综合测试';}
  if(!pool.length){toast('这个范围暂无待练习题目。');return;}
  const limit=['lesson','question'].includes(type)?pool.length:course.subject==='chemistry'?10:type==='wrong'?pool.length:type==='unit'?24:40;
  activeTest={title,type,id,ids:drawByDifficulty(pool,limit).map(q=>q.id),answers:{},index:0,submitted:false};result=null;search='';persistDraft();navigate('/test/run');
}
function startTest(type,id){
  if(activeTest&&!activeTest.submitted&&Object.keys(activeTest.answers).length){showDialog('开始新的练习？','当前未完成练习的作答会被替换。你也可以先继续完成它。','开始新练习',()=>makeTest(type,id));return;}makeTest(type,id);
}
function persistDraft(){state.draft=activeTest&&!activeTest.submitted?{title:activeTest.title,type:activeTest.type,id:activeTest.id,ids:activeTest.ids,answers:activeTest.answers,index:activeTest.index}:null;save();}
function answeredCount(){return activeTest?.ids.filter(id=>isAnswered(questionById.get(id),activeTest.answers[id])).length||0;}
function caseTable(table){return table?`<div class="table-scroll"><table class="case-table"><thead><tr>${table.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';}
function expectedAnswer(q){if(['case','order','match'].includes(q.type))return q.parts.map(([,answers],i)=>`（${i+1}）${answers[0]}`).join('；');if(q.type==='text')return q.answers[0];const option=i=>`${String.fromCharCode(65+i)}．${q.options[i]}`;return q.type==='multi'?q.answers.map(option).join('；'):option(q.answer);}
function questionFigure(q,zoom=false){
  const svg=q.diagram||(q.visualId?dataset.visuals[q.visualId]?.svg:'');
  const figure=svg?`<figure class="diagram-card question-diagram">${readableDiagram(svg)}<figcaption>题目示意图 · 请结合题干中的条件作答</figcaption></figure>`:'';
  return figure&&!zoom?`<div class="diagram-wrap">${figure}<button class="diagram-zoom" data-action="zoom-question" data-id="${q.id}">⤢ 放大题图</button></div>`:figure;
}
function questionCard(q,index){
  const answer=activeTest.answers[q.id],item=result?.items.find(x=>x.id===q.id),disabled=activeTest.submitted?'disabled':'';
  let options;
  if(['case','order','match'].includes(q.type))options=`${caseTable(q.table)}<div class="case-parts">${q.parts.map(([prompt,,choices],i)=>`<label class="case-part"><span>（${i+1}）${study(prompt)}</span>${choices?`<select class="text-answer" data-answer="${q.id}" data-part="${i}" aria-label="第${i+1}小问答案" ${disabled}><option value="">请选择</option>${choices.map(option=>`<option value="${esc(option)}" ${answer?.[i]===option?'selected':''}>${esc(option)}</option>`).join('')}</select>`:`<input class="text-answer" type="text" data-answer="${q.id}" data-part="${i}" aria-label="第${i+1}小问答案" ${disabled} value="${esc(answer?.[i]||'')}" placeholder="输入答案" autocomplete="off">`}${item?`<small class="${item.parts[i]?'correct-text':'incorrect-text'}">${item.parts[i]?'✓ 此问正确':`此问参考答案：${study(q.parts[i][1][0])}`}</small>`:''}</label>`).join('')}</div>`;
  else if(q.type==='text')options=`<label class="field"><span class="muted-label">填写答案（注意题目要求的单位和格式）</span><input class="text-answer" type="text" data-answer="${q.id}" aria-label="本题答案" ${disabled} value="${esc(answer||'')}" placeholder="输入答案" autocomplete="off"></label>`;
  else options=`<div class="options">${q.options.map((op,i)=>{const checked=q.type==='multi'?(answer||[]).includes(String(i)):String(answer)===String(i);return `<label class="option ${checked?'selected':''}"><input type="${q.type==='multi'?'checkbox':'radio'}" name="${q.id}" data-answer="${q.id}" value="${i}" ${disabled} ${checked?'checked':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${study(op)}</span></label>`;}).join('')}</div>`;
  return `<section class="panel question"><div class="reading-meta"><span class="badge difficulty-${q.difficulty}">${(course.difficultyLabels||{1:'基础',2:'提高',3:'中考挑战'})[q.difficulty]}</span><span class="meta">${q.kind||{choice:'单选题',multi:'多选题',text:'填空题',case:'综合探究',order:'操作排序',match:'分类匹配'}[q.type]}</span><span class="muted-label">${q.type==='multi'?'选出所有正确选项':['case','order','match'].includes(q.type)?'每一小问都需要作答':''}</span></div>${course.subject==='chemistry'?`<p class="question-stage-note">第 ${q.difficulty} 级 / 5${q.difficulty===5?' · 拓展拔高：可先做完前8题，再回来挑战。':''}</p>`:''}<h2>${study(q.stem)}</h2>${questionFigure(q)}${options}${item?`<div class="feedback ${item.correct?'':'bad'}"><strong>${item.correct?'✓ 回答正确':'再理解一下这道题'}</strong><p>参考答案：${study(expectedAnswer(q))}</p>${explanationHTML(q,lessonById.get(q.lessonId),details[q.lessonId],study)}</div>`:''}</section>`;
}
function testRun(){
  if(!activeTest)return testHome();
  const t=activeTest,q=questionById.get(t.ids[t.index]),count=answeredCount();
  return `<div class="crumb"><a href="#/test">练习与测试</a><span>/</span><span>${esc(t.title)}</span></div>${pageHeading(t.submitted?'REVIEW YOUR ANSWERS':'ONE STEP AT A TIME',esc(t.title),t.submitted?'逐题查看答案与解析，找到需要巩固的地方。':'专注这一题。作答自动保存，可随时切换题目或稍后继续。')}${result?`<section class="activity-card result-card"><div><span class="header-kicker">本次完成</span><h2>答对 ${result.correct} <small>/ ${result.total} 题</small></h2><p>${result.correct===result.total?'全部答对，做得很扎实。':'答错和未作答的题已加入复习本。综合题全部小问正确计为答对。'}</p></div><div class="toolbar">${t.type==='lesson'?`<button class="btn primary" data-action="status" data-value="done" data-id="${t.id}">标记本课已掌握</button>`:''}<a class="btn" href="#/review">查看复习本</a></div></section>`:''}<div class="quiz-layout"><div><div class="quiz-progress"><strong>第 ${t.index+1} 题 <span>/ ${t.ids.length}</span></strong><span>${t.submitted?'解析模式':`已答 ${count} 题`}</span></div>${questionCard(q,t.index)}<div class="quiz-actions"><button class="btn" data-action="quiz-prev" ${t.index===0?'disabled':''}>← 上一题</button><button class="btn primary" data-action="${t.index<t.ids.length-1?'quiz-next':t.submitted?'test-home':'submit'}">${t.index<t.ids.length-1?'下一题 →':t.submitted?'返回练习中心':'提交并查看解析'}</button></div></div><aside class="quiz-aside panel"><h3>答题卡</h3>${course.subject==='chemistry'&&t.type==='lesson'?'<p>1–2 基础理解<br>3–4 应用辨析<br>5–6 综合推理<br>7–8 广州中考综合<br>9–10 超中考拔高</p>':''}<p class="muted-label">点击题号，自由切换</p><div class="quiz-nav">${t.ids.map((id,i)=>{const item=result?.items[i];return `<button class="quiz-dot ${i===t.index?'current':''} ${item?(item.correct?'correct':'incorrect'):isAnswered(questionById.get(id),t.answers[id])?'answered':''}" data-action="quiz-goto" data-id="${i}" aria-label="第${i+1}题${item?(item.correct?'，正确':'，有误'):isAnswered(questionById.get(id),t.answers[id])?'，已答':'，未答'}" ${i===t.index?'aria-current="step"':''}>${i+1}</button>`;}).join('')}</div><div class="quiz-legend"><span>○ ${t.submitted?'绿：正确':'空白：未答'}</span><span>● ${t.submitted?'橙：有误':'绿色：已答'}</span></div>${!t.submitted?`<button class="btn primary full-width" data-action="submit">提交练习</button><p class="muted-label save-note">作答保存在当前浏览器</p>`:'<a class="btn full-width" href="#/test">选择其他测试</a>'}</aside></div>`;
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
function coursesPage(){return `${pageHeading('YOUR LEARNING SPACE','选一门学科，开始新的探索。','完整的初中物理与九年级化学，在同一个学习空间。课程进度、错题和练习分别保存。')}<div class="section-title"><h2>现在可以学习</h2><span class="muted-label">初中 · 人教版</span></div><div class="course-grid">${courses.map(c=>`<a class="course-tile subject-${c.subject}" href="#/course/${c.id}"><div class="course-tile-art">${heroArt(c.subject)}</div><div><span class="header-kicker">${c.eyebrow} · ${c.edition}</span><h2>${c.title}</h2><p>${c.summary}</p><p>${c.description}</p><span class="btn primary">进入学习 →</span></div></a>`).join('')}</div><div class="section-title future-heading"><h2>陪伴更长的学习旅程</h2><span class="muted-label">更多学科逐步加入</span></div><div class="stage-grid">${stages.map(s=>`<section class="stage-card ${s.id==='middle'?'available':''}"><span class="meta">${s.grades}</span><h2>${s.title}</h2><p>${s.description}</p><span class="chip ${s.id==='middle'?'done':''}">${s.id==='middle'?`${courses.length} 门课程已开放`:'课程筹备中'}</span></section>`).join('')}</div>`;}

function aboutPage(){
  const physics=course.subject==='physics';
  return `${pageHeading('ABOUT THIS COURSE','课程说明与学习记录','清楚内容从哪里来，也保管好自己的学习进度。')}<section class="panel teaching-section"><h2>${course.title} · 教材范围</h2>${physics?`<p>按人民教育出版社八年级上册、八年级下册、九年级全一册的新教材组织，覆盖22章，包括实验探究与新版跨学科实践。每一节均可独立学习和练习。</p><p>版本核验日期：2026年9月26日。对应人教版2024修订教材体系，并结合2025日常修订版课程标准信息；目前未找到另有一套“2026独立修订版”教材的出版证据。网页中的“截至2026核验”指资料核验时间。</p><p>新版包含二力合成、抽水机、杆秤等内容；九年级热学顺序、家庭电路、通信和能源章节也按新目录编排。学校采用其他出版社时，知识大体相通，但课序可能不同。</p><p>核心定义按课程概念归纳，讲解、例题、图示和题目原创。项目目前没有物理原始试卷，题目按中考常见实验、图像、计算与推理形式编写，不冒称来自所提供的化学卷。</p><p><a class="text-link" href="https://www.pep.com.cn/xw/zt/hd/12/xjcjs/cz/202409/t20240925_1995627.html" target="_blank" rel="noopener">人教社新物理教材说明 ↗</a> · <a class="text-link" href="https://xuanshu.hep.com.cn/front/h5Mobile/bookDetails?bookId=697a4254e119ac972922bf54" target="_blank" rel="noopener">2025修订课标官方解读信息 ↗</a></p>`:`<p>按人民教育出版社九年级化学新教材整理：上册第1—7单元，下册第8—11单元。覆盖绪言、课题、实验活动和跨学科实践，部分长课题拆分为自主小课。</p><p>化学为人教版新教材，上册2024启用、下册2025启用。没有把出版年份改称“2026新版”。核心定义按教材含义归纳，讲解、图示和习题原创；上册题型参考项目提供的练习册与解析资料，下册沿用同样分层标准。化学练习现为每课10题、每2题一级，最后2题按高于广州中考综合题的迁移要求设计；难度为教学设计分级，尚无学生作答样本校准。</p>`}${physics?'':`<p>参考本地练习册和广州中考的证据推理、陌生信息迁移、工艺流程与实验探究要求，题目均为原创，未冒称广州中考原题。<a class="text-link" href="https://jyj.gz.gov.cn/yw/zsks/content/post_10341699.html" target="_blank" rel="noopener">广州2025化学命题说明 ↗</a> · <a class="text-link" href="https://jyj.gz.gov.cn/gkmlpt/content/9/9738/post_9738644.html" target="_blank" rel="noopener">广州2024命题说明 ↗</a></p>`}<p>填空和综合题按规范答案集合匹配，不能理解所有同义长句；请按题目指定的单位和格式填写。公式中的大小写、单位和数量关系均有明确含义。实验学习应遵循教材操作规范，在教师指导下进行。</p><p><a class="text-link" href="https://jc.pep.com.cn/" target="_blank" rel="noopener">人教社电子教材 ↗</a></p></section><section class="panel"><h2>学习记录备份</h2>${archiveNote()}<p>当前课程：${course.title}。进度、错题和未完成练习保存在当前浏览器，换设备或清理浏览器数据后不会自动同步。可以导出备份，在另一台设备导入继续学习。</p><div class="toolbar"><button class="btn primary" data-action="export">导出本课程记录</button><label class="btn" for="import-progress">导入本课程记录</label><input class="visually-hidden" id="import-progress" type="file" accept="application/json,.json"></div><p class="muted-label">导入前会检查课程是否一致，确认后仅替换本课程的学习记录。</p></section>`;
}
function searchPage(){const fold=text=>text.normalize('NFKC').toLowerCase();const needle=fold(search.trim());const found=allLessons.filter(l=>fold([l.title,l.goal,...l.points,details[l.id].definition,details[l.id].plain,...(details[l.id].sections||[]).map(s=>s.body)].join(' ')).includes(needle));return `${pageHeading('FIND A TOPIC','寻找一个知识点',`“${esc(search)}” · 找到 ${found.length} 项内容`)}<div class="lesson-list search-results">${found.length?found.map(lessonRow).join(''):`<div class="empty-state"><h3>暂时没有找到</h3><p>试试${course.subject==='physics'?'“浮力”“电阻”“光的反射”':'“氧气”“溶解度”“中和”'}等关键词。</p></div>`}</div>`;}
function missingPage(){return `${pageHeading('PAGE NOT FOUND','这里还没有课程内容','从学习地图选择一个单元，即可继续。')}<a class="btn primary" href="#/home">返回学习地图</a>`;}
async function render(options={}){
  try{await renderPage(options);}catch(error){
    console.error('课程页面未能显示',error);
    document.getElementById('app').innerHTML='<main class="loading-state"><h1>这页暂时未能显示</h1><p>请重新载入，或返回课程中心继续学习。已保存的学习记录仍会保留。</p><button class="btn primary" data-action="retry-load">重新载入</button><a class="btn" href="#/courses">返回课程中心</a></main>';
  }
}
async function renderPage(options={}){
  const revision=++renderRevision,r=route();
  if(r.name==='courses'&&!search.trim()){
    save();document.getElementById('app').innerHTML=portalFrame(coursesPage());document.title='课程中心 · 知学';
    if(lastRoute!==location.hash){window.scrollTo({top:0,behavior:'instant'});lastRoute=location.hash;}return;
  }
  const desired=courseIdForRoute(r)|| (courseMeta(record.activeCourse)?record.activeCourse:'chemistry-grade9-pep');
  if(!course||course.id!==desired){
    save();
    document.getElementById('app').innerHTML=`<main class="loading-state" aria-busy="true"><span class="brand-icon">知</span><h1>正在打开${esc(courseMeta(desired)?.title||'课程')}…</h1><p>载入讲解、图示与练习题</p></main>`;
    try{const data=await loadCourse(desired);if(revision!==renderRevision)return;activate(data);}
    catch(error){if(revision!==renderRevision)return;document.getElementById('app').innerHTML=`<main class="loading-state"><h1>课程暂时未能载入</h1><p>请检查网络后刷新页面。</p><button class="btn primary" data-action="retry-load">重新载入</button><a class="btn" href="#/courses">返回课程中心</a></main>`;return;}
  }
  let page;
  if(search.trim())page=searchPage();else if(r.name==='home'||r.name==='course'&&courseMeta(r.id))page=homePage();else if(r.name==='courses')page=coursesPage();else if(r.name==='unit')page=unitPage(r.id);else if(r.name==='lesson')page=lessonPage(r.id);else if(r.name==='review')page=reviewPage();else if(r.name==='test')page=r.id==='run'?testRun():testHome();else if(r.name==='about')page=aboutPage();else page=missingPage();
  const selected=r.name==='unit'?r.id:r.name==='lesson'?lessonById.get(r.id)?.unitId:null;
  document.getElementById('app').innerHTML=frame(page,r.name==='course'?'home':r.name,selected);
  if(options.searchFocus){const input=document.getElementById('lesson-search');input.focus();if(Number.isInteger(options.caret))input.setSelectionRange(options.caret,options.caret);}
  else if(lastRoute!==location.hash){window.scrollTo({top:0,behavior:'instant'});lastRoute=location.hash;}
  if(r.name==='lesson'&&['definition','plain','method','worked','checklist'].includes(r.section))document.getElementById('learn-'+r.section)?.scrollIntoView({block:'start'});
  document.title=`${r.name==='courses'?'课程中心':r.name==='lesson'?(lessonById.get(r.id)?.title||course.title):course.title} · 知学`;
}
let dialogAction=null,dialogPreviousFocus=null;
function showDialog(title,body,confirmLabel,onConfirm,extra=''){
  dialogAction=onConfirm;dialogPreviousFocus=document.activeElement;
  document.getElementById('dialog-root').innerHTML=`<div class="dialog-backdrop"><section class="dialog-panel ${extra?'diagram-dialog':''}" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div class="section-title"><h2 id="dialog-title">${esc(title)}</h2><button class="btn small" data-action="close-dialog" aria-label="关闭弹窗">✕</button></div>${body?`<p>${esc(body)}</p>`:''}${extra}<div class="toolbar"><button class="btn" data-action="close-dialog">${extra?'关闭':'返回'}</button>${confirmLabel?`<button class="btn primary" data-action="confirm-dialog">${esc(confirmLabel)}</button>`:''}</div></section></div>`;
  document.body.classList.add('dialog-open');document.querySelector('[data-action="close-dialog"]').focus();
}
function closeDialog(){document.getElementById('dialog-root').innerHTML='';document.body.classList.remove('dialog-open');dialogAction=null;dialogPreviousFocus?.focus();}
function setStatus(id,value){if(!lessonById.has(id)||!Object.hasOwn(labels,value))return;state.statuses[id]=value;save();render();toast(`已标记为“${labels[value]}”`);}
function exportProgress(){const blob=new Blob([JSON.stringify({format:'zhixue-progress',version:2,courseId:course.id,exportedAt:new Date().toISOString(),progress:state},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`知学-${course.title}-学习记录-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('学习记录已导出。');}
async function importProgress(file){
  if(!file)return;if(file.size>5*1024*1024){toast('文件过大，请选择本网站导出的学习记录。');return;}
  try{const data=JSON.parse(await file.text());if(data.format!=='zhixue-progress'||data.courseId!==course.id||data.version!==2||!data.progress)throw new Error();const imported=cleanProgress(data.progress,new Set(lessonById.keys()),new Set(questionById.keys()),questionById,dataset.retiredQuestionIds);showDialog('导入这份学习记录？',`文件含 ${Object.keys(imported.statuses).length} 项学习状态、${Object.keys(imported.wrong).length} 道错题。导入后将替换当前${course.title}记录。`,'确认导入',()=>{state=imported;activeTest=state.draft?{...state.draft,submitted:false}:null;result=null;save();render();toast('学习记录已导入。');});}catch{toast('无法识别此文件，请选择本网站导出的学习记录。');}
}
function captureAnswer(input){
  if(!activeTest||activeTest.submitted)return;
  const id=input.dataset.answer,q=questionById.get(id);if(!q)return;
  if(['case','order','match'].includes(q.type)){const answer=Array.isArray(activeTest.answers[id])?[...activeTest.answers[id]]:q.parts.map(()=>'');answer[Number(input.dataset.part)]=input.value;activeTest.answers[id]=answer;}
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
  if(action==='retry-load'){location.reload();return;}
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
  if(action==='zoom-question'){const q=questionById.get(id);if(q)showDialog('题目图示','','',null,questionFigure(q,true));}
  if(action==='zoom'){const lesson=lessonById.get(id);showDialog(lesson.title+' · 知识图示','','',null,readableDiagram(dataset.diagramFor(id)));}
  if(action==='close-dialog')closeDialog();
  if(action==='confirm-dialog'){const fn=dialogAction;closeDialog();fn?.();}
  if(action==='menu'){const sidebar=document.querySelector('.app-sidebar');sidebar.classList.toggle('mobile-open');button.setAttribute('aria-expanded',String(sidebar.classList.contains('mobile-open')));}
  if(action==='export')exportProgress();
});
function updateSearch(input){search=input.value;render({searchFocus:true,caret:input.selectionStart});}
document.addEventListener('input',event=>{if(event.target.id==='lesson-search'&&!event.isComposing)updateSearch(event.target);if(event.target.dataset.answer)captureAnswer(event.target);});
document.addEventListener('compositionend',event=>{if(event.target.id==='lesson-search')updateSearch(event.target);});
document.addEventListener('change',event=>{if(event.target.id==='reading-size'){applyReadingSize(event.target.value);return;}if(event.target.matches?.('select[data-answer]'))captureAnswer(event.target);if(event.target.dataset.status)setStatus(event.target.dataset.status,event.target.value);if(event.target.id==='import-progress')importProgress(event.target.files[0]);});
document.addEventListener('keydown',event=>{const dialog=document.querySelector('[role="dialog"]');if(!dialog){if(event.key==='Escape'){document.querySelector('.app-sidebar')?.classList.remove('mobile-open');document.querySelector('.mobile-menu')?.focus();}return;}if(event.key==='Escape')closeDialog();if(event.key==='Tab'){const focusable=[...dialog.querySelectorAll('button,a,input,select')].filter(e=>!e.disabled);const first=focusable[0],last=focusable.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
window.addEventListener('hashchange',()=>{search='';document.body.classList.remove('dialog-open');render();});
render();

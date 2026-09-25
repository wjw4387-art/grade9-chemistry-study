// 原创矢量教学示意图；图中比例仅服务于概念理解。
const flows = {
"u1-intro":["物质的组成与结构","解释性质和变化","服务生活并评估影响"],
"u1-1":["观察变化","是否生成新物质？","是：化学变化 / 否：物理变化"],
"u1-2":["提出问题","控制变量并实验","记录证据 → 得出结论"],
"u2-1":["空气 100 份","氮气约 78 份","氧气约 21 份"],
"u2-2":["氧气支持燃烧","铁丝：火星四射","木炭：发白光"],
"u2-3":["反应物与条件","选择发生装置","按密度与溶解性收集"],
"u2-e1":["查气密性、装药","加热 → 收集","先移导管 → 再熄灯"],
"u2-p1":["同一时段和仪器","各地重复测量","算平均并说明范围"],
"u3-1":["反应前的分子","原子重新组合","形成新的分子"],
"u3-2":["核内质子数","比较核外电子数","判断原子或离子"],
"u3-3":["核电荷数相同","归为同一种元素","中子数可不同"],
"u3-p2":["观察与实验","建立简化模型","用新证据修正模型"],
"u4-1":["天然水","沉降 → 过滤","吸附 / 消毒 / 蒸馏"],
"u4-2":["水 H₂O","电解：正氧负氢","体积约 1 : 2"],
"u4-3":["识别化学式","数清各元素原子","式量 → 质量分数"],
"u4-e2":["通电分解水","收集两极气体","检验并推断组成"],
"u4-p3":["检测原水","分层拦截与吸附","复测并说明局限"],
"u5-1":["反应物质量总和","原子种类和数目不变","生成物质量总和"],
"u5-2":["写对化学式","只调整前面的系数","检查各原子数相等"],
"u5-p4":["确定供氧需求","控制生成速率","检验气密性与安全"],
"u6-1":["同为碳元素","原子排列方式不同","性质与用途不同"],
"u6-2":["CO：有毒、可燃","分子组成不同","CO₂：使石灰水变浑浊"],
"u6-3":["石灰石 + 稀盐酸","固液常温发生","向上排空气收集"],
"u6-e3":["发生与收集","石灰水检验","瓶口木条验满"],
"u6-p5":["记录排放基线","执行低碳行动","复测并评估效果"],
"u7-1":["可燃物","氧气","温度达到着火点"],
"u7-2":["煤 / 石油 / 天然气","比较有效热量成本","兼顾污染与安全"],
"u7-e4":["只改变一个条件","记录燃烧结果","判断条件的作用"],
"u7-p6":["家庭燃料调查","统一单位比较","成本 + 效率 + 安全"]
};
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function flow(id){const parts=flows[id];return `<svg class="lesson-diagram" viewBox="0 0 760 188" role="img" aria-label="${esc(parts.join('，'))}"><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#5d798d"/></marker></defs>${parts.map((p,i)=>`<rect x="${20+i*250}" y="45" width="220" height="96" rx="18" fill="${['#e1f5f0','#e5effb','#fff1d8'][i]}" stroke="${['#49a995','#6f9cca','#d9a74a'][i]}" stroke-width="2"/><text x="${130+i*250}" y="91" text-anchor="middle" font-size="19" font-weight="700" fill="#15364e">${esc(p)}</text>${i<2?`<path d="M${240+i*250} 93h27" stroke="#5d798d" stroke-width="3" marker-end="url(#arr)"/>`:''}`).join('')}</svg>`;}
function special(id){
if(id==='u3-2'||id==='u3-3')return `<svg class="lesson-diagram" viewBox="0 0 760 220" role="img" aria-label="原子由中心的原子核和核外电子构成；得失电子形成离子"><circle cx="180" cy="110" r="80" fill="none" stroke="#9ac4d8" stroke-width="3"/><circle cx="180" cy="110" r="45" fill="none" stroke="#9ac4d8" stroke-width="2"/><circle cx="180" cy="110" r="24" fill="#efb982"/><text x="180" y="116" text-anchor="middle" font-size="18">原子核</text><circle cx="260" cy="110" r="9" fill="#4d91c5"/><circle cx="100" cy="110" r="9" fill="#4d91c5"/><circle cx="180" cy="65" r="8" fill="#4d91c5"/><text x="350" y="78" font-size="22" fill="#15364e">质子数决定元素种类</text><text x="350" y="116" font-size="20" fill="#15364e">电子得失决定是否带电</text><text x="350" y="154" font-size="18" fill="#647b8b">图示不代表真实大小和距离</text></svg>`;
if(id==='u4-2'||id==='u4-e2')return `<svg class="lesson-diagram" viewBox="0 0 760 220" role="img" aria-label="电解水：正极产生氧气，负极产生氢气，气体体积约一比二"><rect x="185" y="80" width="390" height="116" rx="8" fill="#dff4fb" stroke="#6aaac6" stroke-width="3"/><path d="M290 30v135M470 30v135" stroke="#3e657e" stroke-width="7"/><rect x="250" y="24" width="80" height="100" rx="8" fill="#fff" fill-opacity=".55" stroke="#72a9bb"/><rect x="430" y="24" width="80" height="100" rx="8" fill="#fff" fill-opacity=".55" stroke="#72a9bb"/><circle cx="290" cy="72" r="10" fill="#8cd4df"/><circle cx="470" cy="50" r="10" fill="#8cd4df"/><circle cx="470" cy="79" r="10" fill="#8cd4df"/><text x="290" y="18" text-anchor="middle" font-size="21" fill="#15364e">正极 O₂</text><text x="470" y="18" text-anchor="middle" font-size="21" fill="#15364e">负极 H₂</text><text x="380" y="211" text-anchor="middle" font-size="19" fill="#15364e">同条件下气体体积约 1 : 2</text></svg>`;
if(id==='u4-1'||id==='u4-p3')return `<svg class="lesson-diagram" viewBox="0 0 760 220" role="img" aria-label="过滤装置：浑水经漏斗和滤纸，泥沙留在滤纸上，滤液仍可能含可溶性杂质"><path d="M285 28h190l-76 118v38h-38v-38Z" fill="#dff4fb" stroke="#58879d" stroke-width="4"/><path d="M310 51h140l-70 93Z" fill="#fff3d6" stroke="#bf9c57" stroke-width="3"/><circle cx="355" cy="72" r="7" fill="#a98459"/><circle cx="395" cy="84" r="7" fill="#a98459"/><path d="M320 181h120v25H320Z" fill="#e6f8ff" stroke="#58879d" stroke-width="3"/><text x="65" y="89" font-size="21" fill="#15364e">滤纸截留泥沙</text><text x="480" y="115" font-size="21" fill="#15364e">滤液仍含可溶物</text></svg>`;
if(id==='u2-3'||id==='u2-e1'||id==='u6-3'||id==='u6-e3')return `<svg class="lesson-diagram" viewBox="0 0 760 220" role="img" aria-label="实验室气体制取流程：发生装置经导管连接集气瓶；先检查气密性，再制取、收集和检验"><rect x="100" y="63" width="154" height="130" rx="22" fill="#e5f5f1" stroke="#5d9d91" stroke-width="4"/><path d="M125 141q50 34 103 0" fill="none" stroke="#4cb8aa" stroke-width="8"/><path d="M175 64v-38h90v25h210v58" fill="none" stroke="#4c7287" stroke-width="8"/><rect x="473" y="100" width="150" height="92" rx="10" fill="#e6f1fb" stroke="#5d8fac" stroke-width="4"/><text x="177" y="212" text-anchor="middle" font-size="19" fill="#15364e">发生装置</text><text x="550" y="212" text-anchor="middle" font-size="19" fill="#15364e">收集装置</text><text x="365" y="95" text-anchor="middle" font-size="18" fill="#15364e">导管</text></svg>`;
if(id==='u5-1'||id==='u5-2')return `<svg class="lesson-diagram" viewBox="0 0 760 210" role="img" aria-label="化学反应前后每种原子的数目相等，因此反应物总质量等于生成物总质量"><path d="M380 45v120M198 70h364" stroke="#4c7287" stroke-width="8" stroke-linecap="round"/><path d="M145 122h135l-20 70H165Z" fill="#dff4ef" stroke="#5d9d91" stroke-width="3"/><path d="M480 122h135l-20 70h-95Z" fill="#e5effb" stroke="#5d8fac" stroke-width="3"/><text x="212" y="158" text-anchor="middle" font-size="19">反应物</text><text x="548" y="158" text-anchor="middle" font-size="19">生成物</text><text x="380" y="32" text-anchor="middle" font-size="20" fill="#15364e">原子守恒 → 质量守恒</text></svg>`;
if(id==='u7-1'||id==='u7-e4')return `<svg class="lesson-diagram" viewBox="0 0 760 220" role="img" aria-label="燃烧需要可燃物、氧气和温度达到着火点；灭火可破坏任一条件"><path d="M380 28L570 190H190Z" fill="#fff0d5" stroke="#dc9d44" stroke-width="4"/><text x="380" y="75" text-anchor="middle" font-size="23">可燃物</text><text x="272" y="169" text-anchor="middle" font-size="23">氧气</text><text x="480" y="169" text-anchor="middle" font-size="23">达到着火点</text><text x="380" y="214" text-anchor="middle" font-size="18" fill="#15364e">破坏一个条件即可灭火</text></svg>`;
return flow(id);
}
export function diagramFor(id){return `<figure class="diagram-card">${special(id)}<figcaption>知识示意图 · 手机上可左右滑动查看；装置和微粒大小不按真实比例绘制</figcaption></figure>`;}

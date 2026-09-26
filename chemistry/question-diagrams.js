const frame=(label,inside)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" role="img" aria-label="${label}"><rect width="760" height="300" rx="18" fill="#f7faf6"/><g font-family="sans-serif" font-size="18" fill="#253f33">${inside}</g></svg>`;
const box=(x,y,w,title,line)=>`<rect x="${x}" y="${y}" width="${w}" height="80" rx="12" fill="white" stroke="#84a091"/><text x="${x+w/2}" y="${y+32}" text-anchor="middle">${title}</text><text x="${x+w/2}" y="${y+61}" text-anchor="middle" font-size="16">${line}</text>`;
const arrow=(x,y)=>`<path d="M${x} ${y}h40m-9-7 9 7-9 7" fill="none" stroke="#527d67" stroke-width="2"/>`;
const flows=(title,items,footer)=>frame(title,`<text x="30" y="40" font-size="21" font-weight="600">${title}</text>${items.map((a,i)=>box(25+i*250,95,210,...a)+(i<2?arrow(232+i*250,135):'')).join('')}<text x="30" y="240" font-size="16">${footer}</text>`);
const diagrams={
  'gz26-u4-3-9':flows('从燃烧产物推断元素组成',[['原样品 4.6 g','仅含C、H、O'],['充分燃烧','氧气来自装置外'],['产物全部收集','CO₂ 8.8 g；H₂O 5.4 g']],'注意区分：产物的氧，可能有一部分来自外界氧气。'),
  'gz26-u8-2-10':flows('用第二次反应分析滤渣',[['铁粉＋硫酸铜溶液','原液 100 g'],['充分反应后过滤','滤渣 8.0 g'],['滤渣加足量稀盐酸','收集H₂ 0.1 g']],'图中只列题目已知量；铁与铜在两次反应中的作用不同。'),
  'gz26-u9-2-9':flows('两阶段结晶流程',[['40℃饱和溶液','150 g'],['保持40℃蒸发','除去20 g水，过滤'],['滤液降温','降至20℃后再过滤']],'晶体不含结晶水；两次结晶使用的水质量并不都等于初始值。'),
  'gz26-u9-p8-10':flows('盐厂回收量的去向',[['原水','含盐3%'],['主流程','纯盐60 kg，回收率80%'],['未回收部分','母液＋洗涤废水']],'已知洗涤废水带走5 kg盐；只能对母液支路追加回收。'),
  'gz26-u10-3b-9':flows('逐步缩小未知组成',[['白色固体 10.0 g','含盐和不溶物'],['加水并过滤','不溶干固体1.2 g'],['滤液加足量稀硝酸','产生CO₂ 2.2 g']],'选择硝酸是为了不把待检的氯离子从试剂带入。')
};
diagrams['gz26-u2-p1-10']=frame('颗粒物浓度随时间变化',`<text x="35" y="36" font-size="20">相邻测点之间按直线变化（题给模型）</text><path d="M95 230h550M95 230V58" stroke="#496c58" stroke-width="2" fill="none"/><text x="615" y="270">时间/h</text><text x="20" y="65" font-size="16">浓度</text><text x="10" y="86" font-size="16">μg/m³</text><path d="M95 70L345 150L595 190" fill="none" stroke="#377862" stroke-width="3"/>${[[95,70,'0','80'],[345,150,'1','40'],[595,190,'2','20']].map(([x,y,t,v])=>`<circle cx="${x}" cy="${y}" r="5" fill="#377862"/><text x="${x+10}" y="${y-10}">${v}</text><text x="${x}" y="258" text-anchor="middle">${t}</text>`).join('')}`);
export function chemistryQuestionDiagram(id){return diagrams[id];}

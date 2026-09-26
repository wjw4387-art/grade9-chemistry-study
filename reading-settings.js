// One preference for all current and future subjects. It never changes learning records.
const KEY='zhixue-reading-size-v1';
const allowed=[20,22,24];
let size=20;
try{const saved=Number(localStorage.getItem(KEY));if(allowed.includes(saved))size=saved;}catch{}
export function applyReadingSize(next=size){
  size=allowed.includes(Number(next))?Number(next):20;
  document.documentElement?.style?.setProperty('--reading-size',`${size}px`);
  document.documentElement?.setAttribute('data-reading-size',String(size));
  try{localStorage.setItem(KEY,String(size));}catch{}
}
export function readingControl(){return `<label class="reading-control"><span>字号</span><select aria-label="全站字号" id="reading-size">${allowed.map(n=>`<option value="${n}" ${size===n?'selected':''}>${n===20?'舒适':n===22?'大字':'特大'} · ${n}px</option>`).join('')}</select></label>`;}
export function readableDiagram(markup){
  // Preserve the original scientific geometry. Enlarge the whole SVG instead of moving labels.
  return markup.replace(/<svg\b[^>]*>/g,tag=>{
    const box=tag.match(/viewBox=["']([\d.\s-]+)["']/)?.[1]?.trim().split(/\s+/).map(Number);
    if(!box?.[2])return tag;
    const fonts=[...markup.matchAll(/font-size\s*[:=]\s*["']?(\d+(?:\.\d+)?)/g)].map(m=>Number(m[1])).filter(n=>n>=8);
    const minFont=fonts.length?Math.min(...fonts):12;
    const width=Math.ceil(box[2]*Math.max(1,16/minFont));
    const style=`min-width:calc(${width}px * var(--diagram-scale,1));width:max(100%,calc(${width}px * var(--diagram-scale,1)));max-width:none;height:auto;`;
    return tag.includes('style=')?tag.replace(/style=["']([^"']*)["']/,(_,v)=>`style="${v};${style}"`):tag.replace(/>$/,` style="${style}">`);
  });
}

// 规范反应式集中维护：配平、条件和气体/沉淀标记分别审查。
export const reactions = [
  ['3Fe + 2O₂','Fe₃O₄','点燃'],['2H₂O','2H₂↑ + O₂↑','通电'],
  ['2H₂ + O₂','2H₂O','点燃'],['2CO + O₂','2CO₂','点燃'],
  ['4Al + 3O₂','2Al₂O₃','点燃'],['C + O₂','CO₂','点燃'],
  ['2Mg + O₂','2MgO','点燃'],['CaCO₃','CaO + CO₂↑','高温'],
  ['CaCO₃ + 2HCl','CaCl₂ + H₂O + CO₂↑',''],
  ['2H₂O₂','2H₂O + O₂↑','MnO₂催化'],
  ['C + 2CuO','2Cu + CO₂↑','高温'],
  ['CO₂ + Ca(OH)₂','CaCO₃↓ + H₂O',''],
  ['CH₄ + 2O₂','CO₂ + 2H₂O','点燃'],['Fe + 2HCl','FeCl₂ + H₂↑',''],
  ['Fe + CuSO₄','FeSO₄ + Cu',''],['HCl + NaOH','NaCl + H₂O',''],
  ['NaOH + HCl','NaCl + H₂O',''],['Fe₂O₃ + 3CO','2Fe + 3CO₂','高温'],
  ['CO + CuO','Cu + CO₂','加热'],['CuO + CO','Cu + CO₂','加热'],
  ['Cu₂O + CO','2Cu + CO₂','加热'],['CO₂ + H₂O','H₂CO₃',''],
  ['2KMnO₄','K₂MnO₄ + MnO₂ + O₂↑','加热'],
  ['CuO + 2HCl','CuCl₂ + H₂O',''],['2NaOH + CO₂','Na₂CO₃ + H₂O',''],
  ['Na₂CO₃ + CaCl₂','CaCO₃↓ + 2NaCl',''],
  ['Na₂CO₃ + 2HCl','2NaCl + H₂O + CO₂↑',''],
  ['Zn + 2HCl','ZnCl₂ + H₂↑',''],['Mg + 2HCl','MgCl₂ + H₂↑',''],
  ['CuO + H₂SO₄','CuSO₄ + H₂O',''],['Fe₂O₃ + 6HCl','2FeCl₃ + 3H₂O',''],
  ['CaO + H₂O','Ca(OH)₂',''],['2NaOH + CuSO₄','Cu(OH)₂↓ + Na₂SO₄',''],
  ['NaHCO₃ + HCl','NaCl + H₂O + CO₂↑',''],['CaCl₂ + Na₂CO₃','CaCO₃↓ + 2NaCl',''],
  ['Ca(OH)₂ + CO₂','CaCO₃↓ + H₂O',''],['NH₄Cl + NaOH','NaCl + NH₃↑ + H₂O','加热'],
  ['C₆H₁₂O₆ + 6O₂','6CO₂ + 6H₂O','酶催化'],['C₂H₆O + 3O₂','2CO₂ + 3H₂O','点燃']
];
// Rendering is presentation only: preserve the authored operator, coefficients,
// conditions and state marks, including deliberate mistakes in assessment items.
const formula='[0-9]*[A-Z][A-Za-z0-9₀-₉()]*[↑↓]?';
const side=`${formula}(?:\\s*[+＋]\\s*${formula})*`;
const pattern=`(?<![A-Za-z0-9₀-₉])(${side})\\s*([→⟶=＝])\\s*(${side})(?:\\s*（([^（）\\n]{1,24})）)?`;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function chemistryExpressions(text){return [...String(text).matchAll(new RegExp(pattern,'g'))];}
export function formatChemistryText(value){
  const text=String(value??'');let html='',cursor=0;
  for(const match of chemistryExpressions(text)){
    const [,left,operator,right,condition='']=match;
    if(!['=','＝'].includes(operator))continue;
    html+=escape(text.slice(cursor,match.index));
    html+=`<span class="chemical-equation" role="math" aria-label="${escape(`${left}，等号，${right}${condition?'，条件为'+condition:''}`)}"><span>${escape(left)}</span><span class="reaction-sign">${condition?`<span class="reaction-condition">${escape(condition)}</span>`:''}<span aria-hidden="true">＝</span></span><span>${escape(right)}</span></span>`;
    cursor=match.index+match[0].length;
  }
  return html+escape(text.slice(cursor));
}

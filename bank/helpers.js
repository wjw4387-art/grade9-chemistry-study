export const choice = (difficulty, stem, options, answer, explain) => ({type:"choice",difficulty,stem,options,answer,explain});
export const multi = (difficulty, stem, options, answers, explain) => ({type:"multi",difficulty,stem,options,answers,explain});
export const text = (difficulty, stem, answers, explain) => ({type:"text",difficulty,stem,answers,explain});
export const caseQuestion = (stem, parts, explain, table) => ({type:"case",difficulty:3,kind:"综合探究",stem,parts,explain,table});

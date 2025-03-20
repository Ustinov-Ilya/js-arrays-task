// BEGIN
export const buildDefinitionList = (coll) => {
    if (coll.length === 0) return '';
    let pars = [];
    for (let elements of coll){
      pars.push(`<dt>${elements[0]}</dt><dd>${elements[1]}</dd>`);
    }
    const innerValue = pars.join('');
    const result = `<dl>${innerValue}</dl>`;
    return result;
  }
  
  export default buildDefinitionList;
// END
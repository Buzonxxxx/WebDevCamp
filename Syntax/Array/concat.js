// concat
const f1 = [ 'Jane', 'Olive' ];
const f2 = [ 'Ken, John' ];
const f3 = [ 'Louis', 'Lucas', 'Levi' ];
let bigFamily = f1.concat(f2, f3);
console.log(bigFamily);

// spread parameter 把一個陣列展開(expand)成個別數值"的速寫語法
bigFamily = [ ...f1, 'Louis', ...f2, ...f3 ];
console.log(bigFamily);

const max = (array) => Math.max(...array);
const min = (array) => Math.min(...array);
console.log(max([ -5, 100 ]));
// 100
console.log(min([ -5, 100 ]));
// -5

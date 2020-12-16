const fullName = 'Louis';

// string method boolean
console.log(fullName.startsWith('L'));
console.log(fullName.endsWith('o'));
console.log(fullName.includes('ou'));

// includes
const a = 'wonderful';
console.log(a.includes('won'));

// string manipulate

// repeat
console.log(`${fullName} `.repeat(10));

// concat
let cc = 'cc';
let aa = 'aa';
console.log(cc.concat(aa))
console.log(cc + aa);

// replace globally
const str =
	'0xd76f54bc9b7f4d00417bd89ba45d9b2d775789a410c46b262fbe2039734c1cfc0x00000000000000000000000000000000000000000000000000000000000000000x000000000000000000000000d25afb1e21e0a425831fed9ac22d92c9b34bb736';
const newStr = str.replace(/0x/g, '');
console.log(newStr);
console.log(str.length, newStr.length);

// replace "-" to "_"
const str2 = 'hello';
console.log(str2.replace('o', ''));

// concat
const firstName = 'louis';
const lastName = 'liao';
console.log(`${firstName}.`.concat(lastName));

// trim
const ss = '      223323/xdxx@$    ';
console.log(ss.trim());

// slice
let str3 = 'HappyNewYear';
console.log(str3.slice(5));
console.log(str3.slice(0, 5));
console.log(str3);

console.log('GARBAGE'.slice(2).replace('B', ' '));

// indexOf
const str4 = 'catdog';
console.log(str4.indexOf('cat'));
console.log(str4.indexOf('dog'));
console.log(str4.indexOf('?'));

// parseInt(), parseFloat()
console.log(parseInt('25.5'))
console.log(parseFloat('25.5'))


// str.substring(indexStart[, indexEnd])
// substring() 用來擷取兩個索引位置之間的字串，索引位置從 0 開始。

// 參數 indexStart 是一個數字表示要從哪個位置開始擷取
// 參數 indexEnd 是一個數字表示要擷取到哪個位置之前為止，預設取到字串結尾
// 結果會返回一個新字串
// substring() 還有一個特別的地方在於，如果 indexStart 比 indexEnd 還大時，效果就像這兩個參數位置互換一樣。例如：str.substring(1, 0) === str.substring(0, 1)。

var s = 'fooish.com';
// 輸出 'foo'
console.log(s.substring(0, 3));
console.log(s.substring(3, 0));
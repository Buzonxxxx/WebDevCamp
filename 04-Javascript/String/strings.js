const fullName = "Louis";

// string method
console.log(fullName.startsWith("L"));
console.log(fullName.endsWith("o"));
console.log(fullName.includes("ou"));
console.log(`${fullName} `.repeat(10));

// replace globally
const str =
  "0xd76f54bc9b7f4d00417bd89ba45d9b2d775789a410c46b262fbe2039734c1cfc0x00000000000000000000000000000000000000000000000000000000000000000x000000000000000000000000d25afb1e21e0a425831fed9ac22d92c9b34bb736";
const newStr = str.replace("/0x/g", "");
console.log(newStr);
console.log(str.length, newStr.length);

//replace "-" to "_"
const KebabToSnake = str => str.replace("-", "_");
console.log(KebabToSnake("Hello-world"));
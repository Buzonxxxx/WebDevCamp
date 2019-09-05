class HashTable {
  // 加上質數能減少碰撞
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    // 加上質數能減少碰撞
    let WEIRD_PRIME = 31;
    // 限制處理最長100長度字串, 避免效能問題
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // a = 97
      // a - 96 = 1
      // make a = 1, b = 2, c = 3 ....
      let value = char.charCodeAt(0) - 96    
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  
  set(key,value){
    // get key and value
    // hash key
    // put key-value pair in hash table
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
      // [, , , , , [], , ,]
    }
    // seperate chaining
    this.keyMap[index].push([key, value]);
  }

  get(key){
    // get key
    // hash key
    // use hash key to retrieve data
    // if not found, return undefined
    let index = this._hash(key);
    if(this.keyMap[index]){
      // loop over keyMap[index] array
      // [, , , , , [["maroon","#800000"], ["plum","#DDA0DD"]], , ,]
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }

  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          // 檢查沒有重複才加進陣列
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }

  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          // 檢查沒有重複才加進陣列
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }

  entries(){
    // loop map
    // loop keyMap[i]
    // if keyMap[i][j] not entriesArray
    // push keyMap[i][j] into entriesArray
    // return entriesArray
    let entriesArray = [];
    for (let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++){
          if(!entriesArray.includes(this.keyMap[i][j])){
            entriesArray.push(this.keyMap[i][j]);
          }
        }
      }
    }
    return entriesArray;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

console.log(ht.entries())
console.log(ht.values())
// use key to find value
console.log(ht.keys())
// ht.keys().forEach(key => console.log(ht.get(key)))


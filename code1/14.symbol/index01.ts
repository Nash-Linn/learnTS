(()=>{

let a1 :symbol = Symbol(1)
let a2 :symbol = Symbol(1)

console.log(a1 === a2); //false

// Symbol.for() 会在全局搜索key，如果有就返回，没有就创建
console.log(Symbol.for('aa') === Symbol.for('aa')) //true

let obj = {
  name : 1,
  [a1]:111,
  [a2]:222
}

console.log(obj);

// for...in 读不到 symbol
for(let key in obj){
  console.log('key',key);
}

// Object.keys() 读不到 symbol  
console.log(Object.keys(obj));

//Object.getOwnPropertyNames() 读不到 symbol
console.log(Object.getOwnPropertyNames(obj));
  
//Object.getOwnPropertySymbols() 只能读到symbol
console.log(Object.getOwnPropertySymbols(obj));

//利用ES6的 Reflect.ownKeys() 可以读到 所有属性
console.log(Reflect.ownKeys(obj));


})()
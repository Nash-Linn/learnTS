(()=>{

/**
 * 
 * 
 * 
 */

let a1:symbol = Symbol(1)

let a2:symbol = Symbol(1)

console.log(a1,'----------------a1') //Symbol(1)
console.log(a2,'----------------a2') //Symbol(1)

// a1 和 a2 在两个地址
console.log(a1 == a2 )  //false


//for symbol  for全局symbol有没有注册过这个key 如果有直接拿来用 没有的话他就去创建一个
let a3 = Symbol.for('shangsan')
let a4 = Symbol.for('shangsan')
console.log(a3 === a4) // true

let obj = {
  name:1,
  [a3]:111,
  [a4]:222
}

console.log('obj',obj)  //obj { name: 1, [Symbol(shangsan)]: 222 }


//for in 不能读到 symbol
// for(let key in obj){
//   console.log(key)
// }


//keys也读不到 symbol
console.log(Object.keys(obj))

//getOwnPropertyNames 也读不到 symbol
console.log('Object.getOwnPropertyNames(obj)',Object.getOwnPropertyNames(obj))

//getOwnPropertySymbols 能读到 symbol 但读不到普通的key
console.log('Object.getOwnPropertySymbols(obj)',Object.getOwnPropertySymbols(obj))

//可以读到 普通key 和 symbol
console.log('Reflect.ownKeys(obj)',Reflect.ownKeys(obj))

})()
/*
  所有的数据类型都是 Object 类型的子类型。这意味着你可以将任何类型的值赋给一个 Object 类型的变量。
*/
let a:Object = 1213
let a1:Object = "123"
let a2:Object = true
let a3:Object = []
let a4:Object = {}
let a5:Object = ()=>123


// let b:object = 1213 //报错 原始类型
// let b1:object = "123" //报错 原始类型
// let b2:object = true //报错 原始类型
let b3:object = []
let b4:object = {}
let b5:object = ()=>123


// {} 相当于 new Object
let c:{} = 123
let c1:{} = "123"
let c2:{} = true
let c3:{} = []
let c4:{} = {}
let c5:{} = ()=>123

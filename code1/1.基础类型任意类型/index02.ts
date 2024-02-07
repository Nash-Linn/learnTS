(()=>{
  
//跟原型链有关 这些类型都会指向 Object

// let a:Object = 123
// let a1:Object = '123'
// let a2:Object = []
// let a3:Object = {}
// let a4:Object = ()=>{}



// let b:object = 123  //错误 原始类型
// let b1:object = '123' //错误 原始类型
// let b2:object = false //错误 原始类型
// let b3:object = [] //正确
// let b4:object = {}  //正确
// let b5:object = ()=>{}//正确

let a:{}  //可以理解为 new Object

let a1:{} = 123
console.log('a1',a1)

})()



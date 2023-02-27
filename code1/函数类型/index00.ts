(()=>{

// const fn = function(name:string,age:number = 30){  //可以给形参默认值
//   return name + age
// }

// let a = fn('张三',22)
// let b = fn('张三')

// console.log('a',a)
// console.log('b',b)

//---------------------------------------------------

// interface User{
//   name:string
//   age:number 
// }

// const fn = function(user:User):User{
//   return user
// }

// let a = fn({
//   name:'张三',
//   age:18
// })

// console.log(a)

//-----------------------------------
/**
 * 函数重载
 * 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
 * 如果参数类型不同，则操作函数参数类型应设置为any
 * 参数数量不同你可以将不同的参数设置为可选
 */

function fn(params:number):void
function fn(params:string,params2:number):void
function fn(params:any,params2?:any):void{
  console.log(params)
  console.log(params2)
}

let a = fn('1',1)

})()
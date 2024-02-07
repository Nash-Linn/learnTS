(()=>{
// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// 2.函数默认的参数 | 函数可选参数
// 3.参数是一个对象如何定义
// 4.函数this类型
// 5.函数重载


// ---------------------------1.函数定义类型和返回值 | 箭头函数定义类型和返回值
const add = (a:number,b:number):number => a+b

// ---------------------------2.函数默认的参数 | 函数可选参数
const add1 = function(name:string,age:number = 30){  //可以给形参默认值
  return name + age
}

const add2 = function(name:string,age?:number){  // 可选参数  但是不能和默认参数一起使用
  return name + age
}

let a = add1('张三',22)
let b = add1('张三')

console.log('a',a)
console.log('b',b)

//---------------------------3.参数是一个对象如何定义

interface User{
  name:string
  age:number 
}

const fnObj = function(user:User):User{
  return user
}

let obj = fnObj({
  name:'张三',
  age:18
})

console.log(a)

//---------------------------4.函数this类型
interface Obj{
  user:number[]
  add:(this:Obj,num:number)=>void
}
// ts 可以定义this的类型 在js中无法使用 必须是第一个参数定义 this 的类型
let obj1:Obj = {
  
  user:[1,2,3],
  add(this:Obj,num:number){
    this.user.push(num)
  }
}
obj1.add(4)


//-----------------------------------
/**
 * 函数重载
 * 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
 * 如果参数类型不同，则操作函数参数类型应设置为any
 * 参数数量不同你可以将不同的参数设置为可选
 */
let nums:number[] = [1,2,3] 

function find(add:number[]):number[] //如果传的是一个number类型的数组就做添加
function find(id:number):number[] //如果传入了id就是单个查询
function find():number[] // 如果没有传入参数就是查询全部
function find(ids?:number | number[]):number[]{
  if(typeof ids === "number"){
    return nums.filter((item)=>item === ids)
  }
  else if(Array.isArray(ids)){
    return nums.concat(ids)
  }else{
    return nums
  }
}

find()



})()
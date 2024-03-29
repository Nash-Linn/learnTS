(()=>{

//联合类型

let phone:number|string = 18388888888

let fn1 = function(type:number):boolean{
  return !!type
} 

let res = fn1(1)

console.log('res',res)

//----------------------------
//交叉类型

interface People{
  name:string,
  age:number
}

interface Man {
  sex:number
}

// 
const zhangsan = (man:People & Man):void=>{
  console.log()
}

zhangsan({
  name:'张三',
  age:22,
  sex:1
})

//---------------------
//类型断言 (num as string)

let fn2 = function(num:number | string):void{
  console.log((num as string).length);
}

fn2('12345')

//------------------
//类型断言 (<A>type) 

interface A{
  run:string
}
interface B{
  build:string
}

let fn3 = (type:A|B):void=>{
  console.log((<A>type).run)
}
fn3({
  build:'123'
})

//---------------------------

const fn = (type:any):boolean=>{
  return type as boolean
}

let bbb = fn('aa')

console.log("bbb",bbb)

})()
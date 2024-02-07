//interface 重名 重合 ----------------------------------

interface Zhangsan{ 
  name:string
  age:number
}

interface Zhangsan{
  sex:string
}

let a:Zhangsan = {
  name:"张三",
  age:88,
  sex:'男'
}


//interface 任意key  ----------------------------------

interface Zhangsan{
  name:string
  age:number
  [propName:string]:any
}

let a:Zhangsan = {
  name:"张三",
  age:88,
  sex:'男',
  a:1,
  b:[]
}

//interface ？ readonly  ----------------------------------


interface Zhangsan{
  name:string
  age:number
  sex?:string  //  ？ 表示可以不写
  readonly cb:()=>boolean  //readonly 允许读 不允许改
}

let a:Zhangsan = {
  name:"张三",
  age:88,
  cb:()=> false
}

//interface 接口继承  ----------------------------------


interface Person{
  xxx:string
}

interface Zhangsan extends Person{
  name:string
  age:number
  sex?:string  //  ？ 表示可以不写
  readonly cb:()=>boolean  //readonly 允许读 不允许改
}

let a:Zhangsan = {
  name:"张三",
  age:88,
  cb:()=> false,
  xxx:'xxx'
} 



//interface 定义函数类型  ----------------------------------

interface Fn{
  (name:string):number[],
}
const fn:Fn = function(){
  return [1]
}

//不能多属性 也不能少属性  ----------------------------------

(()=>{

//数组普通类型 -------------------------------------
// number[]
// Array<boolean>

let arr1:number[] = [1,2,3]
let arr2:Array<boolean> = [true,false]


//数组对象类型 -------------------------------------

interface X {
  name:string
  age?:number
}

let arr3:X[]=[{name:'张三',age:22},{name:"李四"}]


//二维数组 -------------------------------------
let arr4:number[][]=[[1],[2],[3],[2,3]]
let arr5:Array<Array<number>>=[[1],[2],[3],[2,3]]

//大杂烩数组
// any[]
let arr6:any[]=[1,'123',true,{name:'张三'}]

function a(...args:any){
  console.log(args)

  let a:IArguments = arguments
  console.log('arguments',a)
}
a(1,2,3)

interface A{
  callee:Function
  length:number
  [index:number]:any
}




})()
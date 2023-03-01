
//主类型
interface A{
  name:string
  age:number
}

//子类型
interface B{
  name:string
  age:number
  sex:string
}

let a:A = {
  name:'张三',
  age:22,
}

let b:B={
  name:'李四',
  age:33,
  sex:'男'
}

//协变
//值是协变
//子类型包含主类型所有的属性
a = b

console.log('a',a)

//逆变
//在函数中是逆变

let fna = (params:A)=>{

}

let fnb = (params:B)=>{
  
}

fnb = fna

//双向协变
fnb = fna
fna = fnb
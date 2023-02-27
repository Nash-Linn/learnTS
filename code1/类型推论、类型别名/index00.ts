(()=>{

let str = '张三'  //不写类型的情况下，会根据赋的值进行类型推论

// str = 123 //无法再将 number 赋值给 string

type s = number[] & B

interface A extends B{
  
}

interface B{}

})()
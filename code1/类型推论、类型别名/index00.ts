(()=>{

let str = '张三'  //不写类型的情况下，会根据赋的值进行类型推论

// str = 123 //无法再将 number 赋值给 string

//-----------------------
//类型别名
// type s = number[] & B

// interface A extends B{
  
// }

// interface B{}

//-----------------------

//extends 包含的意思 
//左边的值 会作为右边类型的子类型  
type num = 1 extends number ? 1 : 0


})()
(()=>{

// const fn = (type:string)=>{
//   if(type == 'red'){
//     return 0
//   }
//   if(type == 'green'){
//     return 1
//   }  
//   if(type == 'blue'){
//     return 2
//   }
// }

// enum Color {
//   red,
//   green,
//   blue
// }

//增长枚举-----------------------------------
// enum Color {
//   red = 1,
//   green,
//   blue
// }

// enum Color {
//   red = 1,
//   green=5,
//   blue=7
// }



//字符串枚举-----------------------------------

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

//异构枚举-----------------------------------
enum YiGou {
  No = 'No',
  Yes = 1
}

//接口枚举-------------------------
interface A{
  red:Color.red
}

let obj:A={
  red:Color.red
}

/**
 * 有const 编译成js后 会变成常量
 * 
 * 如果没有const 会编译成对象
 * 
 */
const enum Types{
  success,
  fail
}
let code = 0
if(code === Types.success){

}

enum Status {
  success
}
let success:number = Status.success

console.log('success',success)

})()
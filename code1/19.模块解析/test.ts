//默认导出 导出的东西可以任意类型
// export default 1
// export default {
//   a: 1
// }



//分别导出
// export let x = 2
// export const add = (a:any,b:any)=>{
//   return a + b
// }

// export let arr = [1,2,3,4,5]


//解构导出
let x = 2
const add = (a:any,b:any)=>{
  return a + b
}
export {
  x,
  add
}
// namespace A {
//  export const a = 1
// }

// console.log(A.a)


//嵌套命名空间
namespace A {
  export namespace C{
    export const d = 1
  }
}
// import AAA = A.C
// console.log(A.C.d)
// console.log(AAA.d)

//抽离命名空间
// import {B}from './index01'

// console.log('B',B)


//1. 命名空间的用法 嵌套 抽离 导出 简化 合并
//2. 命名空间的案例

// namespace 所有的变量以及方法必须要导出才能在外部使用


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



// 同名的命名空间 会进行合并
namespace Test  {
  export let a = 1
}

namespace Test {
  export let b = 2
}



//跨端项目 h5 Android ios 小程序等 

namespace ios {
  export const pushNotification = (msg:string,type:number) => {
    console.log('ios pushNotification')
  } 
}

namespace Android {
  export const pushNotification = (msg:string) => {
    console.log('Android pushNotification')
  } 

  export const callPhone =(phone:string) => { 
  }
}


//使用方式import  如果是默认导出名字可以随便取
// import xxx,{add} from './test'
// console.log(xxx);


// console.log(add(1,2)); 


import {x, add as add2} from './test'
console.log(add2(1,2)); 

//动态引入
//import只能在最上层使用

if(true){
  import('./test').then((res)=>{
    console.log(res);
  })
}
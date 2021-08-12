// import {hi} from '../dist/m.js'
let a = 10;
// console.log(hi);


// function fn(a,b){    //由于tsconfig.js 中的 noImplicitAny 为 true 所以 不允许存在隐式的 any 类型
//   return a + b
// }


function fn(a: number,b: number){
  return a + b
}

// function fn1(){  //由于tsconfig.js 中的 noImplicitThis 为 true 所以 不允许存在不明确类型的this
//   alert(this)
// }

function fn1(this:Window){
  alert(this)
}


//设置了 strictNullChecks 为 true  因为 box1 不存在 所以报错

// let box1 = document.getElementById('box1');
// box1.addEventListener('click',function(){
//   alert('hello')
// })
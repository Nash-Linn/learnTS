import {hi} from './m1';


function sum(a: number, b: number): number{
  return a + b;
}

console.log(sum(123,456));

const box1 = document.createElement('div');

const obj = {
  name : '孙悟空',
  age : 33
}
console.log(obj);

obj.age = 18;

console.log(obj);



box1.innerHTML = '哈哈哈哈' ;
document.body.appendChild(box1);

console.log(hi);


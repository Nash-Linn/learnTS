(()=>{

// 元组
/*
  元组是一种特殊的数组，它限定了数组元素的类型和个数
  语法：let 变量名: [类型1, 类型2, 类型3] = [值1, 值2, 值3]
*/  

// let arr:[number,boolean] = [1,false]

// let arr:readonly[number,boolean] = [1,false]

let arr:readonly[x:number,y?:boolean] = [1]

type first = typeof arr[0]

let excel:[string,string,number][] = [
  ['张三','男',22],
  ['李四','女',23], 
  ['王五','男',24]
]
  

})()
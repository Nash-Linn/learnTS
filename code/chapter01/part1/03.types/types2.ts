//object 表示一个js对象
let a: object;
a = {};
a = function(){};

let  b: {name: string};
 
//b = {};   //没有声明类型为string的name属性
b = {name:'孙悟空'};

//b = {name:'孙悟空', age: 18};  //只能指定已知属性 age属性还未知


let  c: {name: string,age?: number};  //age加了? 表示 age属性可选

c = {name:'孙悟空', age: 18}

let d: {name: string, [propName:string]:any}; //[propName:string]:any   表示任意类型的属性     propName是一个属性名 这个属性名的类型是一个字符串 


d = {name: "猪八戒", age:18, gender:'男'}

/*
  设置函数结构的类型声明
    语法:(形参:类型,形参:类型 ....) => 返回值
*/ 

let e: (a:number,b:number) => number ;
e = function(n1, n2){
  return n1 + n2
}

/*
  数组的类型声明
    类型[]
    Array<类型>

*/ 


// string[] 表示字符串数组

let f: string[];
// f = ['a','b','c',1,2];   由于声明的是字符串数组 所以数组中的1,2 会报错

let g: number[];   //表示数值数组

let h: Array<number>   //表示数值类型数组 同 let h: number[];


/*
  元组: 元组就是固定长度的数组

*/ 

let i: [string, string];   
//i = ['hello', 'abc', 123]  // 数组 i 的个数只能是两个 且类型要是对应类型

/*
  enum 枚举

*/
enum Gender{
  Male,
  Female,
}

// let j: {name:string, gender:0 | 1};
// j = {
//   name:'孙悟空',
//   gender: 0    // 0 女 1男
// } 
// console.log(j.gender === 1);

let j: {name:string, gender: Gender};

j = {
  name:'孙悟空',
  gender: Gender.Male
}

console.log(j.gender === Gender.Male);


// &表示同时 表示与的意思
// let k: string & number;  //无意义  k不可能同时满足string和number
let k: {name:string} & {age: number}
k = {
  name: '孙悟空',
  age: 18,
}

//类型别名 
// let l: 1 | 2 | 3 | 4 | 5
// let m: 1 | 2 | 3 | 4 | 5

type myType = 1 | 2 | 3 | 4 | 5;
let m: myType





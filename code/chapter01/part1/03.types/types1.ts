//可以直接使用字面量进行类型声明

let a: 10;
a = 10;
//a = 11;   a已经是类型10 不能将11赋值给 类型10 

// let b: "hello"
let b: "male" | "female";   // "male" 或  "female"    可以使用 | 来连接多个类型(联合类型)

b = "male";
b = "female";

let c: boolean | string;
c = true;
c = 'hello';


//any 表示的是任意类型,一个变量设置类型为any 后期相当于对该变量关闭了TS的类型检测
//使用TS时, 不建议使用any类型
// let d: any;  
//声明变量如果不指定类型,则TS解析器会自动给判断变量类型为any(隐式any)
let d;
d = 10;
d = 'hello';
d = true;


//unknow 表示未知类型的值
let e: unknown
e = 10;
e = 'hello';
e = true;

let s: string;
//d的类型时any 它可以赋值给任意变量

s = d

e = 'hello';


//unknow  实际上就是一个类型安全的any
//unknow 类型的变量不能直接赋值给其他变量
// s = e;
//先进行类型判断
if(typeof e === "string"){
  s = e;
}


//类型断言
/*
  变量 as 类型
  <类型>变量
*/ 
s = e as string;    
//第二种写法
s = <string>e;



function  fn(num) {
  if(num > 0){
    return true;
  }else{
    return 123
  }
}

//void 用来表示空, 以函数为例,就表示没有返回值的函数
function fn1():void {
  //return 123;    //由于规定 返回值为void  所有不能有返回值
}

//never 表示永远不会返回结果  该类型一般用于报错
function fn2():never {
  throw new Error('报错了!');
}


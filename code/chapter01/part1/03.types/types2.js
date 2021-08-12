//object 表示一个js对象
var a;
a = {};
a = function () { };
var b;
//b = {};   //没有声明类型为string的name属性
b = { name: '孙悟空' };
//b = {name:'孙悟空', age: 18};  //只能指定已知属性 age属性还未知
var c; //age加了? 表示 age属性可选
c = { name: '孙悟空', age: 18 };
var d; //[propName:string]:any   表示任意类型的属性     propName是一个属性名 这个属性名的类型是一个字符串 
d = { name: "猪八戒", age: 18, gender: '男' };
/*
  设置函数结构的类型声明
    语法:(形参:类型,形参:类型 ....) => 返回值
*/
var e;
e = function (n1, n2) {
    return n1 + n2;
};
/*
  数组的类型声明
    类型[]
    Array<类型>

*/
// string[] 表示字符串数组
var f;
// f = ['a','b','c',1,2];   由于声明的是字符串数组 所以数组中的1,2 会报错
var g; //表示数值数组
var h; //表示数值类型数组 同 let h: number[];
/*
  元组: 元组就是固定长度的数组

*/
var i;
//i = ['hello', 'abc', 123]  // 数组 i 的个数只能是两个 且类型要是对应类型
/*
  enum 枚举

*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// let j: {name:string, gender:0 | 1};
// j = {
//   name:'孙悟空',
//   gender: 0    // 0 女 1男
// } 
// console.log(j.gender === 1);
var j;
j = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(j.gender === Gender.Male);

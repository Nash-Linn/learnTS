//声明一个变量a, 同时指定他的类型为number
var a;
// a 的类型设置为了number, 在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
//a = 'hello'  此行代码会报错,因为变量a的类型是number,不能赋值字符串0
//声明完变量直接进行赋值
// let c: boolean = true;
//如果变量的声明和赋值是同时进行的, TS可以自动对变量类型进行类型检测
var c = true;
// c = 123;
var b = 2;
//JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));


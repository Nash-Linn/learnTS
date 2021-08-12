"use strict";
//使用class关键字来定义一个类
/*
  类中主要包含两个部分
    属性
    方法
*/
class Person {
    constructor() {
        /*
          直接定义的属性是实例属性,需要通过对象的实例去访问
            const per = new Person();
            per.name
      
          使用static开头的属性是静态属性(类属性),可以直接通过类去进行访问
            Person.age
        
        */
        //定义实例属性
        this.name = '孙悟空';
        //readonly   开头的属性表示一个只读属性无法修改
        this.height = 1.8;
        //也可以不声明类型 直接赋值  变量会根据所赋值 进行类型判断
        this.address = '杭州';
    }
    //定义方法 
    /*
      如果方法以 static 开头则方法就是类方法  或者 静态方法 直接通过类调用
      
    */
    sayHello() {
        console.log('Hello 大家好');
    }
}
//在属性前使用 static关键字可以定义类属性(静态属性)
/*
  如果使用static 需要通过类进行调用
  不写 则通过实例调用

*/
Person.age = 18;
Person.weight = 160;
const per = new Person();
// console.log(per.age);   //由于age是静态属性 报错
console.log(Person.age); //静态属性用类去访问
console.log(per.name);
per.name = 'Tom';
console.log(per.name);
console.log(Person.weight);
// Person.weight = 150   //静态只读属性 无法修改

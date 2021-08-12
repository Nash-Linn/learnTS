"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
          getter 方法用来读取属性
          setter 方法用来设置属性
              -它们被称为属性的存取器
        
        */
        // //定义方法 用来获取 name 属性
        // getName() {
        //   return this._name
        // }
        // //定义方法 用来设置 name 属性 
        // setName(value: string) {
        //   this._name = value;
        // }
        // //定义方法 用来获取 age 属性
        // getAge() {
        //   return this._age
        // }
        // //定义方法 用来设置 age 属性 
        // setAge(value: number) {
        //   // 判断年龄是否合法
        //   if (value >= 0) {
        //     this._age = value;
        //   }
        // }
        //TS中设置getter方法的方式
        get name() {
            console.log('get name()执行了!!');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    /*
      限制属性是直接在对象中设置的,属性可以任意的被修改
        属性可以任意被修改将会导致对象中的数据变得非常不安全
         
    */
    //  per.name = '猪八戒';
    //  per.age = 38
    // per.setName('猪八戒'); 
    // console.log(per.getName());
    // per.setAge(-33);
    // console.log(per);
    per.age = -33;
    console.log(per.name);
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // class C{
    //   name: string;
    //   age: number
    //   constructor(name: string,age: number){
    //     this.name = name;
    //     this.age = age;
    //   }
    // }
    //两个写法等价
    class C {
        //可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 111);
})();

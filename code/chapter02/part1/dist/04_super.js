"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //如果在之类中写了构造函数,在之类的构造函数中,必须对父类的构造函数进行调用
            super(name); //调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            //在类的方法中, super表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 2);
    dog.sayHello();
})();

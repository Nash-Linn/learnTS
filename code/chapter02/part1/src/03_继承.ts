//立即执行函数 为了防止命名冲突
(function(){

  //定义一个Animal类
  class Animal{
    name: string;
    age:number;

    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
    
    sayHello(){
      console.log('动物在叫');
    }
  }



  //定义一个表示狗的类
  //extends 继承
  //使Dog类继承Animal类
  /*
    class Dog extends Animal
    此时 Animal 被称为父类, Dog 被称为子类
    使用继承后,之类将会拥有父类所有的方法和属性
    通过继承可以将多个类中共有的代码写在一个父类中
      这样只需要写一次即可以让所有的子类都同时拥有父类的属性和方法
      如果希望在子类中添加一些父类中没有的属性或方法 直接加就行
    如果在之类中添加了和父类相同的方法,则之类方法会覆盖掉父类的方法
      这种之类覆盖掉父类方法的形式,我们称为方法的重写
      
  */ 
  class Dog extends Animal{
   run(){
     console.log(`${this.name}在跑~~~`);  
   }
   
   sayHello(){
    console.log('汪汪汪');
   }
  }

  const dog = new Dog('旺财', 5);
  console.log(dog);
  dog.sayHello();
  dog.run();
  

  //定义一个表示猫的类
  class Cat extends Animal{
      sayHello(){
        console.log('喵喵喵');
        
      }
  }


})();
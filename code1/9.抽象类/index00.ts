(()=>{
//基类 抽象类
//abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract 定义的方法 都只能进行定义，不能进行具体实现
//抽象类无法被实例化，只能被继承

/**
 * 应用场景
 *    如果写的类实例化后毫无用处，此时可以把他定义为抽象类
 *  
 *    或者可以把他作为一个基类，通过继承一个派生类去实现基类的一些方法
 */


abstract class A{
  name:string
  constructor(name:string){
    this.name = name
  }

  setName(name:string){
    this.name = name
  }

  abstract getName():string

}

class B extends A {
  name:string
  constructor(name:string){
    super(name)
  }

  getName():string{
    return this.name
  }
}
 
let b = new B('张三')

console.log(b.getName());

b.setName('李四') 

console.log(b.getName());

})()
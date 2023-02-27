(()=>{

//public 公共的
//private 私有的 只有在类中能访问到
//protected 内部和子类中访问
//static 静态属性


// class Person{
//   public name:string
//   private age:number
//   protected sub:boolean
//   static aaa:string = '123456'
  
//   constructor(name:string,age:number,sub:boolean){
//     this.name = name
//     this.age = age
//     this.sub = sub


//     Person.run()   // 无法通过 this.run() 进行调用
//   }

//   static run(){
//     return '789'
//   }

//   static dev(){
//     this.run()  //static 能去调 static的
//     return 'dev'
//   }
// }

// class Man extends Person{
//   constructor(){
//     super('张三',22,false)
//   }
// }

// let p = new Person('张三',22,false)

// console.log(Person.aaa)

//----------------------------------------------

interface Person{
  run(type:boolean):boolean
}

interface H {
  set():void
}

class A{
  params:string
  constructor(params){
    this.params = params
  }
}

class Man extends A implements Person,H{
  run(type:boolean):boolean{
    return type
  }
  set(): void {
    
  }
}

})()
//对象混入 合并 A对象 B对象 合并到一起
//类的混入 A类 B类 合并到一起


interface N{
  age:number
}

interface M {
  name:string
}


let n:N = {
  age:1
}

let m:M ={
  name:'张三'
}

//1. 扩展运算符 浅拷贝 返回新的类型
let c= {...n,...m}

//2. Object.assign 浅拷贝 返回新的类型 返回交叉类型
let d = Object.assign({},n,m)


//---------------------------------------
class Logger{
  log(msg:string){
    console.log(msg);
  }
}

class Html{
  render(){ 
    console.log("render");
  }
}

class App{
  run(){
    console.log('run');
  }
}

type Constructor<T> = new(...args:any[])=>T
function pluginMixins<T extends Constructor<App>>(Base:T){
  return class extends Base{
    private Logger = new Logger()
    private Html = new Html()
  

    constructor(...args:any[]){
      super(...args)
      this.Logger = new Logger()
      this.Html = new Html()
    }

    run(){
      this.Logger.log('run')
    }

    render(){
      this.Html.render()
    }
  } 
}

const mixins = pluginMixins(App)

let app = new mixins()

app.run()





// class A{
//   type?:boolean
//   changeType():void{
//     this.type = !this.type
//   }
// }

// class B{
//   name:string
//   getName():string{
//     return this.name
//   }
// }

// class C  implements A,B{
//   type:boolean = false
//   name:string = '张三'
//   changeType:()=>void
//   getName:()=>string
// }

// mixins(C,[A,B])

// function mixins(curClass:any,itemClass:any[]){
//   itemClass.forEach(item=>{
//     console.log(item)
//     Object.getOwnPropertyNames(item.prototype).forEach(name=>{
//       curClass.prototype[name] = item.prototype[name]
//     })
//   })
// }

// let  ccc  = new C()
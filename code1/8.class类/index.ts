//1. class 的基本用法 继承 和 类型约束 implements

//2. class 的修饰符 readonly private protected public 
// private 只能再当前类中使用
// protected 只能在当前类和子类中使用
// static 静态属性和方法 只能通过类名调用

//3. super 原型

//4. 静态方法

//5. get set


interface Options{
  el:string | HTMLElement
}

interface VueCls{
  options : Options
  init():void
}

interface Vnode{
  tag:string   //div section header ...
  text?:string
  children?:Vnode[]
}

//虚拟dom 简单版
class Dom{
  // 创建节点方法
  private createElement(el:string){
    return document.createElement(el)
  }

  // 填充文本方法
  private setText(el:HTMLElement,text:string | null){
    el.textContent = text
  }
  //渲染函数
  protected render(data:Vnode){
    let root = this.createElement(data.tag)
    this.setText(root,data.text!)
    if(data.children && Array.isArray(data.children)){
      data.children.forEach(item=>{
        let child = this.render(item)
        root.appendChild(child)
      })
    }
    return root
  }
}

class Vue extends Dom implements VueCls{

  options:Options

  constructor(options:Options){
    super()
    this.options = options
    this.init()
  }

  init():void{
    // 虚拟dom 就是通过 js 去渲染真实 DOM
    let data:Vnode = {
      tag:'div',
      children:[
        {
          tag:'div',
          text:"我是子节点1",
          children:[
            {
              tag:'div',
              text:'子节点a'
            },
            {
              tag:'div',
              text:'子节点b'
            }
          ]
        }
      ]
    }
    let app =typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el 
    app?.appendChild(this.render(data))
  }

  static version(){
    return "1.0.0"
  }
}


let app = new Vue({
  el:'#app'
})



class Ref{
  _value:any
  constructor(value:any){
    this._value = value
  }

  get value():any{
    return this._value
  }

  set value(newValue){
    this._value = newValue
  }
}

const ref  = new Ref("哈哈哈")
console.log(ref.value);
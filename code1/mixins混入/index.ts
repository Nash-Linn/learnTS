interface Name {
  name:string
}

interface Age{
  age:number
}

// interface Sex{
//   sex:number
// }

// let a:Name = {
//   name:'张三'
// }
// let b:Age = {
//   age:22
// }
// let c:Sex = {
//   sex:1
// }

// let obj = Object.assign(a,b,c)


//---------------------------------------

class A{
  type?:boolean
  changeType():void{
    this.type = !this.type
  }
}

class B{
  name:string
  getName():string{
    return this.name
  }
}

class C  implements A,B{
  type:boolean = false
  name:string = '张三'
  changeType:()=>void
  getName:()=>string
}

mixins(C,[A,B])

function mixins(curClass:any,itemClass:any[]){
  itemClass.forEach(item=>{
    console.log(item)
    Object.getOwnPropertyNames(item.prototype).forEach(name=>{
      curClass.prototype[name] = item.prototype[name]
    })
  })
}

let  ccc  = new C()
type Person = {
  name:string,
  age:number,
  text:string
}

const myproxy = (object:any,key:any)=>{
  return new Proxy(object,{
    get(target,prop,receiver){
      console.log('=================>get',prop)
      return Reflect.get(target,prop,receiver)
    },
    set(target,prop,value,receiver){
      console.log('=================>set',prop)
      return Reflect.set(target,prop,value,receiver)
    }
  })
}

const logAcccess =<T>(object:T,key: keyof T )=>{
  return myproxy(object,key)
}

let man:Person = logAcccess({
  name:'张三',
  age:22,
  text:'法外狂徒'
},'name')



let man2 = logAcccess({
  name:'李四',
},'name')


man.age = 30
console.log(man)
console.log(man.age)
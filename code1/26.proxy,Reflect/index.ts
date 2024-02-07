(()=>{

let person = {
  name:'Nash',
  age:18
}

console.log(Reflect.get(person,'name',person));
console.log(Reflect.set(person,'name','Nashhhh',person));
console.log(person);


//proxy 支持对象 数组 函数 set map 对象类型
let personProxy = new Proxy(person,{
  //拦截取值
  get(target,key,receiver){
    if(target.age < 18){
      return Reflect.get(target,key,receiver) 
    }else{
      return target.name +'成年了！'
    }
  },

  //拦截赋值
  set(target,key,value,receiver){

    return true
  },

  //拦截函数调用
  // apply(){},

  //拦截 in 操作符
  // has(){},

  //拦截 for...in
  // ownKeys(){}, 

  //拦截 new 操作符号
  // construct(){},

  //拦截 delete
  // deleteProperty(){},

})


console.log(personProxy.name)

console.log('==================================');


const list : Set<Function> = new Set()

const autoRun =(cb:Function)=>{
  if(!list.has(cb)){
    list.add(cb)
  }
}

const observable = <T extends Object>(params:T)=>{
  return new Proxy(params,{
    get(target,key,receiver){
      console.log('get',key);
      return Reflect.get(target,key,receiver)
    },
    set(target,key,value,receiver){
      const result = Reflect.set(target,key,value,receiver)
      list.forEach(fn=>fn())
      return result
    }
  })
} 

const personObser = observable({name:"Nash",attr:"一拳超人"})

autoRun(()=>{
  console.log('变化了');
})

personObser.attr = '咸蛋超人'

})()

 
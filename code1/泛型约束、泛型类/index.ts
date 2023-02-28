(()=>{

/***
 * 其中使用了TS泛型和泛型约束
 * 首先定义了T类型并使用extends关键字继承object类型的子类型
 * 然后使用keyof操作符获取T类型的所有键
 * 它的返回类型是联合类型
 * 最后利用extends关键字约束，K类型必须为keyof T 联合类型的子类型
 * 
 * 
 */

function prop<T, K extends keyof T>(obj:T,key:K){
  return obj[key]
}

let o = {a:1,b:2,c:3}

prop(o,'a')

// prop(o,'d') // 对象 o 中找不到 d


//------------------------------------------------
//泛型类

class Sub<T>{
  attr:T[]=[]
  add(a:T):T[]{
    return [a]
  }
}

let s = new Sub<number>()
s.attr = [1232131]

})()


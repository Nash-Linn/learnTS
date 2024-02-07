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

//泛型约束


interface Len{
  length:number
}
function getLength<T extends Len>(arg:T){
  return arg.length
}

getLength('1')



function prop<T, K extends keyof T>(obj:T,key:K){
  return obj[key]
}

let o = {a:1,b:2,c:3}

prop(o,'a')
// prop(o,'d') // 对象 o 中找不到 d



interface Data {
  name:string
  age:number
  sex:string
}

// 可以将对象中的属性全部变为可选
type Options<T extends object> = {
  [key in keyof T]?:T[key]
}

type Data1 = Options<Data>


// 可以将对象中的部分属性变为必选，其余为可选
type Optional<T,K extends keyof T> = Omit<T,K> & Partial<Pick<T,K>>

// Omit 从 T 中排除 K  
// Partial 将 T 中的所有属性变为可选
// Pick 从 T 中选取K

// 选取 Data 中的 name 和 age 属性，将其变为可选
type Data2 = Optional<Data,'age' | 'sex'>

  
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


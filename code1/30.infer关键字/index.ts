// infer就是推导泛型参数

// infer声明只能出现在extends子句中

// 获取 promise 返回的参数

interface User{
  name:string
  age:number
}

// type PromiseType = Promise<User>
type PromiseType = Promise<Promise<User>>

type GetPromiseType<T> = T extends Promise<infer U> ? GetPromiseType<U> : T

type type = GetPromiseType<PromiseType>

// infer协变
let obj = {
  name:'zhangsan',
  age:18
}

// type Bar<T> = T extends {name:infer N,age:infer A} ? [N,A] : T

// 产生协变会返回联合类型
type Bar<T> = T extends {name:infer U,age:infer U} ? U : T

type T = Bar<typeof obj>

// infer逆变 出现在函数的参数上
// 逆变返回交叉类型
type Param<T> = T extends {
  a:(x:infer U)=>void,
  b:(x:infer U)=>void
} ? U : never


type P = Param<{
  a:(x:string)=>void,
  b:(x:number)=>void
}> // string & number ==> never

type a = number & string // never



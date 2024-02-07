(()=>{
 // Partial 所有属性可选的意思
 // Required 属性必选的意思
 // Pick   选取部分属性
 // Exclude  排除某些属性  处理联合类型
 // Omit 排除部分属性 并且返回新的类型


 interface User{
  address:string
  age:number
  name:string
 }

 //实现 partial
 type CoustomPartial<T> = {
    [P in keyof T]?:T[P]
 }

 type PartialUser = Partial<User>


 type CoustomRequired<T> = {
  [P in keyof T]-?:T[P]
}
 type RequiredUser = Required<PartialUser>


  type CoustomPick<T,K extends keyof T> = {
    [P in K]:T[P]
  }

  type PickUser = Pick<User,'name' | 'age'>


  type CoustomExclude<T,K> = T extends K ? never : T
  // 为什么是 never
  type test2 = 'a' | 'b' | never

  // type test2 = 'a' | 'b'
  // 在联合类型中 never 会被排除


  // 排除name
  type ExcludeUser = Exclude<'name' | 'age','name'>

  
  type CoustomOmit<T,K extends keyof T> = Pick<T,Exclude<keyof T,K>>
  type OmitUser = Omit<User,'name'>


})()

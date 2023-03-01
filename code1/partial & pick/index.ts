type Person  = {
  name:string
  age:number
  text:string
}

//Partial 将属性变为可选
type p = Partial<Person>

//Pick 可以取出Person中要的类型
type q = Pick<Person,'age'|'name'>
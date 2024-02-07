(()=>{
  //1.协变（鸭子类型）

  //主类型
  interface A{
    name:string
    age:number
  }

  //子类型
  interface B{
    name:string
    age:number
    sex:string
  }

  let a:A ={
    name:'a',
    age:18 
  }

  let b:B = {
    name:'b',
    age:20,
    sex:"男"
  }

  //协变

  //只要子类型内的属性能完全覆盖主类型，那么赋值就被允许
  a = b


  //2.逆变
  let fna = (params:A) =>{

  }

  let fnb = (params:B) =>{}


  fnb = fna
  //因为在调用函数fnb的时候，实际上调用的还是fna，所有 fnb的参数类型必须覆盖fna的参数类型

  //总结
  //协变：子类型的属性能完全覆盖主类型的属性
  //逆变：子类型的参数类型能完全覆盖主类型的参数类型

})()

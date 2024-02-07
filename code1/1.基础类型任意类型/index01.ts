//any 任意类型  unknown 不知道的类型
//1.top type 顶级类型 any unknown
//2.Object
//3.Number String Boolean
//4.number string boolean
//5.  123    'hellow'  false
//6.never
//unknown只能赋值给自身或者any
//unknown 没办法读任何属性
//unknown 比 any 更加安全
(()=>{
  let a:any = []
  a = 1
  a = '123'
  a = false
  
  let b:unknown = []
  b = 1
  b = '123'
  b = false

  let zhangsan:unknown ={
    age:22,
    say(){
    console.log('hellow')
  }}
  // console.log('zhangsan.age',zhangsan.age) //读不到

})()



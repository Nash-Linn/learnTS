(()=>{

  //1.Record 
  //2.ReturnType


  //1.Record
  //约束对象的key和value的类型
  //所以接收两个泛型

  type ObjKey = keyof any

  type CustomRecord<K extends ObjKey,T>={
    [P in K]:T
  }

  type Key = 'c'|'x'| 'k'  //key不能少

  type Value ='唱歌'|'跳舞'|'rap' //value随便

  let obj:Record<Key,Value> = {
    c:'唱歌',
    x:'跳舞',
    k:'rap'
  }

  
  // 可以进行嵌套
  let obj1:Record<Key,Record<Key,Value>> = {
    c:{
      c:'唱歌',
      x:'跳舞',
      k:'rap'
    },
    x:{
      c:'唱歌',
      x:'跳舞',
      k:'rap'
    },
    k:{
      c:'唱歌',
      x:'跳舞',
      k:'rap'
    },
  }


  //2.ReturnType
  //获取函数返回值的类型

  type CustomReturnType<F extends Function > = F extends (...args:any[]) => infer Res ? Res : never

  const fn = ()=>[1,2,3,'asd',false]

  type arrNum = ReturnType<typeof fn> 

})()

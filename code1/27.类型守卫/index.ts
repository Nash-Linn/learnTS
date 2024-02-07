(()=>{

  //类型守卫

  //1.类型收缩 | 类型收窄

  //typeof 是有缺陷的 比如说 数组 对象 函数 null 他都返回object
  // const isString = (str:any)=> typeof str === 'string'

  // const isArr =(arr:any) => arr instanceof Array


  //2.类型谓词 | 自定义守卫
  //实现一个函数，该函数可以传入任何类型
  //但是如果是object类型，就检查里面的属性，如果里面的属性是number就取两位
  //如果是string就去除左右空格
  //如果是函数就执行 


  //问题：
  //1.发现没有任何代码提示，原因是any

  //自定义守卫 他只接收布尔值
  //语法规则 参数 is 类型
  //这个参数如果返回 true 那么这个参数就是你想要的类型

  //2.找不到a  nodejs环境 this换成了 undefined
  //浏览器环境this指向window
  //js基础知识  如果函数独立调用 那么this指向window

  // const isObject = (arg:any)=> Object.prototype.toString.call(arg) === '[object Object]'
  const isObject = (arg:any)=> ({}).toString.call(arg) === '[object Object]'
  const isNum = (arg:any):arg is number => typeof arg === 'number'

  const isString = (arg:any):arg is string=> typeof arg === 'string'

  const isArr =(arr:any) => arr instanceof Array


  const isFn = (arg:any):arg is Function => typeof arg === 'function'
 
  const fn = (data:any)=>{
     if(isObject(data)){
        let val
        // 遍历属性不能用 for...in  因为 for in 会遍历原型链上的属性
        Object.keys(data).forEach((key)=>{
            val = data[key]
            if(isNum(val)){
              data[key] = val.toFixed(2)
            }

            if(isString(val)){
              data[key] = val.trim()
            }

            if(isFn(val)){
              data[key]()
            }
        })
     }
  }


  let obj = {
    a: 1.123,
    b: '  123  ',
    c: function(){
      console.log(this);
      return this.a
    }
  }

  fn(obj)


})()

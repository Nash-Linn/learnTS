import  axios  from 'axios';
//1.类装饰器 ClassDecorator
//2.属性装饰器 PropertyDecorator
//3.参数装饰器 ParametrDecorator
//4.方法装饰器 MethodDecorator 
//5.装饰器工厂
//6.import 'reflect-metadata'  安装这个库
//7.axios
import 'reflect-metadata'

//1.类装饰器 ClassDecorator-----------------------------------------
//类装饰器可以不去破坏类的结构，从而达到实现给类增加属性和方法

// //target 指向 构造函数
// const Base:ClassDecorator = (target)=>{
//   target.prototype.xiaoman = '张三'
//   target.prototype.fn = ()=>{
//     console.log('我是fn')
//   }
// }

//因为Base 默认接收的第一个参数是构造器 所有可以通过函数柯里化接收其他参数

const Base = (name:string)=>{
  const fn:ClassDecorator = (target)=>{
    target.prototype.name = name
    target.prototype.fn = ()=>{
      console.log('我是fn')
    }
  }
  return fn
}


//方法装饰器 ---------------------------------------
const Get = (url:string)=>{
  const fn:MethodDecorator = (target,key,desc:PropertyDescriptor)=>{
    // console.log('target1',target)
    // console.log('key',key)
    // console.log('desc',desc)
    // console.log('url',url)
    
    const _key = Reflect.getMetadata('key',target)

    console.log('_key',_key)
    axios.get(url).then(res=>{
      desc.value(_key? res.data[_key]: res.data)
    })
  }
  return fn
}

//参数装饰器---------------------------------------

const Result = ()=>{
  const fn :ParameterDecorator=(target,key,index)=>{
    // console.log('target',target)
    // console.log('key',key)
    // console.log('index',index)
    Reflect.defineMetadata('key','result',target)
  }
  return fn
}

const Name:PropertyDecorator= (target,key)=>{
  console.log('target',target)
  console.log('key',key)
}

@Base('张三1')
class Http{
  @Name
  name:string

  constructor(){
    this.name = '张三'
  }



  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(@Result() data:any){
    // console.log(data.result.list)
    // console.log('data',data)
  }
 
  // @Post('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  // create(){

  // }

}

const http = new Http() as any

http.fn()
console.log('http.name',http.name)



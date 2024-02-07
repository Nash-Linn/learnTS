//实现 once on emit off 订阅中心Map<事件的名称，[Function]订阅者集合>

interface I {
  events:Map<string,Array<Function>>
  once:(event:string,cb:Function)=>void //触发一次
  on:(event:string,cb:Function)=>void //订阅
  emit:(event:string,cb:Function)=>void //派发
  off:(event:string,cb:Function)=>void  //删除监听器
}


 class Emitter implements I{
  events:Map<string,Array<Function>>
  constructor(){
    this.events = new Map()
  }
  once(event:string,cb:Function){
    // //1.创建一个自定义函数，通过on 触发 触发完后立马通过off回收掉
    const temp = (...args:any[])=>{
      console.log("args",args);
      cb.apply(this,args)
      this.off(event,temp)
    }
    this.on(event,temp)
    console.log('once');
  }


  on(event:string,cb:Function){
    if(this.events.has(event)){
      //证明存过了
      const cbList = this.events.get(event)
      cbList?.push(cb)
    }else{
      //第一次存
      this.events.set(event,[cb])
    }
  }

  emit(event:string,...args:any[]){
    const cbList = this.events.get(event)
    if(cbList){
      cbList.forEach(cb=>{
        cb.apply(this,args)
      })
    }
  }

  off(event:string,cb:Function){
    const cbList = this.events.get(event)
    if(cbList){
      const index = cbList.findIndex(item=>item === cb)
      cbList.splice(index,1)
    }
  }
}



    // 事件总线
    const eventBus = new Emitter();
    // 订阅
    eventBus.on('click', (data) => {
      console.log('click', data + '!!!!');
    });

    eventBus.once('onceclick', (data) => {
      console.log("data",data)
      console.log('click once', data + '???');
    });

    // 发布
    eventBus.emit('click', 'hello');
    eventBus.emit('onceclick', 'hello');
    eventBus.emit('onceclick', 'hello');
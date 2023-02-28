declare module 'express' {
  interface Router {
    get(path:string,cb:(req:any,res:any)=>void):void
  }
  interface App{
    use(path:string,router:any):void
    listen(port:number,cb?:()=>void)
  }
  interface express {
    ():App
    Router():Router
  }

  const express:Express

  export default express
}

declare var a:number

declare function  xxxx(params:type) {
  
}
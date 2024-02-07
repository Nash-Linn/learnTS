(()=>{
// function num(a:number,b:number):Array<number>{
//   return [a,b]
// }

// num(1,2)

// function str(a:string,b:string):Array<string>{
//   return [a,b]
// }

// str('1','2')


function add<T>( a:T, b:T):Array<T>{
  return [a,b]
}
// 根据传入的T的类型，对应参数的类型也会变化
add<number>(1,2)
add<string>('1','2')

function sub<T,U>(a:T,b:U):Array<T|U>{
  let arr:Array<T|U> = [a,b]
  return arr
}
sub<number,boolean>(1,false)


// type 中泛型使用
type A<T> = string | number | T
let a : A<boolean> = true

// interface 中泛型使用
interface B<T>{
  name:string,
  age:T
}
let b : B<number> = {
  name:'张三',
  age:18
} 




const axios = {
  get<T>(url:string):Promise<T>{
    return new Promise((resolve,reject)=>{
      let xhr:XMLHttpRequest = new XMLHttpRequest()
      xhr.open('GET',url)
      xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
          resolve(JSON.parse(xhr.responseText) )
        }
      }
      xhr.send(null)
    })

  }
}

interface Data{
  message:string
  code:number
}

axios.get<Data>("./data.json").then((res)=>{
  console.log(res);
})



})()


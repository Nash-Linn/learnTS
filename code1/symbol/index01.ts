(()=>{

let arr:Array<number> = [4,5,6]

let it:Iterator<number> = arr[Symbol.iterator]()

console.log('it.next()',it.next())
console.log('it.next()',it.next())
console.log('it.next()',it.next())
console.log('it.next()',it.next())

console.log('-----------------------------------');

let set:Set<number> = new Set([1,2,3])


type mapKey = string | number
let map:Map<mapKey,mapKey> = new Map()
map.set('1','张三')
map.set('2','李四')

function gen(arg:any){
  let it:Iterator<any> = arg[Symbol.iterator]()
  let next:any = {done:false}
  while(!next.done){
    next = it.next()
    if(!next.done){
     console.log(next)
    }
  }
}

gen(map)

console.log('-----------------------------------');

for(let item of set){
  console.log(item)
}


})()
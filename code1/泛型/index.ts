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

add<number>(1,2)
add<string>('1','2')

function sub<T,U>(a:T,b:U):Array<T|U>{
  let arr:Array<T|U> = [a,b]
  return arr
}
sub<number,boolean>(1,false)

//泛型约束

interface Len{
  length:number
}

function getLength<T extends Len>(arg:T){
  return arg.length
}

getLength('1')

})()


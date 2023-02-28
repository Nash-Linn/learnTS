(()=>{

type A = string & number  // A会推断为never 因为A无法满足既是字符串又是数字类型

function fn():never{
  throw new Error('error')  //如果是抛错可以给函数返回值一个never类型
}

type B = void | number | never  // never 在联合类型中会被忽略

type C = '唱' | '跳' | 'rap'

function kun(value:C){
  switch(value){
    case "唱":
      break
    case '跳':
      break
    case 'rap':
      break
    default:
      //兜底逻辑
      const error:never = value
      break
  }
}










})()
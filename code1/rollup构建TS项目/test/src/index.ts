const a:string = 'hello world'

console.log(a)

const b :number = 123

console.log(b)

if(process.env.NODE_ENV ==='development'){
  console.log('开发');
}else{
  console.log('生产');
}
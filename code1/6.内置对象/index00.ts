(()=>{
// 1.ecma  Number Date RegExp Error XMLHttpRequest
// 2.dom   querySelect MouseEvenet
// 3.bom   promise localStorage location cookie
// 4.案例


//-------------------ecma
const regexp:RegExp = /\w\d\s/

const data:Date = new Date()

const error:Error = new Error()


//------------------dom
const div :HTMLDivElement = document.querySelector('div') as HTMLDivElement

const list: NodeList = document.querySelectorAll('li')

const divs : NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div')

const body:HTMLElement = document.body

// const div:HTMLDivElement = document.querySelector('div')

// console.log('div',div)

document.body.addEventListener('click',(e:MouseEvent)=>{
  console.log(e)
})




let local : Storage = localStorage
let lo:Location = location

function promise():Promise<number>{
  return new Promise<number>((resolve,reject)=>{
    resolve(1)
  })
}

promise().then(res=>{
  console.log(res)
})



})()
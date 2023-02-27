(()=>{

const regexp:RegExp = /\w\d\s/

const data:Date = new Date()

const error:Error = new Error()


const list: NodeList = document.querySelectorAll('li')

const  body:HTMLElement = document.body

// const div:HTMLDivElement = document.querySelector('div')

// console.log('div',div)

document.body.addEventListener('click',(e:MouseEvent)=>{
  console.log(e)
})

function promise():Promise<number>{
  return new Promise<number>((resolve,reject)=>{
    resolve(1)
  })
}

promise().then(res=>{
  console.log(res)
})



})()
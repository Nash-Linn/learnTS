(()=>{

// let arr:[number,boolean] = [1,false]

// let arr:readonly[number,boolean] = [1,false]

let arr:readonly[x:number,y?:boolean] = [1]

type first = typeof arr[0]

})()
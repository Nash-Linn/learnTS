(()=>{

//set------------------------------------
// let set:Set<number> = new Set([1,2,3,4,5,6,6,6,6,]) //天然去重 引用类型除外

// set.add(7)

// console.log(set.has(7));

// set.delete(7)

// console.log(set);



//map-----------------------------------
//map的key可以是引用类型
// {
// let obj:any = {name:'hh'}
// let map:Map<object,any>  = new Map()

// map.set(obj,'haha')

// console.log("map",map.get(obj));

// }


//weakMap weakSet-----------------------------------
//弱引用 不会被垃圾回收机制计入



//weakMap-----------------------------------
//weakMap 的 key 只能是引用类型
let obj:any = {name:'hh'} //引用 +1
let hhh:any= obj //引用 +1


let weakmap:WeakMap<object,any> = new WeakMap()

weakmap.set(obj,'haha')
console.log('obj',obj);
console.log('hhh',hhh);
console.log('weakmap',weakmap.get(obj));

obj = null //引用 -1
console.log('obj',obj);
console.log('hhh',hhh);
console.log('weakmap',weakmap.get(obj));

hhh = null //引用 -1
console.log('obj',obj);
console.log('hhh',hhh);
console.log('weakmap',weakmap.get(obj));


})()
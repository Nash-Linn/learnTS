(()=>{
//1.生成器
const test1 =()=>{
  function* gen(): Generator<Promise<string> | number> {
    let pro = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('hello');
      }, 2000);
    });
    yield pro;  // 可以跟同步或者异步代码
    yield 2;
    yield 3;
  }
  
  let g = gen();
  console.log(g.next().value.then((res:any)=>{console.log("res",res)})); 
  console.log(g.next()); 
  console.log(g.next()); 
  console.log(g.next()); 
}


//2.迭代器  Symbol.iterator
const test2 = ()=>{
  // Object.prototype[Symbol.iterator] = function(){
  //   let value = Object.values(this)
  //   return value[Symbol.iterator]()
  // }

  let [a,b] = {
    a:1,
    b:2,
    [Symbol.iterator](){
      let value = Object.values(this)
      return value[Symbol.iterator]()
    }
  }

  // 正常情况下，Object对象是没有迭代器的，但是可以通过在Object对象上添加Symbol.iterator属性，来实现迭代器
  console.log(a,b);
}

//3.set map

let set:Set<number> = new Set([1,2,2,3])  //会自行去重
// console.log(set); //Set(3) { 1, 2, 3 }


let map:Map<any,any> = new Map() 

let arr = [1,2,3]
// 可以使用对象作为键值
map.set(arr,"arr")

function args(){
  console.log(arguments);  //arguments 是个伪数组 或者 类数组 不存在数组方法
  let args = [...arguments]  //可以使用扩展运算符转换成数组
}

// 遍历 set map arr
const each = (value:any) => {
 let it :any = value[Symbol.iterator]()
 let next:any = {done:false}
 while(!next.done){
  next = it.next()
  if(!next.done){
    console.log(next.value);
  }
 }
}

// each(map)



// 4.迭代器的语法糖 for...of
for(let value of set){
  console.log(value);
}

// 5.for...of 对象不能用，对象没有迭代器

// 6.解构 底层原理也是去调用 Symbol.iterator
let [a,b,c] = [1,2,3]



// 7.对象实现使用 for...of
let obj = {
  max:5,
  current:0,
  [Symbol.iterator](){
    return {
      max:this.max,
      current:this.current,
      next(){
        if(this.current == this.max){
          return {
            value:undefined,
            done:true
          }
        }else{
          return {
            value:this.current++,
            done:false
          }
        }
      }
    }
  }
}

for(let item of obj){
  console.log("item",item);
}

})()
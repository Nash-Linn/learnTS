"use strict";
(() => {
    // function num(a:number,b:number):Array<number>{
    //   return [a,b]
    // }
    // num(1,2)
    // function str(a:string,b:string):Array<string>{
    //   return [a,b]
    // }
    // str('1','2')
    function add(a, b) {
        return [a, b];
    }
    // 根据传入的T的类型，对应参数的类型也会变化
    add(1, 2);
    add('1', '2');
    function sub(a, b) {
        let arr = [a, b];
        return arr;
    }
    sub(1, false);
    let a = true;
    let b = {
        name: '张三',
        age: 18
    };
    const axios = {
        get(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                };
                xhr.send(null);
            });
        }
    };
    axios.get("./data.json").then((res) => {
        console.log(res);
    });
})();

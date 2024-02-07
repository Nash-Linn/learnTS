"use strict";
let canvas = document.querySelector("#canvas");
if (!canvas) {
    throw new Error("没有找到canvas元素");
}
let ctx = canvas.getContext("2d");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
let str = "hello world".split("");
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    //改变字体大小
    ctx.font = '15px Arial';
    Arr.forEach((item, index) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        Arr[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};
setInterval(rain, 40);

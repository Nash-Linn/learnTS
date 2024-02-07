"use strict";
//1. class 的基本用法 继承 和 类型约束 implements
//虚拟dom 简单版
class Dom {
    // 创建节点方法
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本方法
    setText(el, text) {
        el.textContent = text;
    }
    //渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        this.setText(root, data.text);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        // 虚拟dom 就是通过 js 去渲染真实 DOM
        let data = {
            tag: 'div',
            children: [
                {
                    tag: 'div',
                    text: "我是子节点1",
                    children: [
                        {
                            tag: 'div',
                            text: '子节点a'
                        },
                        {
                            tag: 'div',
                            text: '子节点b'
                        }
                    ]
                }
            ]
        };
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    }
    static version() {
        return "1.0.0";
    }
}
let app = new Vue({
    el: '#app'
});
class Ref {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const ref = new Ref("哈哈哈");
console.log(ref.value);

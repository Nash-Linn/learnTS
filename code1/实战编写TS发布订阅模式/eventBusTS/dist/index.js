class Dispatch {
    constructor() {
        this.list = {};
    }
    on(name, fn) {
        const callback = this.list[name] || [];
        callback.push(fn);
        this.list[name] = callback;
    }
    emit(name, ...args) {
        let eventName = this.list[name];
        if (eventName) {
            eventName.forEach(fn => {
                fn.apply(this, args);
            });
        }
        else {
            console.error(`名称错误${name}`);
        }
    }
    off(name, fn) {
        let eventName = this.list[name];
        if (eventName && fn) {
            let index = eventName.findIndex((fns) => {
            });
            eventName.splice(index, 1);
        }
        else {
            console.error(`名称错误${name}`);
        }
    }
    once(name, fn) {
        let de = (...args) => {
            fn.apply(this, ...args);
            this.off(name, de);
        };
        this.on(name, de);
    }
}
const o = new Dispatch();
const fn1 = (...args) => {
    console.log('postA1', args);
};
o.on('postA', fn1);
const fn2 = () => {
    console.log('postA2');
};
o.on('postA', fn2);
o.on('postB', () => {
    console.log('postB1');
});
o.off('postA', fn1);
o.once('postOnce', () => {
    console.log('postOnce');
});
o.emit('postA', 1, 's', false, { name: 'hh' });
o.emit('postOnce');
o.emit('postOnce');

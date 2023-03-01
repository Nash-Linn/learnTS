const myproxy = (object, key) => {
    return new Proxy(object, {
        get(target, prop, receiver) {
            console.log('=================>get', prop);
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            console.log('=================>set', prop);
            return Reflect.set(target, prop, value, receiver);
        }
    });
};
const logAcccess = (object, key) => {
    return myproxy(object);
};
let man = logAcccess({
    name: '张三',
    age: 22,
    text: '法外狂徒'
});
man.age = 30;
console.log(man);
console.log(man.age);

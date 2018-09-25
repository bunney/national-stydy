/**
 * 事件在 javacript 和 Node.js 中很常见,在前端的浏览器中最常见的就是页面交互的点击事件
 * 而在后端 Node.js 环境中, API 也提供了 events 模块 
 */

class Evente {
    constructor () {
        this.map = {};
    }
    add (name, fn) {
        if (this.map[name]) {
            this.map[name].push(fn)
            return;
        }

        this.map[name] = [fn];
        return
    }

    emit (name, ...args) {
        this.map[name].forEach(fn => {
            fn(...args)
        })
    }
}

let e = new Evente()
e.add("hello", (err, name) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(name)
})
e.emit("hello", "发生了错误")
e.emit("hello", null, "hello nodejs")
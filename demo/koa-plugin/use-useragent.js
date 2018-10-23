const Koa = require("koa")
const userAgent = require("koa-useragent")
const log = require("./log-plugin")

const app = new Koa()

const logConfig = {format: (text) => {return `===== ${text} =====`}}

app.use(userAgent)
app.use(log(logConfig))

// app.use(async (ctx, next) => {
//     // console.log(require("util").inspect(ctx.userAgent))
// })

app.listen(3000)
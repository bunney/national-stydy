const Koa = require("koa")
const userAgent = require("koa-useragent")

const app = new Koa()

app.use(userAgent)

app.use(async (ctx, next) => {
    console.log(require("util").inspect(ctx.userAgent))
})

app.listen(3000)
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const router = require('./router/index.js')
const app = new Koa()

app.use(cors({
  origin: ctx => {
    const localhost = new RegExp(/^(localhost)/)
    if (localhost.test(ctx.request.header.host)) {
      return '*'
    }
    //如果你想要拦截跨域可以返回false
    // return false 
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)

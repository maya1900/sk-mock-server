// const router = require('koa-router')({ prefix: '/api' }) //前缀
const router = require('koa-router')()

const main = require('./main')

router.get('/', async ctx => { ctx.body = 'api index' })

router.use('/main', main.routes());

module.exports = router

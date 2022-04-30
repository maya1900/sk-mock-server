const Mock = require("mockjs")
const router = require('koa-router')()

const Random = Mock.Random

Random.extend({
  custom: function() {
    const lang = ['你好', 'hello', '空内七哇', '安宁哈撒呦']
    return this.pick(lang)
  }
})

router.get('/', async ctx => {
  ctx.body = 'main index'
})

router.get('/list', async ctx => {
  const data = Mock.mock({
    'list|3-5': [{
      'id|+1': 1,
      "name": '@name',
      "age|18-28": 25,
      "sex|1": ["male", "female"],
      "address": Random.county(true),
      "lang": "@custom",
      "image": Random.image('200x200')
    }]
  })
  ctx.body = {
    code: 0,
    data
  }
})

module.exports = router

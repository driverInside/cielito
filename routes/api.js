/**
 * router/api.js
 *
 * @description :: Describe the  api routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })

router.prefix('/cielito/')

router.get('/', (ctx) => {
  ctx.body = 'API Cielito by Gabs'
})

module.exports = router

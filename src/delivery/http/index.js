'use strict'
const fastify = require('fastify')({
  logger: true
})

// injection

fastify.register(require('./routes/notes'))

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
  }
  fastify.log.info(`Server listening on ${address}`)
})

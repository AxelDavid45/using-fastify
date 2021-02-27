'use strict'
async function routes (fastify, options) {
  fastify.get('/hello', async (request, reply) => {
    return { hello: 'world' }
  })
}

module.exports = routes

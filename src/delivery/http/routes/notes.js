'use strict'
const { Notes } = require('../../../useCases')
async function notesRoutes (fastify, options) {
  fastify.post('/notes', async (request, reply) => {
    const data = request.body
    try {
      const save = await Notes.create(data)
      reply.send(save)
    } catch (err) {
      fastify.log.error(err)
      reply.send(err)
    }
  })

  fastify.get('/notes', async (request, reply) => {
    try {
      const data = await Notes.getAll()
      reply.send(data)
    } catch (err) {
      fastify.log.error(err)
      reply.send(err)
    }
  })
}

module.exports = notesRoutes

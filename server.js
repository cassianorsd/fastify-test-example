const fastify = require('fastify')({
  logger: true
})

fastify.get('/', (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

fastify.listen(21058,'0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})

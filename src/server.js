const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cors'), {
        origin:true
})

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(21058,'0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})


import { fastify } from 'fastify'

const app = fastity()

app.get('/', () => {
    return 'Server'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})
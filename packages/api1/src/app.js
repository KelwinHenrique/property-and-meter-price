const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

import http from 'http'
import { config } from './config'
import express from './core/config/express'
import api from './api'

const app = express(config.apiRoot, api)
const server = http.createServer(app)

server.listen(config.port, config.ip, () => console.log('Express server listening on http://%s:%d', config.ip, config.port))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

export { server }

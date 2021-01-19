const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/api/index.js']

const doc = {
  info: {
    version: "1.0.0",
    title: "API2",
    description: "Documentation API2."
  },
  host: "localhost:8080/api",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

swaggerAutogen(outputFile, endpointsFiles, doc)

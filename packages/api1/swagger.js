const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/api/index.js']

const doc = {
  info: {
    version: "1.0.0",
    title: "API1",
    description: "Documentation API1."
  },
  host: "https://infinite-shelf-03720.herokuapp.com/api",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

swaggerAutogen(outputFile, endpointsFiles, doc)

import path from 'path'

if (process.env.NODE_ENV !== 'lab' && process.env.NODE_ENV !== 'prod') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
  })
}

const config = {
  port: 8080,
  apiRoot: '/api',
  ip: '0.0.0.0',
}

export {
  config
}

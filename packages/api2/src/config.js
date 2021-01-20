import path from 'path'

if (process.env.NODE_ENV === 'dev') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
  })
} else if (process.env.NODE_ENV === 'lab') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../lab.env'),
    sample: path.join(__dirname, '../.env.example')
  })
}

const config = {
  port: (process.env.PORT || 8080),
  apiRoot: '/api',
  ip: '0.0.0.0',
}

export {
  config
}

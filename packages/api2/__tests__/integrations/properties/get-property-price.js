import { server } from '../../../src/app'
const request = require('supertest')

describe('Integration test getPropertyPrice', () => {

  test('getPropertyPrice should return 200 when all is ok.', async () => {
    const response = await request(server)
      .get('/api/properties/price')
      .query({ quantity: 10 })

    expect(response.status).toBe(200)

  })

  test('getPropertyPrice should return propertyPrice.', async () => {
    const response = await request(server)
      .get('/api/properties/price')
      .query({ quantity: 10 })

    expect(response.body.propertyPrice).not.toBeNull()

  })

  test('getPropertyPrice should return 400 when don\'t send quantity.', async () => {

    const response = await request(server)
      .get('/api/properties/price')

    expect(response.status).toBe(400)

  })

  test('getPropertyPrice should return 400 when quantity smaller then 10.', async () => {

    const response = await request(server)
      .get('/api/properties/price')
      .query({ quantity: 8 })

    expect(response.status).toBe(400)

  })

  test('getPropertyPrice should return 400 when quantity bigger then 10000.', async () => {

    const response = await request(server)
      .get('/api/properties/price')
      .query({ quantity: 80000 })

    expect(response.status).toBe(400)

  })
})

import { server } from './../../../src/app'
const request = require('supertest')

describe('Integration test getMeterPrice', () => {

  test('getMeterPrice should return 200 when all is ok.', async () => {
    const response = await request(server)
      .get('/api/meters/price')

    expect(response.status).toBe(200)

  })

  test('getMeterPrice should return meterValue.', async () => {
    const response = await request(server)
      .get('/api/meters/price')

      expect(response.body.meterValue).not.toBeNull()

  })
})

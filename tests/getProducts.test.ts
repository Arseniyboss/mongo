import request from 'supertest'
import { createServer } from '../createServer'
import { getProducts } from '../config/mongo'

const app = createServer()

describe('GET /api/products', () => {
  it('returns status code 200 and products', async () => {
    const { status, body } = await request(app).get('/api/products')

    const products = await getProducts()

    expect(status).toBe(200)
    expect(body).toEqual(products)
  })
})

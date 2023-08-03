import request from 'supertest'
import { Product } from '../types'
import { createServer } from '../createServer'
import { getProducts } from '../config/mongo'
import { product } from '../data/product'

const app = createServer()

const createProduct = async (product: Product) => {
  return request(app).post('/api/products').send(product)
}

describe('POST /api/products', () => {
  it('returns status code 201 and creates product', async () => {
    const { status } = await createProduct(product)
    const products = await getProducts()

    expect(status).toBe(201)
    expect(products.at(-1)).toMatchObject(product)
  })
})

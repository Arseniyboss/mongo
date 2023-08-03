import request from 'supertest'
import products from '../data/products'
import { createServer } from '../createServer'
import { getProducts } from '../config/mongo'

const index = 0
const fakeId = '62dbfa7f31c12b460f19f2b0'
const id = products[index]._id.toString()

const app = createServer()

const getProduct = async (id: string) => {
  return request(app).get(`/api/products/${id}`)
}

describe('GET /api/products/:id', () => {
  describe('given the product does not exist', () => {
    it('returns status code 404', async () => {
      const { status, text } = await getProduct(fakeId)

      expect(status).toBe(404)
      expect(text).toBe('Product not found')
    })
  })

  describe('given the product exists', () => {
    it('returns status code 200 and product', async () => {
      const { status, body } = await getProduct(id)
      const products = await getProducts()

      expect(status).toBe(200)
      expect(body).toEqual(products[index])
    })
  })
})

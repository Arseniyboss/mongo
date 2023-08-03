import request from 'supertest'
import initialProducts from '../data/products'
import { createServer } from '../createServer'
import { getProducts } from '../config/mongo'
import { product } from '../data/product'

const index = 0
const fakeId = '62dbfa7f31c12b460f19f2b0'
const id = initialProducts[index]._id.toString()

const app = createServer()

const updateProduct = async (id: string) => {
  return request(app).put(`/api/products/${id}`).send(product)
}

describe('PUT /api/products/:id', () => {
  describe('given the product does not exist', () => {
    it('returns status code 404', async () => {
      const { status, text } = await updateProduct(fakeId)

      expect(status).toBe(404)
      expect(text).toBe('Product not found')
    })
  })

  describe('given the product exists', () => {
    it('returns status code 200 and updates product', async () => {
      const { status } = await updateProduct(id)
      const products = await getProducts()

      expect(status).toBe(200)
      expect(products[index]).toMatchObject(product)
    })
  })
})

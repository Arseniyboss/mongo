import { Schema, model } from 'mongoose'
import { Product as ProductSchema } from '../types'

const ProductSchema = new Schema<ProductSchema>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Product = model('Product', ProductSchema)

export default Product

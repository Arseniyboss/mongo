import express from 'express'
import { getProducts } from '../controllers/getProducts'
import { getProduct } from '../controllers/getProduct'
import { createProduct } from '../controllers/createProduct'
import { deleteProduct } from '../controllers/deleteProduct'
import { updateProduct } from '../controllers/updateProduct'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

export default router

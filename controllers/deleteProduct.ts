import { Request, Response } from 'express'
import { Params } from '../types'
import Product from '../models/product'

export const deleteProduct = async (req: Request<Params>, res: Response) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).send('Product not found')
  }

  product.deleteOne()

  res.status(200).send()
}

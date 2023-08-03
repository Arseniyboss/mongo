import { Request, Response } from 'express'
import { Params } from '../types'
import Product from '../models/product'

export const getProduct = async (req: Request<Params>, res: Response) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).send('Product not found')
  }

  res.status(200).json(product)
}

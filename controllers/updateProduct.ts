import { Request, Response } from 'express'
import { Params } from '../types'
import Product from '../models/product'

export const updateProduct = async (req: Request<Params>, res: Response) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  if (!product) {
    return res.status(404).send('Product not found')
  }

  res.status(200).send()
}

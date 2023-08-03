import { Request, Response } from 'express'
import Product from '../models/product'

export const createProduct = async (req: Request, res: Response) => {
  await Product.create(req.body)
  res.status(201).send()
}

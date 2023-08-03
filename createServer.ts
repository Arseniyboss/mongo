import express from 'express'
import productRoutes from './routes/product'

export const createServer = () => {
  const app = express()

  app.use(express.json())

  app.use('/api/products', productRoutes)

  return app
}

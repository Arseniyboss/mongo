import { connectToDB, disconnectFromDB, seedProducts } from './config/mongo'

beforeAll(async () => {
  await connectToDB()
  await seedProducts()
})

afterAll(async () => await disconnectFromDB())

import { MongoMemoryServer } from 'mongodb-memory-server'
import { Product as ProductType } from '../types'
import mongoose from 'mongoose'
import products from '../data/products'

type Document<T> = mongoose.mongo.WithId<T>[]
type Data = ProductType

interface Product extends ProductType {
  _id: string
}

const collections = mongoose.connection.collections

let mongoMemoryServer: MongoMemoryServer

export const connectToDB = async () => {
  mongoMemoryServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoMemoryServer.getUri())
}

export const disconnectFromDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.disconnect()
  await mongoose.connection.close()
  await mongoMemoryServer.stop()
}

export const seedCollection = async (name: string, data: Data[]) => {
  const collection = collections[name]
  await collection.insertMany(data)
}

export const seedProducts = async () => {
  await seedCollection('products', products)
}

const getDocuments = async <T>(name: string) => {
  const documents = await collections[name].find().toArray()
  const mappedDocuments = documents.map((document) => {
    return { ...document, _id: document._id.toString() }
  })
  return mappedDocuments as Document<T>
}

export const getProducts = async (): Promise<Document<Product>> => {
  return getDocuments('products')
}

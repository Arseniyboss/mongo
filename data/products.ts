import { Types } from 'mongoose'
import { Product as ProductType } from '../types'

const { ObjectId } = Types

export interface Product extends ProductType {
  _id: Types.ObjectId
}

const products: Product[] = [
  {
    _id: new ObjectId('62dbfa7f31c12b460f19f2b1'),
    name: 'Airpods Wireless Bluetooth Headphones',
    brand: 'Apple',
    price: 129.99,
  },
  {
    _id: new ObjectId('62dbfa7f31c12b460f19f2b2'),
    name: 'Cannon EOS 80D DSLR Camera',
    brand: 'Cannon',
    price: 929.99,
  },
  {
    _id: new ObjectId('62dbfa7f31c12b460f19f2b3'),
    name: 'Sony Playstation 4 Pro White Version',
    brand: 'Sony',
    price: 399.99,
  },
]

export default products

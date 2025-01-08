declare type Product = {
  id: number
  title: string
  price: number
  description: string
  images: [string, string, string]
  category: {
    id: number
    name: string
    image: string
  },
  sizes: string[],
  creationAt: string,
  updatedAt: string
}

declare type Category = {
  id: number
  name: string
  image: string
}

declare type CartItem = {
  product: Product
  selectedSize: string
}

declare type Item = {
  productId: number
  price: number,
  size: string
}

declare type Order = {
  user: {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    document: string,
  },
  shipping: {
    name: string,
    lastName: string,
    streetNumber: string,
    postalCode: string,
    city: string,
  },
  items: Item[],
  payment: {
    method: string,
    cardDisplayName: string,
    cardDisplayNumber: string,
    cardCode: string,
    documentCardOwner: string,
    expiration: {
      month: number,
      year: number
    }
  }
}

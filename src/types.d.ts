interface Product {
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

interface ProductFilters {
  categoryId?: number
  price_min?: number
  price_max?: number
  title?: string
  limit?: number
  offset?: number
}

interface Category {
  id: number
  name: string
  image: string
}

interface CartItem {
  product: Product
  selectedSize: string
}

interface Item {
  productId: number
  price: number,
  size: string,
  quantity: number
}

interface User {
  id: number
  name: string
  email: string
}

interface NewUser {
  name: string
  email: string
  password: string
  avatar: string
}

interface Login {
  email: string
  password: string
}

interface Auth {
  access_token: string
  refresh_token: string
}

interface MyProfile {
  id: number
  name: string
  avatar: string
}

interface Order {
  user: {
    name: string,
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

interface OrderAnswer extends Order {
  id: number,
  status: "paid" | "pending" | "failed" | "cancelled" | "delivered" | "returned",
  createdAt: () => string,
  totalAmount: number,
  trackingCode: string
}

import { RootState } from "../store"
import { AlertState } from "../store/reducers/alert"
import { AuthState } from "../store/reducers/auth"
import { CartState } from "../store/reducers/cart"
import { FavoritesState } from "../store/reducers/favorites"
import { FilterState } from "../store/reducers/filter"
import { NewsletterState } from "../store/reducers/newsletterMock"

import { defaultAvatar } from "."
import api from "../services/api"

export const productMock = [
  {
    id: 1,
    title: 'T-shirt',
    price: 29,
    description: 'Description',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: ['s', 'm', 'l'],
    creationAt: '2023-09-20T10:00:00Z',
    updatedAt: ''
  },
  {
    id: 2,
    title: 'Trousers',
    price: 99,
    description: 'Description',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: ['s', 'm', 'l'],
    creationAt: '2023-05-15T10:00:00Z',
    updatedAt: ''
  },
  {
    id: 3,
    title: 'Dress',
    price: 59,
    description: 'Description',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: ['s', 'm', 'l'],
    creationAt: '2023-03-19T10:00:00Z',
    updatedAt: ''
  },
  {
    id: 4,
    title: 'Skirt',
    price: 19,
    description: 'Description',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: ['s', 'm', 'l'],
    creationAt: '2023-01-02T10:00:00Z',
    updatedAt: ''
  },
  {
    id: 5,
    title: 'Coat',
    price: 89,
    description: 'Description',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: ['s', 'm', 'l'],
    creationAt: '2023-12-01T10:00:00Z',
    updatedAt: ''
  },
]

export const categoryMock = [
  {
    id: 1,
    name: 'Clothes',
    image: ''
  },
  {
    id: 2,
    name: 'Electronics',
    image: ''
  },
  {
    id: 3,
    name: 'Furniture',
    image: ''
  },
  {
    id: 4,
    name: 'Shoes',
    image: ''
  },
  {
    id: 5,
    name: 'Miscellaneous',
    image: ''
  }
]

export const usersMock = [
  {
    id: 1,
    name: 'Emily Test',
    avatar: defaultAvatar
  },
  {
    id: 2,
    name: 'Oliver Test',
    avatar: defaultAvatar
  },
  {
    id: 3,
    name: 'Joao Test',
    avatar: defaultAvatar
  }
]

export const ordersMock: Order[] = [
  {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1-202-555-0173',
      document: 'A1234567',
    },
    shipping: {
      name: 'John',
      lastName: 'Doe',
      streetNumber: '221B Baker Street',
      postalCode: 'NW1 6XE',
      city: 'London',
    },
    items: [
      {
        productId: 101,
        price: 59.99,
        size: 'M',
        quantity: 1,
      },
      {
        productId: 202,
        price: 89.99,
        size: 'L',
        quantity: 2,
      },
    ],
    payment: {
      method: 'credit card',
      cardDisplayName: 'John Doe',
      cardDisplayNumber: '**** **** **** 1234',
      cardCode: '123',
      documentCardOwner: 'A1234567',
      expiration: {
        month: 12,
        year: 2025,
      },
    },
  },
  {
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+44-20-7946-0958',
      document: 'B9876543',
    },
    shipping: {
      name: 'Jane',
      lastName: 'Smith',
      streetNumber: '742 Evergreen Terrace',
      postalCode: '58008',
      city: 'Springfield',
    },
    items: [
      {
        productId: 303,
        price: 45.5,
        size: 'S',
        quantity: 3,
      },
      {
        productId: 404,
        price: 120.0,
        size: 'M',
        quantity: 1,
      },
    ],
    payment: {
      method: 'debit card',
      cardDisplayName: 'Jane Smith',
      cardDisplayNumber: '**** **** **** 5678',
      cardCode: '456',
      documentCardOwner: 'B9876543',
      expiration: {
        month: 6,
        year: 2024,
      },
    },
  },
  {
    user: {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+61-2-9374-4000',
      document: 'C1357924',
    },
    shipping: {
      name: 'Alice',
      lastName: 'Johnson',
      streetNumber: '1600 Pennsylvania Avenue NW',
      postalCode: '20500',
      city: 'Washington',
    },
    items: [
      {
        productId: 505,
        price: 75.0,
        size: 'L',
        quantity: 2,
      },
      {
        productId: 606,
        price: 99.99,
        size: 'XL',
        quantity: 1,
      },
    ],
    payment: {
      method: 'PayPal',
      cardDisplayName: 'Alice Johnson',
      cardDisplayNumber: '**** **** **** 9012',
      cardCode: '789',
      documentCardOwner: 'C1357924',
      expiration: {
        month: 11,
        year: 2023,
      },
    },
  },
]

export const orderAnswerMock: OrderAnswer[] = [
  {
    id: 1,
    status: 'paid',
    createdAt: () => '2025-02-18T10:00:00Z',
    totalAmount: 150.75,
    trackingCode: 'TRACK123456',
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1-202-555-0173',
      document: 'A1234567',
    },
    shipping: {
      name: 'John',
      lastName: 'Doe',
      streetNumber: '221B Baker Street',
      postalCode: 'NW1 6XE',
      city: 'London',
    },
    items: [
      {
        productId: 101,
        price: 59.99,
        size: 'M',
        quantity: 1,
      },
      {
        productId: 202,
        price: 89.99,
        size: 'L',
        quantity: 2,
      },
    ],
    payment: {
      method: 'credit card',
      cardDisplayName: 'John Doe',
      cardDisplayNumber: '**** **** **** 1234',
      cardCode: '123',
      documentCardOwner: 'A1234567',
      expiration: {
        month: 12,
        year: 2025,
      },
    },
  },
  {
    id: 2,
    status: 'pending',
    createdAt: () => '2025-02-17T15:30:00Z',
    totalAmount: 75.00,
    trackingCode: 'TRACK654321',
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+44-20-7946-0958',
      document: 'B9876543',
    },
    shipping: {
      name: 'Jane',
      lastName: 'Smith',
      streetNumber: '742 Evergreen Terrace',
      postalCode: '58008',
      city: 'Springfield',
    },
    items: [
      {
        productId: 303,
        price: 45.5,
        size: 'S',
        quantity: 3,
      },
      {
        productId: 404,
        price: 120.0,
        size: 'M',
        quantity: 1,
      },
    ],
    payment: {
      method: 'debit card',
      cardDisplayName: 'Jane Smith',
      cardDisplayNumber: '**** **** **** 5678',
      cardCode: '456',
      documentCardOwner: 'B9876543',
      expiration: {
        month: 6,
        year: 2024,
      },
    },
  },
  {
    id: 3,
    status: 'paid',
    createdAt: () => '2025-02-16T08:45:00Z',
    totalAmount: 200.00,
    trackingCode: 'TRACK789012',
    user: {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+61-2-9374-4000',
      document: 'C1357924',
    },
    shipping: {
      name: 'Alice',
      lastName: 'Johnson',
      streetNumber: '1600 Pennsylvania Avenue NW',
      postalCode: '20500',
      city: 'Washington',
    },
    items: [
      {
        productId: 505,
        price: 75.0,
        size: 'L',
        quantity: 2,
      },
      {
        productId: 606,
        price: 99.99,
        size: 'XL',
        quantity: 1,
      },
    ],
    payment: {
      method: 'PayPal',
      cardDisplayName: 'Alice Johnson',
      cardDisplayNumber: '**** **** **** 9012',
      cardCode: '789',
      documentCardOwner: 'C1357924',
      expiration: {
        month: 11,
        year: 2023,
      },
    },
  },
]

export const storeMock: Partial<RootState> = {
  orders: {
    orders: orderAnswerMock,
    isLoading: false,
    error: null
  },
  cart: {} as CartState,
  filter: {} as FilterState,
  favorites: {} as FavoritesState,
  alert: {} as AlertState,
  newsletter: {} as NewsletterState,
  auth: {} as AuthState,
  [api.reducerPath]: {} as ReturnType<typeof api.reducer>
}

import { screen, waitFor } from "@testing-library/react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Home from ".."

import { renderWithProvider } from "../../../utils/tests"

const categoryMock = [
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

const productMock = [
  {
    id: 1,
    title: 'T-shirt',
    price: 29,
    description: 'T-shirt',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: [''],
    creationAt: '',
    updatedAt: ''
  },
  {
    id: 2,
    title: 'T-shirt',
    price: 29,
    description: 'T-shirt',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: [''],
    creationAt: '',
    updatedAt: ''
  },
  {
    id: 3,
    title: 'T-shirt',
    price: 29,
    description: 'T-shirt',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: [''],
    creationAt: '',
    updatedAt: ''
  },
  {
    id: 4,
    title: 'T-shirt',
    price: 29,
    description: 'T-shirt',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: [''],
    creationAt: '',
    updatedAt: ''
  },
  {
    id: 5,
    title: 'T-shirt',
    price: 29,
    description: 'T-shirt',
    images: [''],
    category: {
      id: 1,
      name: 'Clothes',
      image: 'string'
    },
    sizes: [''],
    creationAt: '',
    updatedAt: ''
  },
]

const server = setupServer(
  rest.get('https://api.escuelajs.co/api/v1/categories', (req, res, ctx) => {
    return res(ctx.json(categoryMock))
  }),
  rest.get('https://api.escuelajs.co/api/v1/products', (req, res, ctx) => {
    return res(ctx.json(productMock))
  })
)

describe('Tests for Home component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Component must correctly render', () => {
    renderWithProvider(<Home />)
    expect(screen.getByTestId('hero-element')).toBeInTheDocument()
  })

  test('Conditionally renders categories and products based on lenght', () => {
    renderWithProvider(<Home />)
    expect(screen.queryByText('New arrivals')).not.toBeInTheDocument()
    expect(screen.queryByText('Shop by Category')).not.toBeInTheDocument()
  })

  test('Must correctly render products list when data is fetched', async () => {
    renderWithProvider(<Home />)
    await waitFor(() => {
      expect(screen.queryByText('New arrivals')).toBeInTheDocument()
      expect(screen.queryByText('Shop by Category')).toBeInTheDocument()
    })
  })
})

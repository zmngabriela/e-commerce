import { screen, waitFor } from "@testing-library/react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'intersection-observer';

import Home from ".."

import { renderWithProvider } from "../../../utils/tests"
import { categoryMock, productMock } from "../../../utils/testsMocks";

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

  test('Displays error message when categories fail to load', async () => {
    server.use(
      rest.get('https://api.escuelajs.co/api/v1/categories', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
      })
    )
    renderWithProvider(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Something went wrong while loading the categories.')).toBeInTheDocument()
      expect(screen.getByText('Error details:')).toBeInTheDocument()
      expect(screen.getByText('500')).toBeInTheDocument()
    })
  })

  test('Displays error message when products fail to load', async () => {
    server.use(
      rest.get('https://api.escuelajs.co/api/v1/products', (req, res, ctx) => {
        return res(ctx.status(404), ctx.json({ message: 'Not Found' }))
      })
    )
    renderWithProvider(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Something went wrong while loading the products.')).toBeInTheDocument()
      expect(screen.getByText('Error details:')).toBeInTheDocument()
      expect(screen.getByText('404')).toBeInTheDocument()
    })
  })
})

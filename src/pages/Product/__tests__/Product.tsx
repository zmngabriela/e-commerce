import {fireEvent, screen, waitFor } from "@testing-library/react"
import { rest } from 'msw';
import { setupServer } from "msw/node";

import ProductPage from ".."

import { renderWithProvider } from "../../../utils/tests"
import { productMock } from '../../../utils/testsMocks'

// mocking useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' })
}))

const server = setupServer(
  rest.get('https://api.escuelajs.co/api/v1/products/:id', (req, res, ctx) => {
    const { id } = req.params
    const product = productMock.find((p) => p.id === Number(id));
    if (product) {
      return res(ctx.json(product));
    }
  })
)

describe('Tests for Product component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Component must correctly render when data is fetched', async () => {
    renderWithProvider(<ProductPage />, {
      useMemoryRouter: true,
      memoryRouterProps: { initialEntries: ['https://api.escuelajs.co/api/v1/products/1'] }
    })
    await waitFor(() => {
      expect(screen.getAllByText("T-shirt"))
    })
  })

  test('When data fetching is loading, react spinner must be rendered', async () => {
    renderWithProvider(<ProductPage />, {
      useMemoryRouter: true,
      memoryRouterProps: { initialEntries: ['https://api.escuelajs.co/api/v1/products/1'] }
    })
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  test('Displays error message when fetched product fails to load', async () => {
    server.use(
      rest.get('https://api.escuelajs.co/api/v1/products/1', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
      })
    )
    const {debug} = renderWithProvider(<ProductPage />)
    await waitFor(() => {
      expect(screen.getByText('Something went wrong while loading the product.')).toBeInTheDocument()
      expect(screen.getByText('Error details:')).toBeInTheDocument()
      expect(screen.getByText('500')).toBeInTheDocument()
    })
    debug()
  })

  test('Adds product to cart when click on add to cart button', async () => {
    const { store } = renderWithProvider(<ProductPage />, {
      useMemoryRouter: true,
      memoryRouterProps: { initialEntries: ['https://api.escuelajs.co/api/v1/products/1'] }
    })
    await waitFor(() => {
      expect(screen.getByTestId('cart-btn'))
    })
    fireEvent.click(screen.getByText('s'))
    fireEvent.click(screen.getByTestId('cart-btn'))
    expect(store.getState().cart.items).toContainEqual(expect.objectContaining({
      product: expect.objectContaining({ id: 1 }),
      selectedSize: 's',
    }))
  })

  test('Alert if user tries to add product to cart without selected a size', async () => {
    const { store } = renderWithProvider(<ProductPage />, {
      useMemoryRouter: true,
      memoryRouterProps: { initialEntries: ['https://api.escuelajs.co/api/v1/products/1'] }
    })
    await waitFor(() => {
      expect(screen.getByTestId('cart-btn'))
    })
    fireEvent.click(screen.getByTestId('cart-btn'))
    expect(store.getState().alert.message).toContain('Please select a size.')
  })
})

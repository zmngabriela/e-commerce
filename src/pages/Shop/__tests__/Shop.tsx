import { screen, waitFor } from "@testing-library/react"
import { rest } from "msw"
import { setupServer } from "msw/lib/node"

import Shop from ".."

import { renderWithProvider } from "../../../utils/tests"
import { productMock } from "../../../utils/testsMocks"
import { configStore } from "../../../store"
import { setSortBy } from "../../../store/reducers/filter"

const server = setupServer(
  rest.get('https://api.escuelajs.co/api/v1/products', (req, res, ctx) => {
    return res(ctx.json(productMock))
  })
)

const store = configStore()

describe('Tests for Shop component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Component must correctly render when data is fetched', async () => {
    renderWithProvider(<Shop />)
    await waitFor(() => {
      expect(screen.getByTestId('filter')).toBeInTheDocument()
    })
  })

  test('When data fetching is loading, react spinner must be rendered', () => {
    renderWithProvider(<Shop />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  test('Displays error message when data fetching has error', async () => {
    server.use(
      rest.get('https://api.escuelajs.co/api/v1/products', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
      })
    )
    renderWithProvider(<Shop />)
    await waitFor(() => {
      expect(screen.getByText('Something went wrong while loading the products.')).toBeInTheDocument()
      expect(screen.getByText('Error details:')).toBeInTheDocument()
      expect(screen.getByText('500')).toBeInTheDocument()
    })
  })

  test('Sort product by ascendent order when filtered', async () => {
    store.dispatch(setSortBy("asc"))
    renderWithProvider(<Shop />, {store})
    const products = await screen.findAllByTestId('product-item')
    expect(products).toHaveLength(productMock.length)
    expect(products[0]).toHaveTextContent('Skirt')
    expect(products[1]).toHaveTextContent('T-shirt')
    expect(products[2]).toHaveTextContent('Dress')
  })

  test('Sort product by descendent order when filtered', async () => {
    store.dispatch(setSortBy("desc"))
    renderWithProvider(<Shop />, {store})
    const products = await screen.findAllByTestId('product-item')
    expect(products).toHaveLength(productMock.length)
    expect(products[0]).toHaveTextContent('Trousers')
    expect(products[1]).toHaveTextContent('Coat')
    expect(products[2]).toHaveTextContent('Dress')
  })

  test('Sort product by latest order when filtered', async () => {
    store.dispatch(setSortBy("latest"))
    renderWithProvider(<Shop />, {store})
    const products = await screen.findAllByTestId('product-item')
    expect(products).toHaveLength(productMock.length)
    expect(products[0]).toHaveTextContent('Coat')
    expect(products[1]).toHaveTextContent('T-shirt')
    expect(products[2]).toHaveTextContent('Trousers')
  })
})

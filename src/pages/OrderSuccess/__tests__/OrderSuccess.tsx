import { screen, waitFor } from "@testing-library/react"

import OrderSuccess from ".."

import { renderWithProvider } from "../../../utils/tests"
import { storeMock } from "../../../utils/testsMocks"

// mocking use params hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' })
}))

describe('Tests for Order Success component', () => {
  test('Component must correctly render', () => {
    renderWithProvider(<OrderSuccess/>)
    expect(screen.getByTestId('container')).toBeInTheDocument()
  })

  test('Order is correctly rendered when available', async () => {
    renderWithProvider(<OrderSuccess />, {
      preloadedState: storeMock,
      useMemoryRouter: true,
      memoryRouterProps: { initialEntries: ['/order-success/1'] }
    })
    await waitFor(() => {
      expect(screen.getByText(/Order #1/i)).toBeInTheDocument()
    })
  })

  test('Empty message is rendered when order is not available', () => {
    const {store} = renderWithProvider(<OrderSuccess/>)
    const orders = store.getState().orders.orders
  })
})

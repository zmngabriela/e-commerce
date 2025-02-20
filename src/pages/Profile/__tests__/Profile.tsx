import {fireEvent, screen, waitFor } from "@testing-library/react"
import { rest } from 'msw';
import { setupServer } from "msw/node";

import Profile from "..";

import { renderWithProvider } from "../../../utils/tests"
import { usersMock } from "../../../utils/testsMocks";

const server = setupServer(
  rest.get('https://api.escuelajs.co/api/v1/auth/profile', (req, res, ctx) => {
    return res(ctx.json(usersMock[0]))
  }),
  rest.get('https://api.escuelajs.co/api/v1/users', (req, res, ctx) => {
    return res(ctx.json(usersMock))
  })
)

describe('Tests for Profile component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Component must correctly render', async () => {
    renderWithProvider(<Profile />)
    await waitFor(() => {
      expect(screen.getByTestId('profile-btn')).toBeInTheDocument()
    })
    expect(screen.getByTestId('name-input')).toHaveValue('Emily Test')
  })

  test('When data fetching is loading, react spinner must be rendered', () => {
    renderWithProvider(<Profile />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  test('Displays error when user session fails to load', async () => {
    server.use(
      rest.get('https://api.escuelajs.co/api/v1/auth/profile', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
      })
    )
    renderWithProvider(<Profile />)
    await waitFor(() => {
      expect(screen.getByText('Something went wrong while loading the profile.')).toBeInTheDocument()
      expect(screen.getByText('Error details:')).toBeInTheDocument()
      expect(screen.getByText('500')).toBeInTheDocument()
    })
  })

  test('Log user out when click on logout button', async () => {
    const { store } = renderWithProvider(<Profile />)
    await waitFor(() => {
      expect(screen.getByTestId('logout-btn')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByTestId('logout-btn'))
    expect(store.getState().auth.credentials).toEqual({
        access_token: '',
        refresh_token: ''
    })
  })
})

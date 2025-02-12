import { useNavigate } from 'react-router-dom'
import { fireEvent, screen } from "@testing-library/react"

import CartWishlist from ".."

import { renderWithProvider } from "../../../utils/tests"

// mocking useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

describe('Tests for CartWishlist component', () => {
  test('Cart must correctly render', () => {
    renderWithProvider(<CartWishlist mode="cart" />)
    expect(screen.getByText('There are no products in your cart.')).toBeInTheDocument()
  })

  test('Wishlist must correctly render', () => {
    renderWithProvider(<CartWishlist mode="wishlist" />)
    expect(screen.getByText('There are no products in your wishlist.')).toBeInTheDocument()
  })

  test('useNavigate is updated when TabButton Wishlist is clicked', () => {
    const mockNavigate = jest.fn()
    useNavigate.mockReturnValue(mockNavigate)

    renderWithProvider(<CartWishlist mode="cart" />)
    const wishlistButton = screen.getByTestId('wishlist-btn')
    fireEvent.click(wishlistButton)
    expect(mockNavigate).toHaveBeenCalledWith('/favorites')
  })

  test('useNavigate is updated when TabButton Cart is clicked', () => {
    const mockNavigate = jest.fn()
    useNavigate.mockReturnValue(mockNavigate)

    renderWithProvider(<CartWishlist mode="wishlist" />)
    const cartButton = screen.getByTestId('cart-btn')
    fireEvent.click(cartButton)
    expect(mockNavigate).toHaveBeenCalledWith('/cart')
  })
})

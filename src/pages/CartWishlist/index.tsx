import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Cart from "../../containers/Cart"
import ProductsList from "../../containers/ProductsList"
import Empty from "../../components/Empty"

import { RootState } from "../../store"

import * as S from './styles'
import { Container } from "../../styles"

type Props = {
  mode: 'cart' | 'wishlist'
}

const CartWishlist = ({ mode }: Props) => {
  const navigate = useNavigate()
  const favorites = useSelector((state: RootState) => state.favorites.favoritesList)
  const itensCart = useSelector((state: RootState) => state.cart.items)

  return (
    <Container className="central narrow">
      <S.Tabs>
        <S.TabButton
          data-testid="cart-btn"
          mode={mode === 'cart' ? 'cart' : 'wishlist'}
          onClick={() => (
            navigate('/cart')
          )}
          type="button"
        >
          Cart {itensCart.length > 0 ? `(${itensCart.length})` : ''}
        </S.TabButton>
        <S.TabButton
          data-testid="wishlist-btn"
          mode={mode === 'cart' ? 'wishlist' : 'cart'}
          onClick={() => (
            navigate('/favorites')
          )}
          type="button"
        >
          Wishlist
        </S.TabButton>
      </S.Tabs>
      {mode === 'cart' ? (
        itensCart.length > 0 ? (
          <Cart />
          ) : (
            <Empty
              noProductsMessage="There are no products in your cart"
              categoryTitle="Newest products"
              categoryFilter={3}
            />
        )) : (
          favorites.length !== 0 ? (
            <ProductsList filteredProducts={favorites} />
          ) : (
            <Empty
              noProductsMessage="There are no products in your wishlist"
              categoryTitle="Check out our most wanted items"
              categoryFilter={2}
            />
          )
      )}
    </Container>
  )
}

export default CartWishlist

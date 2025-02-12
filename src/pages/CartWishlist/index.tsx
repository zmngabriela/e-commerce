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
  const favoritesList = useSelector((state: RootState) => state.favorites.favoritesList)
  const itemsCart = useSelector((state: RootState) => state.cart.items)

  const cart = (
    itemsCart.length > 0 ? (
      <Cart />
      ) : (
        <Empty
          noProductsMessage="There are no products in your cart."
          categoryTitle="Newest products"
          categoryFilter={3}
        />
    )
  )

  const favorites = (
    favoritesList.length !== 0 ? (
      <ProductsList filteredProducts={favoritesList} />
    ) : (
      <Empty
        noProductsMessage="There are no products in your wishlist."
        categoryTitle="Most wanted items"
        categoryFilter={2}
      />
    )
)

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
          Cart {itemsCart.length > 0 ? `(${itemsCart.length})` : ''}
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
      {mode === 'cart' ? cart : favorites}
    </Container>
  )
}

export default CartWishlist

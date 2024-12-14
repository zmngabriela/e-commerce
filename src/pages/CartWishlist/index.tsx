import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"

import Cart from "../../components/Cart"
import ProductsList from "../../components/ProductsList"
import Empty from "../../components/Empty"

import { RootState } from "../../store"

import * as S from './styles'

type Props = {
  isCart: boolean
}

const CartWishlist = ({ isCart }: Props) => {
  const navigate = useNavigate()

  const itensCart = useSelector((state: RootState) => state.cart.items)
  const [cartActive, setCartActive] = useState(isCart)

  const favorites = useSelector((state: RootState) => state.favorites.favoritesList)
  const { term, category } = useSelector((state: RootState) => state.filter, shallowEqual)

  const filterWishlist = () => {
    if (!favorites) return []
    return favorites?.filter(favorite => {
      const termMatch = term
        ? favorite.title.toLowerCase().search(term.toLowerCase()) !== -1 || favorite.category.name.toLowerCase().search(term.toLowerCase()) !== -1
        : []
      const categoryMatch = category && category !== 0
        ? favorite.category.id === Number(category)
        : []
      return termMatch && categoryMatch
    })
  }

  const wishlist = filterWishlist()

  return (
    <S.Component>
      <S.Tabs>
        <S.TabButton
          $isactive={cartActive}
          onClick={() => (
            setCartActive(true),
            navigate('/cart')
          )}
          type="button"
        >
          Cart {itensCart.length > 0 ? `(${itensCart.length})` : ''}
        </S.TabButton>
        <S.TabButton
          $isactive={!cartActive}
          onClick={() => (
            setCartActive(false),
            navigate('/favorites')
          )}
          type="button"
        >
          Wishlist
        </S.TabButton>
      </S.Tabs>
      {cartActive ? (
        itensCart.length > 0 ? (
          <Cart />
          ) : (
            <Empty
              noProductsMessage="There are no products in your cart"
              categoryTitle="Newest products"
              categoryFilter={3}
            />
        )) : (
          wishlist.length !== 0 ? (
            <ProductsList filteredProducts={wishlist} />
          ) : (
            <Empty
              noProductsMessage="There are no products in your wishlist"
              categoryTitle="Check out our most wanted items"
              categoryFilter={2}
            />
          )
      )}
    </S.Component>
  )
}

export default CartWishlist

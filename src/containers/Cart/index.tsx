import { useSelector } from "react-redux"

import CardItemCart from "../../components/CardItemCart"
import CartSummary from "../../components/CartSummary"

import { RootState } from "../../store"
import { getUniqueItems } from "../../utils"

import * as S from './styles'

const Cart = () => {
  const itemsCart = useSelector((state: RootState) => state.cart.items)

  return (
    <S.Cart>
      <div className="shipping-note">
        <p>Free delivery from 100€ and free return in all orders</p>
      </div>
      <S.Purchase>
        <S.Container>
          {getUniqueItems(itemsCart).map(item => (
            <CardItemCart item={item} mode="full" key={item.product.id} />
          ))}
        </S.Container>
        <CartSummary />
      </S.Purchase>
    </S.Cart>
  )
}

export default Cart

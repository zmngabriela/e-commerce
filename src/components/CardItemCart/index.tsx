import { memo } from "react"
import { useSelector } from "react-redux"
import { LazyLoadImage } from "react-lazy-load-image-component"

import CartItemAction from "../CartItemAction"

import { RootState } from "../../store"
import { formatToEuro, getQuantity } from "../../utils/index"

import imgMock from '../../assets/images/chair.jpg'

import * as S from './styles'

type Props = {
  item: CartItem
  mode: 'aside' | 'full'
}

const CardItemCart = ({ item, mode }: Props) => {
  const itemsCart = useSelector((state: RootState) => state.cart.items)

  return (
    <S.ItemCart>
      <S.Content>
        <S.LinkToProduct to={`/shop/product/${item.product.id}`}>
          <LazyLoadImage
            src={imgMock}
            alt={item.product.title}
          />
        </S.LinkToProduct>
        <S.ProductInfo>
          <S.Info mode={mode}>
            <h3>{item.product.title}</h3>
            <div>{formatToEuro(item.product.price * getQuantity(itemsCart, item))}</div>
          </S.Info>
          {mode === 'full' && <CartItemAction item={item} mode={mode} quantity={getQuantity(itemsCart, item)} />}
        </S.ProductInfo>
      </S.Content>
      {mode === 'aside' && <CartItemAction  item={item} mode={mode} quantity={getQuantity(itemsCart, item)} />}
    </S.ItemCart>
  )
}

export default memo(CardItemCart)

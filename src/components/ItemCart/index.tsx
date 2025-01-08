import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { RootState } from "../../store"
import { formatToEuro } from "../../utils/index"

import fallbackImage from '../../assets/images/fallback.png';

import * as S from './styles'
import ActionItemCart from "../ActionItemCart"

type Props = {
  item: CartItem
  mode: 'aside' | 'full'
}

const ItemCartComponent = ({ item, mode }: Props) => {
  const itensCart = useSelector((state: RootState) => state.cart.items)
  const imgSrc = item.product.images[0] || fallbackImage

  const productQuantity = (product: CartItem) => {
    const productFiltered = itensCart.filter(item => item.product.id === product.product.id)
    .filter(item => item.selectedSize === product.selectedSize)
    return productFiltered.length
  }

  return (
    <S.ItemCart>
      <S.Content>
        <S.LinkToProduct to={`/shop/product/${item.product.id}`}>
          <LazyLoadImage
            src={imgSrc}
            alt={item.product.title}
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}/>
        </S.LinkToProduct>
        <S.ProductInfo>
          <S.Info mode={mode}>
            <h3>{item.product.title}</h3>
            <div>{formatToEuro(item.product.price * productQuantity(item))}</div>
          </S.Info>
          {mode === 'full' && <ActionItemCart item={item} mode={mode} productQuantity={productQuantity} />}
        </S.ProductInfo>
      </S.Content>
      {mode === 'aside' && <ActionItemCart  item={item} mode={mode} productQuantity={productQuantity} />}
    </S.ItemCart>
  )
}

export default memo(ItemCartComponent)

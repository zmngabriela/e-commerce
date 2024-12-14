import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../store"
import { addCart, removeCart, removeUnitCart, updateSize } from "../../store/reducers/cart"
import { formatToEuro } from "../../utils/index"

import remove from '../../assets/icons/close.png'
import fallbackImage from '../../assets/images/fallback-img.png';

import * as S from './styles'

type Props = {
  item: CartItem
}

const ItemCartComponent = ({ item }: Props) => {
  const dispatch = useDispatch()
  const itensCart = useSelector((state: RootState) => state.cart.items)
  const imgSrc = item.product.images[0] || fallbackImage

  const productQuantity = (product: CartItem) => {
    const productFiltered = itensCart.filter(item => item.product.id === product.product.id)
    .filter(item => item.selectedSize === product.selectedSize)
    return productFiltered.length
  }

  const handleChangeSize = (size: string) => {
      dispatch(updateSize({
        product: item.product,
        selectedSize: size
      }))
  }

  return (
    <S.Product>
      <S.LinkToProduct to={`/shop/${item.product.id}`}>
        <img
          src={imgSrc}
          alt={item.product.title}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}/>
      </S.LinkToProduct>
      <S.ProductInfo>
        <S.Info>
          <h3>{item.product.title}</h3>
          <div>{formatToEuro(item.product.price * productQuantity(item))}</div>
        </S.Info>
        <S.Action>
          <S.Quantity>
            <button onClick={() => (
              dispatch(addCart({
                product: item.product,
                selectedSize: item.selectedSize
              }))
            )}>
              +
            </button>
            <p>{productQuantity(item)}</p>
            <button onClick={() => dispatch(removeUnitCart(item))}>
              -
            </button>
          </S.Quantity>
          <select
            name="size"
            id="size"
            onChange={(e) => (handleChangeSize(e.target.value))}
            defaultValue={item.selectedSize}
          >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <button type="button">
            <img src={remove} onClick={() => dispatch(removeCart(item.product))} />
          </button>
        </S.Action>
      </S.ProductInfo>
    </S.Product>
  )
}

export default ItemCartComponent

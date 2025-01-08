import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { addCart, removeCart, removeUnitCart, updateSize } from "../../store/reducers/cart"

import remove from '../../assets/icons/close.png'

import * as S from './styles'

type Props = {
  item: CartItem,
  mode: 'aside' | 'full',
  productQuantity: (item: CartItem) => number
}

const Action = ({ item, mode, productQuantity }: Props) => {
  const dispatch = useDispatch()

  const handleChangeSize = useCallback((size: string) => {
    dispatch(updateSize({
      product: item.product,
      selectedSize: size
    }))
  }, [dispatch, item])

  return (
    <S.Action mode={mode}>
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
          <S.Size
            name="size"
            id="size"
            onChange={(e) => (handleChangeSize(e.target.value))}
            defaultValue={item.selectedSize}
          >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </S.Size>
          <button type="button">
            <img src={remove} onClick={() => dispatch(removeCart(item.product))} />
          </button>
        </S.Action>
  )
}

export default memo(Action)

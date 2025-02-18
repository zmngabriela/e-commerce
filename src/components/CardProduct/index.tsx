import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { addCart, setCartOpen } from '../../store/reducers/cart'
import { setAlert } from '../../store/reducers/alert'
import { favorite } from '../../store/reducers/favorites'

import { RootState } from '../../store'
import { formatToEuro } from "../../utils/index"

import cart from '../../assets/icons/cart.png';
import notFavorited from '../../assets/icons/favorite.png'
import favorited from '../../assets/icons/favorited.png'
import imgMock from '../../assets/images/chair.jpg'

import * as S from './styles'

export type Props = {
  item: Product
}

function CardProduct ({ item }: Props) {
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState('')
  const favorites = useSelector((state: RootState) => state.favorites.favoritesList)

  const isFav = favorites.some((fav) => fav.id === item.id)

  const addToCart = (item: CartItem) => {
    if (selectedSize) {
      dispatch(addCart({
        product: item.product,
        selectedSize: item.selectedSize
      }))
      dispatch(setCartOpen(true))
    } else {
      dispatch(setAlert({
        alertOpen: true,
        title: 'Cart',
        message: 'Please select a size.'
      }))
    }
  }

  return (
    <S.Product data-testid="product-item">
      <S.ProductInfo>
        <LazyLoadImage
          src={imgMock}
          alt={item.title}
          className='product-image'
        />
        <S.Action>
          <img
            src={isFav ? favorited : notFavorited}
            alt="Favorite"
            className="fav-icon"
            onClick={() => dispatch(favorite(item))}
          />
          <S.LinkStyle to={`/shop/product/${item.id}`}></S.LinkStyle>
          <S.Cart>
            <S.Sizes>
              {(item.sizes ?? ['s', 'm', 'l']).map(size => (
                <li
                  key={size}
                  className={selectedSize === size ? 'size-selected' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                    {size.toUpperCase()}
                </li>
              ))}
            </S.Sizes>
            <button
              onClick={() => addToCart({
                product: item,
                selectedSize: selectedSize
              })}>
              <img src={cart} alt="Add to cart" />
            </button>
          </S.Cart>
        </S.Action>
      </S.ProductInfo>
      <p className='title'>{item.title}</p>
      <p>{formatToEuro(item.price)}</p>
    </S.Product>
  )
}

export default CardProduct

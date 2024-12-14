import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../store'
import { addCart } from '../../store/reducers/cart'
import { favorite } from '../../store/reducers/favorites'
import { formatToEuro } from "../../utils/index"

import cart from '../../assets/icons/cart.png';
import notFavorited from '../../assets/icons/favorite.png'
import favorited from '../../assets/icons/favorited.png'
import fallbackImage from '../../assets/images/fallback-img.png';

import * as S from './styles'
import { useState } from 'react'

export type Props = {
  item: Product
}

function ProductCard ({ item }: Props) {
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState('')
  const favorites = useSelector((state: RootState) => state.favorites.favoritesList)

  const isFav = favorites.some((fav) => fav.id === item.id)
  const imgSrc = item.images[0] || fallbackImage

  const addToCart = (item: CartItem) => {
    if (selectedSize) {
      dispatch(addCart({
        product: item.product,
        selectedSize: item.selectedSize
      }))
    } else {
      alert('Please select the size')
    }
  }

  return (
    <S.Product>
      <S.ProductInfo>
          <img
            src={imgSrc}
            alt=""
            className='product-image'
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
        <S.Action>
          <img
            src={isFav ? favorited : notFavorited}
            alt=""
            className="fav-icon"
            onClick={() => dispatch(favorite(item))}
          />
          <S.LinkStyle to={`/shop/${item.id}`}></S.LinkStyle>
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
              <img src={cart} alt="" />
            </button>
          </S.Cart>
        </S.Action>
      </S.ProductInfo>
      <p className='title'>{item.title}</p>
      <p>{formatToEuro(item.price)}</p>
    </S.Product>
  )
}

export default ProductCard

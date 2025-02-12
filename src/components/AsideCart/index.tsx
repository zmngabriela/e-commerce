import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import CardItemCart from '../../components/CardItemCart'
import CartSummary from '../../components/CartSummary'

import { setCartOpen } from '../../store/reducers/cart'
import { RootState } from '../../store'
import { getUniqueItems } from '../../utils'

import close from '../../assets/icons/close.png'

import * as S from './styles'

const AsideCart = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const itemsCart = useSelector((state: RootState) => state.cart.items)
  const { cartOpen } = useSelector((state: RootState) => state.cart)
  const cartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target as Node)) {
        dispatch(setCartOpen(false))
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (cartOpen && location.pathname === '/cart'|| location.pathname === '/checkout') {
    dispatch(setCartOpen(false))
  }

  return (
    <S.CartAside
      $cartOpen={cartOpen}
      ref={cartRef}
    >
      <img src={close} alt="Close" className='close' onClick={() => dispatch(setCartOpen(false))} />
      <h3 className='title'>Cart</h3>
      <div className="shipping-note">
        <p>Free delivery from 100€ and free return in all orders</p>
      </div>
      <S.Purchase>
        <S.Container>
          {getUniqueItems(itemsCart).map(item => (
            <CardItemCart item={item} mode="aside" key={item.product.id} />
          ))}
        </S.Container>
        <CartSummary />
      </S.Purchase>
    </S.CartAside>
  )
}

export default AsideCart

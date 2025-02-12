import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"

import { formatToEuro, getTotalPrice } from "../../utils/index"
import { setTerm } from "../../store/reducers/filter"
import { RootState } from "../../store"

import visa from '../../assets/icons/visa.png'
import mastercard from '../../assets/icons/mastercard.png'
import applePay from '../../assets/icons/apple-pay.png'
import paypal from '../../assets/icons/paypal.png'

import { Btn, Input } from "../../styles"
import * as S from './styles'
import { setCartOpen } from "../../store/reducers/cart"

const CartSummary = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemsCart = useSelector((state: RootState) => state.cart.items)
  const [hasVoucher, setHasVoucher] = useState(false)

  const shippingCost = 10
  const totalPrice = getTotalPrice(itemsCart)
  const freeShipping = totalPrice > 100

  const returnShop = () => {
    navigate('/shop')
    dispatch(setTerm(''))
    dispatch(setCartOpen(false))
  }

  return (
    <S.CartSumary>
      <S.Price>
        <div className="price-calc">
          <div>
            <p>Subtotal</p>
            <p>{formatToEuro(totalPrice)}</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>{freeShipping ? (
                <div>
                  <p className='line-through'>{formatToEuro(shippingCost)}</p>
                  <p>{formatToEuro(0)}</p>
                </div>
              ) : formatToEuro(shippingCost)}
            </p>
          </div>
        </div>
        <div>
          <p><span>Total</span> IVA Incl.</p>
          <p><span>{formatToEuro(freeShipping ? totalPrice : totalPrice + shippingCost)}</span></p>
        </div>
      </S.Price>
      <S.Checkout>
        <button
          type="button"
          className="voucher"
          onClick={() => setHasVoucher(!hasVoucher)}
        >
          + Do you have a discount voucher?
        </button>
        {hasVoucher ? (
          <Input
            type="text"
            placeholder="Enter the voucher code"
          />
        ) : ''}
        <Btn as={Link} to={'/checkout'} className="checkout">
          Checkout
        </Btn>
        <Btn onClick={returnShop}>
          Continue shopping
        </Btn>
      </S.Checkout>
      <div className="payment-methods">
        <img src={visa} alt="Visa" />
        <img src={mastercard} alt="Mastercard" />
        <img src={paypal} alt="Paypal" />
        <img src={applePay} alt="Apple Pay" />
      </div>
    </S.CartSumary>
  )
}

export default CartSummary

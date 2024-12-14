import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import ItemCartComponent from "../../components/ItemCart"

import { RootState } from "../../store"
import { formatToEuro } from "../../utils/index"

import visa from '../../assets/icons/visa.png'
import mastercard from '../../assets/icons/mastercard.png'
import applePay from '../../assets/icons/apple-pay.png'
import paypal from '../../assets/icons/paypal.png'

import { Btn, Input } from "../../styles"
import * as S from './styles'

const Cart = () => {
  const itensCart = useSelector((state: RootState) => state.cart.items)
  const [hasVoucher, setHasVoucher] = useState(false)

  const totalPrice = itensCart.reduce((acc, item) => {
    acc += item.product.price
    return acc
  }, 0)

  const itemUnique = itensCart.reduce((total: CartItem[], cartItem) => {
    const productFound = total.find((item: CartItem) => item.product.id === cartItem.product.id)

    if (!productFound) {
      total.push(cartItem)
    } else {
      if (productFound.selectedSize !== cartItem.selectedSize) {
        total.push(cartItem)
      }
    }
    return total;
  }, [])

  return (
    <>
      <div className="shipping-note">
        <p>Free delivery from 100€ and free return in all orders</p>
      </div>
      <S.Purchase>
        <S.Cart>
          {itemUnique.map(item => (
            <ItemCartComponent item={item} key={item.product.id} />
          ))}
        </S.Cart>
        <S.Cart>
          <S.Price>
            <div className="price-calc">
              <div>
                <p>Subtotal</p>
                <p>{formatToEuro(totalPrice)}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p>{totalPrice > 100 ? (
                    <div>
                      <p className='line-through'>{formatToEuro(10)}</p>
                      <p>{formatToEuro(0)}</p>
                    </div>
                  ) : formatToEuro(10)}
                </p>
              </div>
            </div>
            <div>
              <p><span>Total</span> IVA Incl.</p>
              <p><span>{formatToEuro(totalPrice > 100 ? totalPrice : totalPrice + 10)}</span></p>
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
            <Btn as={Link} to={'/checkout'}>
              Checkout
            </Btn>
          </S.Checkout>
          <div className="payment-methods">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={paypal} alt="" />
            <img src={applePay} alt="" />
          </div>
        </S.Cart>
      </S.Purchase>
    </>
  )
}

export default Cart

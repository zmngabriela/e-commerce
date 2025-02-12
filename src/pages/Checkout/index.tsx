import { useSelector } from 'react-redux'

import FormCheckout from '../../components/FormCheckout'

import { RootState } from '../../store'
import { formatToEuro, getQuantity, getTotalPrice, getUniqueItems } from '../../utils'

import secure from '../../assets/icons/secure.png'
import imgMock from '../../assets/images/chair.jpg'

import { Container } from '../../styles'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const itemsCart = useSelector((state: RootState) => state.cart.items)
  const totalPrice = getTotalPrice(itemsCart)

  if (itemsCart.length === 0) {
    navigate('/')
  }

  return (
    <Container>
      <S.Checkout>
        <div className='secure'>
          <img src={secure} alt="" />
          <p>Secure purchase</p>
        </div>
        <S.CheckoutInfo>
          <S.PurchaseInfo>
            {getUniqueItems(itemsCart).map(item => (
              <S.ProductInfo key={item.product.id}>
                <img src={imgMock} alt={item.product.title} />
                <div>
                  <S.Row>
                    <p>{item.product.title}</p>
                    <p>{formatToEuro(item.product.price * getQuantity(itemsCart, item))}</p>
                  </S.Row>
                  <S.Row>
                    <p>Size</p>
                    <p>{item.selectedSize}</p>
                  </S.Row>
                  <S.Row>
                    <p>Color</p>
                    <p>Black</p>
                  </S.Row>
                  <S.Row>
                    <p>Quantity</p>
                    <p>{getQuantity(itemsCart, item)}</p>
                  </S.Row>
                </div>
              </S.ProductInfo>
            ))}
            <S.PriceInfo>
              <S.PriceCalc>
                <S.Row>
                  <p>Subtotal</p>
                  <p>{formatToEuro(totalPrice)}</p>
                </S.Row>
                <S.Row>
                  <p>Shipping</p>
                  <p>{totalPrice > 100 ? (
                      <S.Row>
                        <p className='line-through'>{formatToEuro(10)}</p>
                        <p>{formatToEuro(0)}</p>
                      </S.Row>
                    ) : formatToEuro(10)}
                  </p>
                </S.Row>
              </S.PriceCalc>
              <div>
                <p><span>Total</span> IVA Incl.</p>
                <p><span>{formatToEuro(totalPrice > 100 ? totalPrice : totalPrice + 10)}</span></p>
              </div>
            </S.PriceInfo>
          </S.PurchaseInfo>
          <FormCheckout />
        </S.CheckoutInfo>
      </S.Checkout>
    </Container>
  )
}

export default Checkout

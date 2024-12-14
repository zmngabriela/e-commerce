import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootState } from '../../store'
import { formatToEuro, getTotalPrice } from '../../utils'
import { usePostOrderMutation } from '../../services/api'

import secure from '../../assets/icons/secure.png'
import applePay from '../../assets/icons/apple-pay.png'
import paypal from '../../assets/icons/paypal.png'

import { Btn, Container, Input } from '../../styles'
import * as S from './styles'

const Checkout = () => {
  const itensCart = useSelector((state: RootState) => state.cart.items)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [postOrder, { data, isSuccess, isLoading }] = usePostOrderMutation()
  const totalPrice = getTotalPrice(itensCart)

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

  const productQuantity = (product: CartItem) => {
    const productFiltered = itensCart.filter(item => item.product.id === product.product.id)
    .filter(item => item.selectedSize === product.selectedSize)
    return productFiltered.length
  }

  const form = useFormik({
    initialValues: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        document: '',
        nameShipping: '',
        lastNameShipping: '',
        streetNumber: '',
        postalCode: '',
        city: '',
        productId: 0,
        price: 0,
        size: '',
        method: '',
        cardDisplayName: '',
        cardDisplayNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cardCode: '',
        documentCardOwner: ''
      },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Please write your name.')
        .required('This field is required.'),
      lastName: Yup.string()
        .min(2, 'Please write your last name.')
        .required('This field is required.'),
      email: Yup.string()
        .email('Invalid email.')
        .required('This field is required.'),
      phone: Yup.string()
        .min(16, 'Please enter your phone number.')
        .max(61, 'The field needs to have 10 caracters')
        .required('This field is required.'),
      document: Yup.string()
        .min(11, 'The field needs to have 9 caracters.')
        .max(11, 'The field needs to have 9 caracters.')
        .required('This field is required.'),
      nameShipping: Yup.string()
        .min(2, 'Please write the name of the recipient.')
        .required('This field is required.'),
      lastNameShipping: Yup.string()
        .min(2, 'Please write the last name of the recipient.')
        .required('This field is required.'),
      streetNumber: Yup.string()
        .min(2, 'Please write the delivery address and number.')
        .required('This field is required.'),
      postalCode: Yup.string()
        .min(6, 'The field needs to have 5 caracters.')
        .max(6, 'The field needs to have 5 caracters.')
        .required('This field is required.'),
      city: Yup.string()
        .min(2, 'Please write the city name.')
        .required('This field is required.'),
      method: Yup.string().required('This field is required.'),
      cardDisplayName: Yup.string()
        .min(2, 'Please the cards displayed name.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      cardDisplayNumber: Yup.string()
        .min(10, 'The field needs to have 16 caracters.')
        .max(10, 'The field needs to have 16 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      expirationMonth: Yup.string()
        .min(2, 'The field needs to have 2 caracters.')
        .max(2, 'The field needs to have 2 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      expirationYear: Yup.string()
        .min(2, 'The field needs to have 2 caracters.')
        .max(2, 'The field needs to have 2 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      cardCode: Yup.string()
        .min(3, 'The field needs to have 3 caracters.')
        .max(3, 'The field needs to have 3 caracters.').when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      documentCardOwner: Yup.string()
        .min(10, 'The field needs to have 9 caracters.')
        .max(10, 'The field needs to have 9 caracters.')
        .required('This field is required.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
    }),
    onSubmit: (values) => {
      postOrder({
        user: {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          document: values.document,
        },
        shipping: {
          name: values.nameShipping,
          lastName: values.lastNameShipping,
          streetNumber: values.streetNumber,
          postalCode: values.postalCode,
          city: values.city,
        },
        items: itensCart.map((item) => ({
          productId: item.product.id,
          price: item.product.price,
          size: item.selectedSize
        })),
        payment: {
          method: values.method,
          cardDisplayName: values.cardDisplayName,
          cardDisplayNumber: values.cardDisplayNumber,
          cardCode: values.cardCode,
          documentCardOwner: values.documentCardOwner,
          expiration: {
            month: Number(values.expirationMonth),
            year: Number(values.expirationYear)
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid

    return hasError
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
            {itemUnique.map(item => (
              <S.ProductInfo key={item.product.id}>
                <img src={item.product.images[0]} alt="" />
                <div>
                  <S.Row>
                    <p>{item.product.title}</p>
                    <p>{formatToEuro(item.product.price * productQuantity(item))}</p>
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
                    <p>{productQuantity(item)}</p>
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
          <S.Form onSubmit={form.handleSubmit}>
            <S.FormContainer>
              <p>1. Contact information</p>
              <S.Row>
                <Input
                  className={checkInputHasError('name') ? 'error' : ''}
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Name'
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <Input
                  className={checkInputHasError('lastName') ? 'error' : ''}
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder='Last name'
                  value={form.values.lastName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.Row>
              <Input
                className={checkInputHasError('email') ? 'error' : ''}
                type="email"
                id="email"
                name="email"
                placeholder='E-mail'
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <S.Row>
                <S.InputMaskStyle
                  className={checkInputHasError('phone') ? 'error' : ''}
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder='Phone'
                  value={form.values.phone}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="(99) 9999 99 999"
                />
                <S.InputMaskStyle
                  className={checkInputHasError('document') ? 'error' : ''}
                  type="text"
                  id="document"
                  name="document"
                  placeholder='ID document'
                  value={form.values.document}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9-9999999-9"
                />
              </S.Row>
            </S.FormContainer>
            <S.FormContainer>
              <p>2. Shipping</p>
              <S.Row>
                <Input
                  className={checkInputHasError('nameShipping') ? 'error' : ''}
                  type="text"
                  id="nameShipping"
                  name="nameShipping"
                  placeholder='Name'
                  value={form.values.nameShipping}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <Input
                  className={checkInputHasError('lastNameShipping') ? 'error' : ''}
                  type="text"
                  id="lastNameShipping"
                  name="lastNameShipping"
                  placeholder='Last name'
                  value={form.values.lastNameShipping}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.Row>
              <Input
                className={checkInputHasError('streetNumber') ? 'error' : ''}
                type="text"
                id="streetNumber"
                name="streetNumber"
                placeholder='Street and number'
                value={form.values.streetNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <S.Row>
                <S.InputMaskStyle
                  className={checkInputHasError('postalCode') ? 'error' : ''}
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder='Postal code'
                  value={form.values.postalCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99-999"
                />
                <Input
                  className={checkInputHasError('city') ? 'error' : ''}
                  type="text"
                  id="city"
                  name="city"
                  placeholder='City'
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.Row>
            </S.FormContainer>
            <S.Payment>
              <p>3. Payment</p>
              <div className='payment-container'>
                <p>Payment methods</p>
                <S.PaymentMethods>
                    <div className='radio'>
                      <input
                        type="radio"
                        id="cardRadio"
                        name="payment-methods"
                        value={form.values.method}
                        onClick={() => setPaymentMethod('card')}
                      />
                      <label htmlFor="cardRadio">Card</label>
                    </div>
                    {paymentMethod === 'card' && (
                      <S.PaymentMethodOpen>
                        <Input
                          className={checkInputHasError('cardDisplayName') ? 'error' : ''}
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          placeholder='Card name'
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <S.InputMaskStyle
                          className={checkInputHasError('cardDisplayNumber') ? 'error' : ''}
                          type="text"
                          id="cardDisplayNumber"
                          name="cardDisplayNumber"
                          placeholder='Card number'
                          value={form.values.cardDisplayNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="9999 9999 9999 9999"
                        />
                        <S.Row>
                          <S.Row>
                            <S.InputMaskStyle
                              className={checkInputHasError('expirationMonth') ? 'error' : ''}
                              type="string"
                              id="expirationMonth"
                              name="expirationMonth"
                              placeholder='Month'
                              value={form.values.expirationMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="99"
                            />
                            <S.InputMaskStyle
                              className={checkInputHasError('expirationYear') ? 'error' : ''}
                              type="string"
                              id="expirationYear"
                              name="expirationYear"
                              placeholder='Year'
                              value={form.values.expirationYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="99"
                            />
                          </S.Row>
                          <S.InputMaskStyle
                            className={checkInputHasError('cardCode') ? 'error' : ''}
                            type="string"
                            id="cardCode"
                            name="cardCode"
                            placeholder='CVV'
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            mask="999"
                          />
                        </S.Row>
                        <S.InputMaskStyle
                          className={checkInputHasError('documentCardOwner') ? 'error' : ''}
                          type="text"
                          id="documentCardOwner"
                          name="documentCardOwner"
                          placeholder='ID Document of the card owner'
                          value={form.values.documentCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="9-9999999-9"
                        />
                      </S.PaymentMethodOpen>
                    )}
                    <div className='radio'>
                      <input
                        type="radio"
                        id="applePlayRadio"
                        name="payment-methods"
                        value="applePlayRadio"
                        onClick={() => setPaymentMethod('applePlay')}
                      />
                      <label htmlFor="applePlayRadio">apple Play</label>
                    </div>
                    {paymentMethod === 'applePlay' && (
                      <S.PaymentMethodOpen>
                        <Btn className='apple-pay' type="submit">
                          <img src={applePay} alt="" />
                        </Btn>
                      </S.PaymentMethodOpen>
                    )}
                    <div className='radio'>
                      <input
                        type="radio"
                        id="paypalRadio"
                        name="payment-methods"
                        value="paypalRadio"
                        onClick={() => setPaymentMethod('paypal')}
                      />
                      <label htmlFor="paypalRadio">PayPal</label>
                    </div>
                    {paymentMethod === 'paypal' && (
                      <S.PaymentMethodOpen>
                        <Btn className='paypal' type="submit">
                          <img src={paypal} alt="" />
                        </Btn>
                      </S.PaymentMethodOpen>
                    )}
                </S.PaymentMethods>
              </div>
            </S.Payment>
            {paymentMethod === 'card' && (
              <Btn
                type="submit"
                onClick={() => form.handleSubmit}
                disabled={isLoading}
              >
                Pay
              </Btn>
            )}
          </S.Form>
        </S.CheckoutInfo>
      </S.Checkout>
    </Container>
  )
}

export default Checkout

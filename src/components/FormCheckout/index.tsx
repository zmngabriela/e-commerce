import { useState } from 'react'

import { useCheckoutForm } from '../../hooks/useCheckoutForm';

import paypal from '../../assets/icons/paypal.png'
import applePay from '../../assets/icons/apple-pay.png'

import * as S from './styles'
import { Btn, Input } from '../../styles';
import { Row } from '../../pages/Checkout/styles';

const FormCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const form = useCheckoutForm(paymentMethod)

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <S.FormContainer>
        <p>1. Contact information</p>
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
          className={checkInputHasError('email') ? 'error' : ''}
          type="email"
          id="email"
          name="email"
          placeholder='E-mail'
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Row>
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
        </Row>
      </S.FormContainer>
      <S.FormContainer>
        <p>2. Shipping</p>
        <Row>
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
        </Row>
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
        <Row>
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
        </Row>
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
                  name="method"
                  value="cardRadio"
                  checked={form.values.method === 'card'}
                  onChange={() => {
                    setPaymentMethod('card')
                    form.setFieldValue('method', 'card')
                  }}
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
                  <Row className='three-inputs'>
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
                  </Row>
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
                  name="method"
                  value="applePlayRadio"
                  checked={form.values.method === 'applePlay'}
                  onChange={() => {
                    setPaymentMethod('applePlay')
                    form.setFieldValue('method', 'applePlay')
                  }}
                />
                <label htmlFor="applePlayRadio">apple Play</label>
              </div>
              {paymentMethod === 'applePlay' && (
                <S.PaymentMethodOpen>
                  <Btn className='apple-pay' type="submit">
                    <img src={applePay} alt="Apple Pay" />
                  </Btn>
                </S.PaymentMethodOpen>
              )}
              <div className='radio'>
                <input
                  type="radio"
                  id="paypalRadio"
                  name="method"
                  value="paypalRadio"
                  checked={form.values.method === 'paypal'}
                  onChange={() => {
                    setPaymentMethod('paypal')
                    form.setFieldValue('method', 'paypal')
                  }}
                />
                <label htmlFor="paypalRadio">PayPal</label>
              </div>
              {paymentMethod === 'paypal' && (
                <S.PaymentMethodOpen>
                  <Btn className='paypal' type="submit">
                    <img src={paypal} alt="Paypal" />
                  </Btn>
                </S.PaymentMethodOpen>
              )}
          </S.PaymentMethods>
        </div>
      </S.Payment>
      {paymentMethod === 'card' && (
        <Btn
          type="submit"
        >
          Pay
        </Btn>
      )}
    </S.Form>
  )
}

export default FormCheckout

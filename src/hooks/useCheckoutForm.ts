import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import * as Yup from 'yup'

import { useGetUserSessionQuery, useGetUsersQuery } from "../services/api"

import { RootState } from "../store"
import { useAppDispatch } from "../store/hooks"

import { createOrder } from "../store/reducers/ordersMock"
import { setAlert } from "../store/reducers/alert"
import { cleanCart } from "../store/reducers/cart"

import { getQuantity } from "../utils"

export const useCheckoutForm = (paymentMethod: string) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const itemsCart = useSelector((state: RootState) => state.cart.items)
  const { error } = useSelector((state: RootState) => state.orders)

  const {data} = useGetUserSessionQuery()
  const { data: users } = useGetUsersQuery()
  const user = users?.find(u => u.id === data?.id)

  return useFormik({
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
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
      quantity: 0,
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
      email: Yup.string()
        .email('Invalid email.')
        .required('This field is required.'),
      phone: Yup.string()
        .transform(value => value.replace(/[^\d]/g, ''))
        .min(11, 'Please enter your phone number.')
        .max(11, 'The field requires 11 caracters')
        .required('This field is required.'),
      document: Yup.string()
        .transform(value => value.replace(/[^\d]/g, ''))
        .min(9, 'The field requires 9 caracters.')
        .max(9, 'The field requires 9 caracters.')
        .required('This field is required.'),
      nameShipping: Yup.string()
        .min(2, 'Please write the name of the recipient.')
        .required('This field is required.'),
      lastNameShipping: Yup.string()
        .min(2, 'Please write the last name of the recipient.')
        .required('This field is required.'),
      streetNumber: Yup.string()
        .min(5, 'Please write the delivery address and number.')
        .required('This field is required.'),
      postalCode: Yup.string()
        .transform(value => value.replace(/[^\d]/g, ''))
        .min(5, 'The field requires 5 caracters.')
        .max(5, 'The field requires 5 caracters.')
        .required('This field is required.'),
      city: Yup.string()
        .min(2, 'Please write the city name.')
        .required('This field is required.'),
      method: Yup.string().required('This field is required.'),
      cardDisplayName: Yup.string()
        .min(2, 'Please write the cards displayed name.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      cardDisplayNumber: Yup.string()
        .transform(value => value.replace(/[^\d]/g, ''))
        .min(16, 'The field requires 16 caracters.')
        .max(16, 'The field requires 16 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      expirationMonth: Yup.string()
        .min(2, 'The field requires 2 caracters.')
        .max(2, 'The field requires 2 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      expirationYear: Yup.string()
        .min(2, 'The field requires 2 caracters.')
        .max(2, 'The field requires 2 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      cardCode: Yup.string()
        .min(3, 'The field requires 3 caracters.')
        .max(3, 'The field requires 3 caracters.').when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
      documentCardOwner: Yup.string()
        .transform(value => value.replace(/[^\d]/g, ''))
        .min(9, 'The field requires 9 caracters.')
        .max(9, 'The field requires 9 caracters.')
        .when((values, schema) =>
        paymentMethod === 'card' ? schema.required('This field is required.') : schema
      ),
    }),
    onSubmit: async (values) => {
      try {
        const newOrder = {
          user: {
            name: values.name,
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
          items: itemsCart.map((item) => ({
            productId: item.product.id,
            price: item.product.price,
            size: item.selectedSize,
            quantity: getQuantity(itemsCart, item)
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
        }
        const response = await dispatch(createOrder(newOrder)).unwrap()
        if (response) {
          dispatch(cleanCart())
          navigate(`/order-success/${response.id}`)
        }
      } catch (err) {
        dispatch(setAlert({
          alertOpen: true,
          title: 'Order',
          message: `Error to create order${error ? `: ${error}` : '.'}`
        }))
      }
    }
  })
}

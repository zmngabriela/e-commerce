import { useLocation, useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import * as Yup from 'yup'

import { useAppDispatch } from "../store/hooks"
import { useLoginUserMutation } from "../services/api"

import { setAlert } from "../store/reducers/alert"
import { setCredentials } from "../store/reducers/auth"

export const useAuthForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [loginUser] = useLoginUserMutation()

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

  return useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email.')
        .required('This field is required.'),
      password: Yup.string()
        .required('No password provided.')
        .min(5, 'Password is too short - should have 5 characters minimum.')
        .matches(passwordRules, 'Password requires minimum 5 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.')
    }),
    onSubmit: async (values) => {
      console.log("Starting form submit")
      console.log("Form values:", values)
      try {
        const response = await loginUser(values).unwrap()
        dispatch(setCredentials(response))
        const from = location.state?.from || '/profile'
        navigate(from)
      } catch (error) {
        if (error && typeof error === 'object' && 'data' in error && 'status' in error) {
          console.error('Login error:', error)
          if (!error.status) {
            dispatch(setAlert({
              alertOpen: true,
              title: 'Login',
              message: 'No server response.'
            }))
          } else if (error.status === 401) {
            dispatch(setAlert({
              alertOpen: true,
              title: 'Login',
              message: 'Incorrect username or password.'
            }))
          } else {
            dispatch(setAlert({
              alertOpen: true,
              title: 'Login',
              message: 'An unexpected error occurred.'
            }))
          }
        } else {
          console.error('Unexpected error:', error)
          dispatch(setAlert({
            alertOpen: true,
            title: 'Login',
            message: 'Authentication failed.'
          }))
        }
      }
    }
  })
}

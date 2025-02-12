import { useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import * as Yup from 'yup'

import { useAddUserMutation } from "../services/api"
import { useAppDispatch } from "../store/hooks"
import { setAlert } from "../store/reducers/alert"
import { defaultAvatar } from "../utils"

export const useSignupForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [addUser, { isLoading, error, isError }] = useAddUserMutation()

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

  return useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: defaultAvatar
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Please write your full name')
        .required('This field is required.'),
      email: Yup.string()
        .email('Invalid email.')
        .required('This field is required.'),
      password: Yup.string()
        .required('No password provided.')
        .min(5, 'Password is too short - should have 8 characters minimum.')
        .matches(passwordRules, 'Password requires minimum 5 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.'),
      confirmPassword: Yup.string()
        .required('This field is required.')
        .oneOf([Yup.ref('password')], 'Passwords do not match.')
    }),
    onSubmit: async (values) => {
      console.log("Starting form submit")
      console.log("Form values:", values)
      try {
        const { confirmPassword, ...valuesRequest } = values
        const response = await addUser(valuesRequest).unwrap()
        if (response) {
          dispatch(setAlert({
            alertOpen: true,
            title: 'Sign up',
            message: 'Your account was created successfully. Please log in.'
          }))
          navigate('/auth')
        }
      } catch (error) {
        dispatch(setAlert({
          alertOpen: true,
          title: 'Sign up',
          message: 'There was a error to create the profile. Please refresh the page and try again.'
        }))
      }
    }
  })
}

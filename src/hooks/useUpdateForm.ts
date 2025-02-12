import { useFormik } from "formik"
import * as Yup from 'yup'

import { useAppDispatch } from "../store/hooks"
import { useGetUserSessionQuery, useGetUsersQuery, useUpdateUserMutation } from "../services/api"

import { setAlert } from "../store/reducers/alert"

export const useUpdateForm = () => {
  const dispatch = useAppDispatch()

  const [updateUser] = useUpdateUserMutation()

  const {data: user} = useGetUserSessionQuery()
  const userEmail = useGetUsersQuery().data?.find(u => u.id === user?.id)?.email

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

  return useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name || '',
      email: userEmail || '',
      password: '',
      avatar: user?.avatar || ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Please write your full name'),
      password: Yup.string()
        .min(5, 'Password is too short - should have 5 characters minimum.')
        .matches(passwordRules, 'Password requires minimum 5 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.')
    }),
    onSubmit: async (values) => {
      console.log("Starting form submit")
      console.log("Form values:", values)
      try {
        let changes = {}
        if (values.name !== user?.name) {
          const name = values.name
          changes = { ...changes, name: name }
        } if (values.password) {
          const password = values.password
          changes = { ...changes, password: password }
        } else if (values.avatar !== user?.avatar) {
          const avatar = values.avatar
          changes = { ...changes, avatar: avatar }
        }
        console.log(changes)
        const id = user?.id
        const response = await updateUser({ id, changes })
        console.log('Form response:', response)
      } catch (error) {
        if (error && typeof error === 'object' && 'status' in error && 'data' in error) {
          if (!error.data) {
            dispatch(setAlert({
              alertOpen: true,
              title: 'Update user',
              message: 'No server response.'
            }))
          } else if (error.status === 413) {
            dispatch(setAlert({
              alertOpen: true,
              title: 'Update user',
              message: 'Please select a file with a smaller size.'
            }))
          }
        } else {
          dispatch(setAlert({
            alertOpen: true,
            title: 'Update user',
            message: 'Update failed.'
          }))
        }
      }
    }
  })
}

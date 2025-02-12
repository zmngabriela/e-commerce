import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { BarLoader } from "react-spinners"

import { useAddUserMutation } from "../../services/api"
import { useSignupForm } from "../../hooks/useSignupForm"

import { Btn, colors, Container, ErrorText, Input } from "../../styles"
import { Form } from "../Auth/styles"

const Signup = () => {
  const navigate = useNavigate()

  const [addUser, { isLoading, error, isError }] = useAddUserMutation()

  const inputRef = useRef<HTMLInputElement>(null)

  const form = useSignupForm()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  if (isError) return (
    <Container className="central narrow marginTop">
      <ErrorText>Something went wrong while creating the profile.</ErrorText>
      {error && (
        <>
          <ErrorText>
            Error details:
            {'status' in error && <span> {error.status} </span>}
            {'message' in error && <span>{error.message}</span>}
          </ErrorText>
          <Btn type="button" onClick={() => navigate('/auth')} style={{ marginTop: '40px' }}>
            Return to login page
          </Btn>
        </>
      )}
    </Container>
  )
  if (isLoading) return (
    <Container className="central narrow">
      <BarLoader color={colors.black} height={2} cssOverride={{marginTop: '80px'}} />
    </Container>
  )

  return (
    <Container className="central narrow marginTop">
      <p style={{ textTransform: 'uppercase', fontWeight: '700' }}>Create profile</p>
      <Form onSubmit={form.handleSubmit}>
        <Input
          ref={inputRef}
          className={checkInputHasError('name') ? 'error' : ''}
          type="text"
          placeholder="Full name"
          id="name"
          name="name"
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
        <Input
            className={checkInputHasError('password') ? 'error' : ''}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            style={{ marginTop: '16px' }}
        />
        <Input
            className={checkInputHasError('confirmPassword') ? 'error' : ''}
            type="password"
            placeholder="Confirm the password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.values.confirmPassword}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            style={{ marginTop: '16px' }}
        />
        <div>
          <input type="checkbox" name="agreement" id="terms-conditions" />
          <label htmlFor="terms-conditions">I have read and agree to the Terms and Conditions.</label>
        </div>
        <div>
          <input type="checkbox" name="agreement" id="email-agreement" />
          <label htmlFor="email-agreement">I agree to receive emails about promotions and special offers.</label>
        </div>
        <Btn type="submit" disabled={isLoading}>
          Sign In
        </Btn>
      </Form>
    </Container>
  )
}

export default Signup

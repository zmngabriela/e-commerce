import { useEffect, useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import { useAuthForm } from "../../hooks/useAuthForm"
import { useGetUsersQuery } from "../../services/api"

import { Btn, Container, Input } from "../../styles"
import * as S from './styles'

const Auth = () => {
  const navigate = useNavigate()

  const { data: users } = useGetUsersQuery()

  const [hasProfile, setHasProfile] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const form = useAuthForm()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const HandleProfileCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const userFound = users?.find(i => i.email === form.values.email)
    if (userFound) {
      setHasProfile(true)
    } else {
      navigate('/auth/signup')
    }
  }

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  return (
    <Container className="central narrow marginTop">
      <p style={{ textTransform: 'uppercase', fontWeight: '700' }}>
        {hasProfile ? 'Login' : 'Login or sign up'}
      </p>
      <S.Form onSubmit={hasProfile ? form.handleSubmit : HandleProfileCheck}>
        <Input
          ref={inputRef}
          className={checkInputHasError('email') ? 'error' : ''}
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {hasProfile && (
          <Input
            className={checkInputHasError('password') ? 'error' : ''}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        )}
        <Btn type="submit">
          {hasProfile ? 'Log in' : 'Continue'}
        </Btn>
        <p>
          We will process your personal data in accordance with our
          <Link to="/"> privacy policy.</Link>
        </p>
      </S.Form>
    </Container>
  )
}

export default Auth

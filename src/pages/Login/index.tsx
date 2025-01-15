import { Link } from "react-router-dom"


import { Btn, Container, Input } from "../../styles"
import * as S from './styles'

const Login = () => {
  return (
    <Container className="central narrow marginTop">
      <p style={{ textTransform: 'uppercase', fontWeight: '700' }}>Login or sign up</p>
      <S.Login>
        <Input type="text" placeholder="Email address" />
        <div>
          <input type="checkbox" name="stay-logged" id="stay-logge" />
          <label htmlFor="stay-logge">Keep me logged in.</label>
        </div>
        <Btn>
          Continue
        </Btn>
        <p>
          We will process your personal data in accordance with our
          <Link to="/"> privacy policy.</Link>
        </p>
      </S.Login>
    </Container>
  )
}

export default Login

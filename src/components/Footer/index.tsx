import { Link } from 'react-router-dom'

import cloth from '../../assets/images/cloth.png'
import arrowBlack from '../../assets/icons/arrow-black.png'

import { Container, Input } from '../../styles'
import * as S from './styles'

const Footer = () => {
  return (
    <Container>
      <S.Footer>
        <S.Links>
          <ul>
            <li>
              <Link to={'/shop'}>
                Shop
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Experience
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Jobs
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Stores
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                About me
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={'/'}>
                Privacity policy
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Contact us
              </Link>
            </li>
          </ul>
          <S.Newsletter>
            <h3>Subscribe to Newsletter</h3>
            <p>Stay updated of our last offers and news.</p>
            <S.Input>
              <Input
                type="email"
                placeholder='Enter your email'
                className="input-arrow"
              />
              <button type='submit' onClick={() => alert('You have been added to Newsletter successfully.')}>
                <img src={arrowBlack} alt="" />
              </button>
            </S.Input>
            <p className='subtitle'>
              I confirm I have read and accept the <a href="#">Terms and conditions</a> and the <a href="#">Privacity Policy</a>.
            </p>
          </S.Newsletter>
        </S.Links>
        <S.Image>
          <img src={cloth} alt='' className='footer-concept' />
        </S.Image>
      </S.Footer>
    </Container>
  )
}

export default Footer

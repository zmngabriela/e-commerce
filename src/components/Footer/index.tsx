import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setAlert } from '../../store/reducers/alert'

import image from '../../assets/images/footer-image.jpeg'
import arrowBlack from '../../assets/icons/arrow-black.png'

import { Container, Input } from '../../styles'
import * as S from './styles'

const Footer = () => {
  const dispatch = useDispatch()

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
              <button type='submit' onClick={() => dispatch(setAlert({
                alertOpen: true,
                title: 'Newsletter',
                message: 'You have been added to the newsletter. Please check your email.'
              }))}>
                <img src={arrowBlack} alt="" />
              </button>
            </S.Input>
            <p className='subtitle'>
              I confirm I have read and accept the <a href="#">Terms and conditions</a> and the <a href="#">Privacity Policy</a>.
            </p>
          </S.Newsletter>
        </S.Links>
        <S.Image>
          <img src={image} alt='' className='footer-concept' />
        </S.Image>
      </S.Footer>
    </Container>
  )
}

export default Footer

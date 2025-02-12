import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setAlert } from '../../store/reducers/alert'
import { RootState } from '../../store'

import image from '../../assets/images/concept.jpg'
import arrowBlack from '../../assets/icons/arrow-black.png'
import { addNewsletter } from '../../store/reducers/newsletterMock'

import { Container, Input } from '../../styles'
import * as S from './styles'

const Footer = () => {
  const dispatch = useDispatch()

  const { newsletterList } = useSelector((state: RootState) => state.newsletter)
  const [newsletterTemp, setNewsletterTemp] = useState('')

  const subscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addNewsletter(newsletterTemp))
    setNewsletterTemp('')
    const newsletterFound = newsletterList.some(item => item === newsletterTemp)
    if (!newsletterFound && newsletterTemp !== '') {
      dispatch(
        setAlert({
          alertOpen: true,
          title: 'Newsletter',
          message: 'You have been added to the newsletter. Please check your email.'
        })
      )
    } else if (newsletterTemp !== '') {
      dispatch(
        setAlert({
          alertOpen: true,
          title: 'Newsletter',
          message: 'Email already registered in our Newsletter.'
        })
      )
    }
  }

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
              <Link to={'/about'}>
                Experience
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                Jobs
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
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
              <Link to={'/about'}>
                Privacity policy
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                Contact us
              </Link>
            </li>
          </ul>
          <S.Newsletter onSubmit={(e) => subscribeNewsletter(e)}>
            <h3>Subscribe to Newsletter</h3>
            <p>Stay updated of our last offers and news.</p>
            <S.Input>
              <Input
                type="email"
                placeholder='Enter your email'
                className="input-arrow"
                onChange={(e) => setNewsletterTemp(e.target.value)}
                value={newsletterTemp}
              />
              <button type='submit'>
                <img src={arrowBlack} alt="" />
              </button>
            </S.Input>
            <p className='subtitle'>
              I confirm I have read and accept the <Link to="/about">Terms and conditions</Link> and the <Link to="/about">Privacity Policy</Link>.
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

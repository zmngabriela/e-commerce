import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PersonalData from '../../components/PersonalData'

import { RootState } from '../../store'
import { setAlert } from '../../store/reducers/alert'
import { addNewsletter, removeNewsletter } from '../../store/reducers/newsletterMock'

import { ProfileProps } from '../../pages/Profile'

import arrowBlack from '../../assets/icons/arrow-black.png'

import { Aside, BtnArrow, Content, Div } from '../../pages/Profile/styles'

type AsideTab = 'personal-data' | 'newsletter'

const ContainerProfile = ({ user }: ProfileProps) => {
  const dispatch = useDispatch()

  const [asideTab, setAsideTab] = useState<AsideTab>('personal-data')

  const isSubscribed = useSelector((state: RootState) => state.newsletter.newsletterList.includes(user.email))

  const subscribeNewsletter = (user: string) => {
    dispatch(addNewsletter(user))
    dispatch(setAlert({
      alertOpen: true,
      title: 'Newsletter',
      message: 'You have been added to the newsletter. Please check your email.'
    }))
  }

  const unsubscribeNewsletter = (user: string) => {
    dispatch(removeNewsletter(user))
    dispatch(setAlert({
      alertOpen: true,
      title: 'Newsletter',
      message: `You have been unsubscribed successfully.`
    }))
  }

  const newsletter = (
    isSubscribed
      ? (
        <Div>
          <div>
            <h3>Thank you for being part of our Newsletter!</h3>
            <p>You get to know before everyone about our news, promotions and last collection insights.</p>
          </div>
          <BtnArrow type="button" onClick={() => unsubscribeNewsletter(user.email)}>
            Unsubscribe
            <img src={arrowBlack} alt="" />
          </BtnArrow>
        </Div>
      )
      : (
        <Div>
          <div>
            <h3>Receive the last Newsletter</h3>
            <p>Subscribe to our Newsletter and get to know before everyone about our news, promotions and last collection insights.</p>
          </div>
          <BtnArrow type="button" onClick={() => subscribeNewsletter(user.email)}>
            Subscribe
            <img src={arrowBlack} alt="" />
          </BtnArrow>
        </Div>
      )
  )

  return (
    <Content>
      <Aside mode={asideTab}>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => setAsideTab('personal-data')}
              className='personal-data'
            >
              Personal data
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setAsideTab('newsletter')}
              className='newsletter'
            >
              Newsletter
            </button>
          </li>
        </ul>
      </Aside>
      {asideTab === 'personal-data' ? <PersonalData /> : newsletter}
    </Content>
  )
}

export default ContainerProfile

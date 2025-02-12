import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

import ContainerProfile from '../../containers/ContainerProfile'
import ContainerOrders from '../../containers/ContainerOrders'

import api, { useGetUserSessionQuery, useGetUsersQuery } from '../../services/api'
import { setAlert } from '../../store/reducers/alert'
import { logOut } from '../../store/reducers/auth'

import { colors, Container, ErrorText } from "../../styles"
import * as S from './styles'

export type NavTab = 'profile' | 'orders'

export type ProfileProps = {
  user: User
}

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [navTab, setNavTab] = useState<NavTab>('profile')

  const {data: user, isLoading: isLoadingSession, isError: isErrorSession, error: errorSession} = useGetUserSessionQuery()
  const userFound = useGetUsersQuery().data?.find(u => u.id === user?.id)

  const hangleLogout = () => {
    dispatch(logOut())
    dispatch(api.util.resetApiState())
  }

  if (isErrorSession) {
    dispatch(setAlert({
      alertOpen: true,
      title: 'Profile',
      message: `
        Something went wrong while loading the profile.
        ${errorSession && (
          <ErrorText>
            {'status' in errorSession && <span>Status: {errorSession.status}</span>}
            {'message' in errorSession && <span>- {errorSession.message}</span>}
          </ErrorText>
        )}
      `
    }))
    navigate(-1)
  }

  if (isLoadingSession) return (
    <Container className="central narrow">
      <BarLoader color={colors.black} height={2} cssOverride={{marginTop: '80px'}} />
    </Container>
  )

  return (
    <Container className="central narrow">
      <S.Nav>
        <li>
          <button
            type="button"
            onClick={() => setNavTab('profile')}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setNavTab('orders')}
          >
            Orders
          </button>
        </li>
      </S.Nav>
      {navTab === 'profile' ? (
        <ContainerProfile user={userFound as User} />
      ) : (
        <ContainerOrders user={userFound as User}/>
      )}
      <S.Logout>
        <button type='button' onClick={hangleLogout} className='logout-btn'>
          Logout
        </button>
      </S.Logout>
    </Container>
  )
}

export default Profile

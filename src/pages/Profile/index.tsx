import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarLoader } from 'react-spinners'

import ContainerProfile from '../../containers/ContainerProfile'
import ContainerOrders from '../../containers/ContainerOrders'

import api, { useGetUserSessionQuery, useGetUsersQuery } from '../../services/api'
import { logOut } from '../../store/reducers/auth'

import { colors, Container, ErrorText } from "../../styles"
import * as S from './styles'

export type NavTab = 'profile' | 'orders'

export type ProfileProps = {
  user: User
}

const Profile = () => {
  const dispatch = useDispatch()

  const [navTab, setNavTab] = useState<NavTab>('profile')

  const {data: user, isLoading: isLoadingSession, isError: isErrorSession, error: errorSession} = useGetUserSessionQuery()
  const {data: usersList, isLoading: isLoadingUsers, isError: isErrorUsers, error: errorUsers} = useGetUsersQuery()
  const userFound = usersList?.find(u => u.id === user?.id)

  const hangleLogout = () => {
    dispatch(logOut())
    dispatch(api.util.resetApiState())
  }

  if (isErrorSession || isErrorUsers) return (
    <Container className="central narrow marginTop">
      <ErrorText>Something went wrong while loading the profile.</ErrorText>
      {errorSession && (
        <ErrorText>
          Error details:
          {'status' in errorSession && <span> {errorSession.status} </span>}
          {'message' in errorSession && <span>{errorSession.message}</span>}
        </ErrorText>
      )}
    </Container>
  )

  if (isLoadingSession || isLoadingUsers) return (
    <Container className="central narrow">
      <BarLoader color={colors.black} height={2} cssOverride={{marginTop: '80px'}} data-testid="spinner" />
    </Container>
  )

  return (
    <Container className="central narrow">
      <S.Nav>
        <li>
          <button
            type="button"
            onClick={() => setNavTab('profile')}
            data-testid="profile-btn"
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
        <button type='button' onClick={hangleLogout} className='logout-btn' data-testid="logout-btn">
          Logout
        </button>
      </S.Logout>
    </Container>
  )
}

export default Profile

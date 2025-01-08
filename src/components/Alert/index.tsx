import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import close from '../../assets/icons/close.png'

import { RootState } from '../../store'
import { setAlert } from '../../store/reducers/alert'

import * as S from './styles'

const Alert = () => {
  const dispatch = useDispatch()

  const { alertOpen, title, message } = useSelector((state: RootState) => state.alert)

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setAlert({
        alertOpen: false,
        title: '',
        message: ''
      }))
    }, 4000)

    return () => clearInterval(timeout);
  }, [alertOpen])

  return (
    <S.Alert alertOpen={alertOpen}>
      <S.Image>
        <img src={close} alt="Close" onClick={() => dispatch(setAlert({
          alertOpen: false,
          title: '',
          message: ''
        }))} />
      </S.Image>
      <S.Info>
        <p className='title'>{title}</p>
        <p className='message'>{message}</p>
      </S.Info>
    </S.Alert>
  )
}

export default memo(Alert)

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { setCategory, setCurrentPage, setOffset, setTerm } from "../../store/reducers/filter";
import { RootState } from "../../store";

import imgMock from '../../assets/images/chair.jpg'

import * as S from './styles'

export type Props = {
  item: Category
}

const CardCategory = ({ item }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const categoryFilter = (category: RootState['filter']['category']) => {
    navigate('/shop')
    dispatch(setCategory(category))
    dispatch(setTerm(''))
    dispatch(setOffset(0))
    dispatch(setCurrentPage(1))
  }

  return (
    <S.Category key={item.id}>
      <button type="button" onClick={() => categoryFilter(item.id)}>
        <LazyLoadImage
          src={imgMock}
          alt={item.name}
          className='category-image'
        />
        {item.name}
      </button>
    </S.Category>
  )
}

export default CardCategory

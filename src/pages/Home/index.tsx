import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateFilter, updateTerm } from "../../store/reducers/filter";
import { RootState } from "../../store";
import { useGetCategoriesQuery } from "../../services/api";

import carousel2 from '../../assets/images/carousel2.jpg'
import carousel3 from '../../assets/images/carousel3.jpg'
import carousel1 from '../../assets/images/carousel1.jpg'
import arrow from '../../assets/icons/arrow-carousel.png'

import { Container } from "../../styles";
import * as S from './styles'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: categories } = useGetCategoriesQuery()

  const images = [carousel3, carousel2, carousel1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 5000)

    return () => clearInterval(interval);
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  const categoryFilter = (category: RootState['filter']['category']) => {
    navigate('/shop')
    dispatch(updateFilter({ category }))
    dispatch(updateTerm(''))
  }

  return (
    <S.Home>
      <S.Carousel>
        <S.ArrowButton onClick={goToPrevious}>
          <img src={arrow} alt="" />
        </S.ArrowButton>
        <img src={images[currentIndex]} alt="" />
        <S.ArrowButton onClick={goToNext}>
          <img src={arrow} alt="" />
        </S.ArrowButton>
      </S.Carousel>
      <Container>
        <S.ProductTypes>
          <S.Types>
            <ul>
              {categories?.slice(0, 5).map(category => (
                <li key={category.id}>
                  <button type="button" onClick={() => categoryFilter(category.id)}>
                    <img src={category.image} alt="" />
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </S.Types>
        </S.ProductTypes>
      </Container>
    </S.Home>
  )
}

export default Home

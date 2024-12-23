import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCategory, setTerm } from "../../store/reducers/filter";
import { RootState } from "../../store";
import { useGetCategoriesQuery } from "../../services/api";

import carousel2 from '../../assets/images/carousel2.jpg'
import carousel3 from '../../assets/images/carousel3.jpg'
import carousel1 from '../../assets/images/carousel1.jpg'
import hero from '../../assets/images/lamp.jpg'
import fallbackImage from '../../assets/images/fallback-img.png';

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
    }, 4000)

    return () => clearInterval(interval);
  }, [images.length, currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  const categoryFilter = (category: RootState['filter']['category']) => {
    navigate('/shop')
    dispatch(setCategory(category))
    dispatch(setTerm(''))
  }

  return (
    <S.Home>
      <S.Hero>
        <S.Carousel>
          <img src={images[currentIndex]} alt="" />
        </S.Carousel>
        <div>
          <img src={hero} alt="" className="hero" />
          <div>
            {images.map((_, index) => (
              <S.SlideButton
                key={index}
                onClick={() => goToSlide(index)}
                className={index === currentIndex ? 'active' : ''}
              ></S.SlideButton>
            ))}
          </div>
        </div>
      </S.Hero>
      <Container>
        <S.ProductCategories>
          <S.Categories>
            <ul>
              {categories?.slice(0, 5).map(category => (
                <li key={category.id}>
                  <button type="button" onClick={() => categoryFilter(category.id)}>
                    <img
                      src={category.image}
                      alt=""
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </S.Categories>
        </S.ProductCategories>
      </Container>
    </S.Home>
  )
}

export default Home

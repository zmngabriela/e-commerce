import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

import ListScroll from "../../containers/ListScroll";
import Hero from "../../components/Hero";

import { useGetCategoriesQuery, useGetProductsQuery } from "../../services/api";
import { setTerm } from "../../store/reducers/filter";

import banner from '../../assets/images/banner.png'
import banner2 from '../../assets/images/banner2.png'
import furniture from '../../assets/images/furniture.webp'
import smallScreenBanner from '../../assets/images/shoe.jpg'
import smallScreenBanner2 from '../../assets/images/lamps.jpg'

import arrowBlack from '../../assets/icons/arrow-black.png'

import { BtnArrow, colors, Container } from "../../styles";
import * as S from './styles'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data: categories, isLoading: isLoadingCategory, isError: isErrorCategory, error: errorCategory } = useGetCategoriesQuery()
  const { data: products, isLoading: isLoadingProducts, isError: isErrorProducts, error: errorProducts } = useGetProductsQuery({categoryId: 3})

  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768)

  const updateMedia = () => {
    setSmallScreen(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  const images = smallScreen
    ? [smallScreenBanner, furniture, smallScreenBanner2]
    : [banner, furniture, banner2]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 4000)

    return () => clearInterval(interval);
  }, [images.length, currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  const returnShop = () => {
    navigate('/shop')
    dispatch(setTerm(''))
  }

  if (isErrorCategory) return (
    <Container className="central narrow">
      <p>Something went wrong while loading the categories.</p>
      {errorCategory && (
        <p>
          Error details:
          {'status' in errorCategory && <span>{errorCategory.status}</span>}
          {'message' in errorCategory && <span>{errorCategory.message}</span>}
        </p>
      )}
    </Container>
  )
  if (isErrorProducts) return (
    <Container className="central narrow">
      <p>Something went wrong while loading the products.</p>
      {errorProducts && (
        <p>
          Error details:
          {'status' in errorProducts && <span>{errorProducts.status}</span>}
          {'message' in errorProducts && <span>{errorProducts.message}</span>}
        </p>
      )}
    </Container>
  )

  return (
    <S.Home>
      <S.Hero data-testid="hero-element" >
        <S.Carousel>
          <img src={images[currentIndex]} alt="Brand" />
          <ul>
            {images.map((_, index) => (
              <li key={index}>
                <S.SlideButton
                  onClick={() => goToSlide(index)}
                  className={index === currentIndex ? 'active' : ''}
                ></S.SlideButton>
              </li>
            ))}
          </ul>
        </S.Carousel>
      </S.Hero>
      <Container>
        {categories && categories.length >= 5 && (
          isLoadingCategory ? (
            <BarLoader color={colors.black} height={2} cssOverride={{marginTop: '80px'}}/>
          ) : (
            <S.ProductCategories>
              <S.Title>
                <h2>Shop by Category</h2>
                <BtnArrow className="arrow" type="button" onClick={returnShop}>
                  Show all
                  <img src={arrowBlack} alt="" />
                </BtnArrow>
              </S.Title>
              <ListScroll categories={categories} />
            </S.ProductCategories>
          )
        )}
        <Hero />
        {products && products?.length >= 5 && (
          isLoadingProducts ? (
            <BarLoader data-testid="spinner-loader" color={colors.black} cssOverride={{marginTop: '80px'}}/>
          ) : (
            <S.Arrivals>
              <S.Title>
                <h2>New arrivals</h2>
                <BtnArrow className="arrow" type="button" onClick={returnShop} >
                  Show all
                  <img src={arrowBlack} alt="" />
                </BtnArrow>
              </S.Title>
              <ListScroll products={products} />
            </S.Arrivals>
          )
        )}
      </Container>
    </S.Home>
  )
}

export default Home

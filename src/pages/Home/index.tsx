import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

import ProductsListScroll from "../../components/ProductsListScroll";

import { setCategory, setCurrentPage, setOffset, setTerm } from "../../store/reducers/filter";
import { RootState } from "../../store";
import { useGetCategoriesQuery, useGetProductsQuery } from "../../services/api";

import carousel2 from '../../assets/images/carousel2.jpg'
import carousel3 from '../../assets/images/carousel3.jpg'
import carousel1 from '../../assets/images/carousel1.jpg'
import hero from '../../assets/images/concept.jpg'

import fallbackImage from '../../assets/images/fallback.png';
import arrowBlack from '../../assets/icons/arrow-black.png'

import { Btn, colors, Container } from "../../styles";
import * as S from './styles'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data: categories, isLoading: isLoadingCategory, isError: isErrorCategory, error: errorCategory } = useGetCategoriesQuery()
  const { data: products, isLoading: isLoadingProducts, isError: isErrorProducts, error: errorProducts } = useGetProductsQuery({categoryId: 3})

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
    dispatch(setOffset(0))
    dispatch(setCurrentPage(1))
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
          {'status' in errorCategory && <span> {errorCategory.status} - </span>}
          {'message' in errorCategory && <span> {errorCategory.message}</span>}
        </p>
      )}
    </Container>
  )
  if (isErrorProducts) return (
    <Container className="central narrow">
      <p>Something went wrong while loading the categories.</p>
      {errorProducts && (
        <p>
          Error details:
          {'status' in errorProducts && <span> {errorProducts.status} </span>}
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
        <img src={hero} alt="Concept" className="hero" />
      </S.Hero>
      <Container>
        {products && products?.length >= 5 && (
          isLoadingProducts ? (
            <BarLoader data-testid="spinner-loader" color={colors.black} cssOverride={{marginTop: '80px'}}/>
          ) : (
            <S.Arrivals>
              <S.Title>
                <h2>New arrivals</h2>
                <Btn className="arrow" type="button" onClick={returnShop} >
                  Show all
                  <img src={arrowBlack} alt="" />
                </Btn>
              </S.Title>
              {products && <ProductsListScroll filteredProducts={products} />}
            </S.Arrivals>
          )
        )}
        {categories && categories.length >= 5 && (
          isLoadingCategory ? (
            <BarLoader color={colors.black} cssOverride={{marginTop: '80px'}}/>
          ) : (
            <S.ProductCategories>
              <S.Title>
                <h2>Shop by Category</h2>
                <Btn className="arrow" type="button" onClick={returnShop}>
                  Show all
                  <img src={arrowBlack} alt="" />
                </Btn>
              </S.Title>
              <S.Categories>
                  {categories?.slice(0, 4).map(category => (
                    <S.Category key={category.id}>
                      <button type="button" onClick={() => categoryFilter(category.id)}>
                        <img
                          src={category.image}
                          alt={category.name}
                          onError={(e) => {
                            e.currentTarget.src = fallbackImage;
                          }}
                        />
                        {category.name}
                      </button>
                    </S.Category>
                  ))}
              </S.Categories>
            </S.ProductCategories>
          )
        )}
      </Container>
    </S.Home>
  )
}

export default Home

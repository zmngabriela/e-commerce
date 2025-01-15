import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { BarLoader } from "react-spinners"

import Breadcrumb from "../../components/Breadcrumb"
import Empty from "../../components/Empty"

import { useGetProductQuery } from "../../services/api"
import { addCart, setCartOpen } from "../../store/reducers/cart"
import { setAlert } from "../../store/reducers/alert"
import { formatToEuro } from "../../utils"

import fallbackImage from '../../assets/images/fallback.png';
import sizeChart from '../../assets/images/size-chart.jpg'
import close from '../../assets/icons/close.png'

import { Btn, colors, Container, ErrorText } from "../../styles"
import * as S from './styles'

type ProductParams = {
  id: string
}

const ProductPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams() as ProductParams
  const { data: product, isLoading, isError, error } = useGetProductQuery(id)

  const [sizeChartVisibility, setSizeChartVisibility] = useState(false)
  const [selectedSize, setSelectedSize] = useState('')

  const addToCart = (item: CartItem) => {
    if (selectedSize) {
      dispatch(addCart({
        product: item.product,
        selectedSize: item.selectedSize
      }))
      dispatch(setCartOpen(true))
    } else {
      dispatch(setAlert({
        alertOpen: true,
        title: 'Cart',
        message: 'Please select a size.'
      }))
    }
  }

  if (isError) return (
    <Container className="central narrow marginTop">
      <ErrorText>Something went wrong while loading the product.</ErrorText>
      {error && (
        <ErrorText>
          Error details:
          {'status' in error && <span> {error.status} </span>}
          {'message' in error && <span>{error.message}</span>}
        </ErrorText>
      )}
    </Container>
  )
  if (isLoading) return (
    <Container className="central narrow">
      <BarLoader color={colors.black} height={2} cssOverride={{marginTop: '80px'}} />
    </Container>
  )

  return (
    <Container>
      {product
        ? (
          <>
            <S.Product>
              <Breadcrumb item={product} />
              <S.ProductInfo>
                <S.Content>
                  <S.ProductImages>
                    <div>
                      <img
                        src={product?.images[0] || fallbackImage}
                        alt={product.title}
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />
                      <img
                        src={product?.images[1] || fallbackImage}
                        alt={product.title}
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />
                    </div>
                    <img
                      src={product?.images[2] || fallbackImage}
                      alt={product.title}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                  </S.ProductImages>
                  <S.ProductDescription>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                  </S.ProductDescription>
                </S.Content>
                <S.Sidebar>
                  <S.ProductHeader>
                    <h3>{product.title}</h3>
                    <p>{formatToEuro(product.price)}</p>
                  </S.ProductHeader>
                  <S.Sizes>
                    <p>Select a size</p>
                    <ul>
                      {(product.sizes ?? ['s', 'm', 'l']).map(size => (
                        <li
                          key={size}
                          className={selectedSize === size ? 'size-selected' : ''}
                          onClick={() => setSelectedSize(size)}
                        >
                          <button type="button">
                            {size}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                        type="button"
                        onClick={() => setSizeChartVisibility(true)}
                      >
                      + Size guide
                    </button>
                  </S.Sizes>
                  <div>
                    <Btn
                      type="button"
                      onClick={() => addToCart({
                        product: product,
                        selectedSize: selectedSize
                      })}>
                      Add to cart
                    </Btn>
                  </div>
                </S.Sidebar>
              </S.ProductInfo>
            </S.Product>
            <S.SizeChart className={sizeChartVisibility ? 'visible' : ''}>
              <S.SizeChartContent>
                <header>
                  <img src={close} alt="Close" onClick={() => setSizeChartVisibility(false)} />
                </header>
                <img src={sizeChart} alt="Size Chart" />
              </S.SizeChartContent>
              <div className="overlay" onClick={() => setSizeChartVisibility(false)}></div>
            </S.SizeChart>
          </>
        )
        : (
          <Container className="central narrow">
            <Empty
              noProductsMessage="Product not found."
              categoryTitle="You may be interested"
              categoryFilter={2}
            />
          </Container>
      )}
    </Container>
  )
}

export default ProductPage


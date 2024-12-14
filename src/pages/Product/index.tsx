import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import Breadcrumb from "../../components/Breadcrumb"
import Empty from "../../components/Empty"

import { useGetProductQuery } from "../../services/api"
import { addCart } from "../../store/reducers/cart"
import { formatToEuro } from "../../utils"

import fallbackImage from '../../assets/images/fallback-img.png';
import sizeChart from '../../assets/images/size-chart.webp'

import { Btn, Container } from "../../styles"
import * as S from './styles'

type ProductParams = {
  id: string
}

const ProductPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams() as ProductParams
  const { data: product } = useGetProductQuery(id)

  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState('')

  const imgSrc = product?.images[0] || fallbackImage
  const secondImgSrc = product?.images[1] || fallbackImage

  return (
    <Container>
      {product
        ? (
          <S.Product>
            <Breadcrumb item={product} />
            <S.ProductInfo>
              <img
                src={imgSrc}
                alt=""
                className='product-image'
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <img
                src={secondImgSrc}
                alt=""
                className='product-image'
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <S.Content>
                <S.ProductDetail>
                  <h3>{product.title}</h3>
                  <p>{formatToEuro(product.price)}</p>
                </S.ProductDetail>
                <S.Sizes>
                  <p>Select a size</p>
                  <ul>
                    {(product.sizes ?? ['s', 'm', 'l']).map(size => (
                      <li
                        key={size}
                        className={selectedSize === size ? 'size-selected' : ''}
                        onClick={() => setSelectedSize(size)}
                      >
                      {size.toUpperCase()}
                    </li>
                    ))}
                  </ul>
                  <button
                      type="button"
                      onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
                    >
                    + Size guide
                  </button>
                  {sizeGuideOpen ? (
                    <img src={sizeChart} alt="" />
                  ) : ''}
                </S.Sizes>
                <div>
                  <Btn
                    type="button"
                    onClick={() => dispatch(addCart({
                      product: product,
                      selectedSize: selectedSize
                    }))}>
                    Add to cart
                  </Btn>
                </div>
              </S.Content>
            </S.ProductInfo>
            <S.ProductDescription>
              <h4>Description</h4>
              <p>{product.description}</p>
            </S.ProductDescription>
          </S.Product>
        )
        : (
          <S.NoResult>
            <Empty
              noProductsMessage="Product not found."
              categoryTitle="You may be interested"
              categoryFilter={2}
            />
          </S.NoResult>
      )}
    </Container>
  )
}

export default ProductPage


import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import ProductComponent from "../ProductCard"

import { useGetProductsQuery } from "../../services/api"
import { setTerm } from "../../store/reducers/filter"

import arrowBlack from '../../assets/icons/arrow-black.png'

import { Products } from "../ProductsList/styles"
import { Btn } from "../../styles"
import * as S from './styles'

type Props = {
  noProductsMessage: string
  categoryTitle: string
  categoryFilter: number
}

const Empty = ({ noProductsMessage, categoryTitle, categoryFilter }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data: products } = useGetProductsQuery({ categoryId: categoryFilter})

  const returnShop = () => {
    navigate('/shop')
    dispatch(setTerm(''))
  }

  return (
    <S.Empty>
      <h3>{noProductsMessage}</h3>
      <Btn type="button" onClick={returnShop} className="arrow">
        Continue shopping
        <img src={arrowBlack} alt="" />
      </Btn>
      {products && products.length > 4 && (
        <>
          <p className="news">{categoryTitle}</p>
          <Products>
            {products?.slice(0, 4).map((item) => ( item &&
              <ProductComponent key={item.id} item={item} />
            ))}
          </Products>
        </>
      )}
    </S.Empty>
  )
}

export default Empty

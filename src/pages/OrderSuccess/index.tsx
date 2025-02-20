import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"

import CardProduct from "../../components/CardProduct"

import { useGetProductsQuery } from "../../services/api"
import { RootState } from "../../store"

import bag from '../../assets/icons/cart.png'

import * as S from './styles'
import { Btn, Container } from "../../styles"
import { Products } from "../../containers/ProductsList/styles"

type OrderParams = {
  id: string
}

const OrderSuccess = () => {
  const { id } = useParams() as OrderParams
  const { orders } = useSelector((state: RootState) => state.orders)
  const order = orders.find(order => order.id === Number(id))

  const { data: products } = useGetProductsQuery({ categoryId: 2})

  return (
    <Container className="central narrow" data-testid="container">
      {order ? (
        <S.Content>
          <img className="icon" src={bag} alt="" />
          <h3>Thank you!</h3>
          <p>We have received your order.</p>
          <p>Order #{order.id}</p>
          <Btn as={Link} to={'/profile'}>
            Go to orders page
          </Btn>
          <p className="recommended">Items you might have interest</p>
          <Products>
            {products?.slice(0, 4).map((item) => ( item &&
              <CardProduct key={item.id} item={item} />
            ))}
          </Products>
        </S.Content>
      ) : (
        <>
          <p>Order not found.</p>
          <Btn as={Link} to={'/profile'}>
            Go to orders page
          </Btn>
        </>
      )}
    </Container>
  )
}

export default OrderSuccess

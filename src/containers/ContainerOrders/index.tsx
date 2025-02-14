import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../store'
import { formatToEuro } from '../../utils'

import { ProfileProps } from '../../pages/Profile'

import * as S from './styles'
import { Aside, Content } from '../../pages/Profile/styles'

const ContainerOrders = ({ user }: ProfileProps) => {
  const orders = useSelector((state: RootState) => state.orders.orders.filter(order => order.user.email === user.email))
  const itemsCart = useSelector((state: RootState) => state.cart.items)

  const getItemImage = (id: number) => {
    const product = itemsCart.find(item => item.product.id === id)
    return product?.product.images[0]
  }

  const getItemTitle = (id: number) => {
    const product = itemsCart.find(item => item.product.id === id)
    return product?.product.title
  }

  return (
    <Content>
      <Aside>
        <ul>
          <li>
            <button
              type="button"
              className='ongoing'
            >
              Orders
            </button>
          </li>
        </ul>
      </Aside>
      <S.OrdersList>
        {orders.length !== 0 ? orders.map((order, i) => (
          <S.Order>
            <h4>Order id: #{order.id}</h4>
            {order.items.map(item => (
              <S.ItemCart>
                <S.Content>
                  <p className='limit-characters'>{getItemTitle(item.productId)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {formatToEuro(item.price)}</p>
                </S.Content>
                <Link to={`/products/${item.productId}`}>
                  <img src={getItemImage(item.productId)} alt="" />
                </Link>
              </S.ItemCart>
            ))}
            <p>Total price: {formatToEuro(order.totalAmount)}</p>
            <p>Status: {order.status.charAt(0).toUpperCase() + order.status.slice(1)}</p>
            <p>Payment method: {order.payment.method.charAt(0).toUpperCase() + order.payment.method.slice(1)}</p>
            <p>Address: {order.shipping.streetNumber + ', ' + order.shipping.postalCode + ', ' + order.shipping.city}</p>
          </S.Order>
        )) : (
          <>
            <p>You don't have any orders yet.</p>
            <Link to={'/shop'} style={{ fontWeight: '400', cursor: 'pointer' }}>Shop now.</Link>
          </>
        )}
      </S.OrdersList>
    </Content>
  )
}

export default ContainerOrders

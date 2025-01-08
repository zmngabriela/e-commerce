import { Link } from "react-router-dom"
import * as S from './styles'

type Props = {
  item: Product
}

const Breadcrumb = ({ item }: Props) => (
  <S.Breadcrumb>
      <Link to={'/shop'} className="bold">Shop</Link>
      {' / '}
      <Link to={'/shop'}>{item.category.name}</Link>
      {' / '}
      <span className="limit-characters">{item.title}</span>
  </S.Breadcrumb>
)

export default Breadcrumb

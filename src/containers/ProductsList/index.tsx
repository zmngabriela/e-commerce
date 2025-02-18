import CardProduct from '../../components/CardProduct'

import * as S from './styles'

type Props = {
  filteredProducts: Product[]
}

const ProductsList = ({ filteredProducts }: Props) => {
  return (
    <S.Products>
      {filteredProducts?.map((product) => (
        <CardProduct key={product.id} item={product} />
      ))}
    </S.Products>
  )
}

export default ProductsList


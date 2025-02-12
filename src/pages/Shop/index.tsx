import { useDispatch, useSelector } from "react-redux"
import { BarLoader } from "react-spinners"

import ProductsList from "../../containers/ProductsList"
import Empty from "../../components/Empty"
import AsideFilter from "../../components/AsideFilter"

import { RootState } from "../../store"
import { useGetProductsQuery } from "../../services/api"
import { setFilterOpen, setOffset, setCurrentPage } from "../../store/reducers/filter"

import filter from '../../assets/icons/filter.png'

import { Btn, colors, Container, ErrorText } from "../../styles"
import * as S from './styles'

const Shop = () => {
  const dispatch = useDispatch()
  const { term, category, sortBy, limit, offset, currentPage, priceMin, priceMax, filterOpen } = useSelector((state: RootState) => state.filter)

  const { data: products, isLoading, isError, error } = useGetProductsQuery({
    categoryId: category,
    price_min: priceMin,
    price_max: priceMax,
    title: term,
    offset: offset,
    limit: limit
  })

  const totalItems = useGetProductsQuery({ categoryId: category, title: term }).data?.length
  const totalPages = totalItems ? Math.ceil(totalItems / limit) : 0;

  const sortedItems = products?.slice().sort((a, b) => {
    const isValidDate = (date: string) => !isNaN(Date.parse(date))
    if (sortBy === 'asc') {
      return a.price - b.price
    } if (sortBy === 'desc') {
      return b.price - a.price
    } else if (sortBy === 'latest') {
      const dateA = isValidDate(a.creationAt) ? new Date(a.creationAt).getTime() : 0
      const dateB = isValidDate(b.creationAt) ? new Date(b.creationAt).getTime() : 0
      return dateB - dateA
    }
    return 0
  })

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage))
    dispatch(setOffset((newPage - 1) * limit))
  }

  if (isError) return (
    <Container className="central narrow marginTop">
      <ErrorText>Something went wrong while loading the products.</ErrorText>
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
    <S.Shop>
        {sortedItems && sortedItems.length > 0 ? (
          <Container>
            <S.Filter>
              <div onClick={() => dispatch(setFilterOpen(!filterOpen))}>
                <button className="btn-filter">Filter and sort</button>
                <img src={filter} alt="" />
              </div>
            </S.Filter>
            <ProductsList filteredProducts={sortedItems} />
            <S.Pagination>
              <li>
                <Btn disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                  Back
                </Btn>
              </li>
              {[...Array(totalPages)].map((_, index) => {
                if (index === 0
                  || currentPage === index
                  || currentPage === index + 1
                  || currentPage === index + 2
                  || index === totalPages - 1
                ) {
                  return (
                    <li key={index}>
                      <Btn
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Btn>
                    </li>
                  )
                }
              })}
              <li>
                <Btn disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </Btn>
              </li>
            </S.Pagination>
          </Container>
        ) : (
          <Container className="central narrow">
            <Empty
              noProductsMessage="No product found."
              categoryTitle="You may be interested"
              categoryFilter={2}
            />
          </Container>
        )}
      <AsideFilter />
    </S.Shop>
  )
}

export default Shop

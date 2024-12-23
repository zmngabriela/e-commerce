import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ProductsList from "../../components/ProductsList"
import Empty from "../../components/Empty"
import Filter from "../../components/Filter"

import { RootState } from "../../store"
import { useGetProductsQuery } from "../../services/api"
import { setFilterOpen } from "../../store/reducers/filter"

import filter from '../../assets/icons/filter.png'

import { Btn, Container } from "../../styles"
import * as S from './styles'

const Shop = () => {
  const dispatch = useDispatch()
  const { term, category, sortBy, limit, priceMin, priceMax, filterOpen } = useSelector((state: RootState) => state.filter)

  const [page, setPage] = useState(1)

  const { data: items, isLoading, error } = useGetProductsQuery({
    categoryId: category,
    price_min: priceMin,
    price_max: priceMax,
    title: term,
    limit: limit,
    offset: (page - 1) * limit
  })

  const sortedItems = items?.slice().sort((a, b) => {
    if (sortBy === 'asc') {
      return a.price - b.price
    } else if (sortBy === 'desc') {
      return b.price - a.price
    }
    return 0
  })

  if (error) return <h2>We are maintaining the website, please try again later.</h2>
  if (isLoading) return <h2>Loading...</h2>

  return (
    <S.Shop>
      <Container>
        <S.Filter>
          <div onClick={() => dispatch(setFilterOpen(!filterOpen))}>
            <button className="btn-filter">Filter and sort</button>
            <img src={filter} alt="" />
          </div>
        </S.Filter>
        {sortedItems && sortedItems.length > 0 ? (
          <>
            <ProductsList filteredProducts={sortedItems} />
            <S.Pagination>
              <li>
                <Btn disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Back
                </Btn>
              </li>
              {[...Array(Math.ceil(sortedItems.length / limit))].map((_, index) => {
                const totalPages = Math.ceil(sortedItems.length / limit)
                if (index < 3 || index === totalPages - 1) {
                  return (
                    <li>
                      <Btn
                        key={index}
                        className={page === index + 1 ? 'active' : ''}
                        onClick={() => setPage(index + 1)}
                      >
                        {index + 1}
                      </Btn>
                    </li>
                  )
                }
                if (index === 3) {
                  return <span>...</span>
                }
              })}
              <li>
                <Btn disabled={page * limit >= sortedItems.length} onClick={() => setPage(page + 1)}>
                  Next
                </Btn>
              </li>
            </S.Pagination>
          </>
        ) : (
          <S.NoResult>
            <Empty
              noProductsMessage="No product found."
              categoryTitle="You may be interested"
              categoryFilter={2}
            />
          </S.NoResult>
        )}
      </Container>
      <Filter />
    </S.Shop>
  )
}

export default Shop

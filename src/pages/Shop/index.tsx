import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import ProductsList from "../../components/ProductsList"
import Empty from "../../components/Empty"

import { RootState } from "../../store"
import { useGetProductsQuery } from "../../services/api"

import filter from '../../assets/icons/filter.png'
import close from '../../assets/icons/close.png'

import { Container, Input } from "../../styles"
import * as S from './styles'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Shop = () => {
  const query = useQuery()

  const filterRef = useRef<HTMLDivElement | null>(null)
  const { term, category } = useSelector((state: RootState) => state.filter)

  const [limit, setLimit] = useState(2)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)
  const [sortBy, setSortBy] = useState<'asc' | 'desc' | ''>('')

  const [filterOpen, setFilterOpen] = useState(false)
  const [productsPageOpen, setProductsPageOpen] = useState(false)
  const [sortByOpen, setSortByOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  const [priceMin, setPriceMin] = useState(query.get("price_min") ? Number(query.get("price_min")) : undefined)
  const [priceMax, setPriceMax] = useState(query.get("price_max") ? Number(query.get("price_max")) : undefined)

  const { data: items, isLoading, error } = useGetProductsQuery({
    categoryId: category,
    price_min: priceMin,
    price_max: priceMax,
    title: term,
    limit: limit,
    offset: offset
  })

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const sortedItems = items?.slice().sort((a, b) => {
    if (sortBy === 'asc') {
      return a.price - b.price
    } else if (sortBy === 'desc') {
      return b.price - a.price
    }
    return 0
  })

  const handleLoadMoreProducts = () => {
    setOffset((prev) => prev + limit)
  }

  const percentage = () => {
    if (items) {
      if (items.length === 0) return 0
      return (offset / items.length) * 100
    }
    return 0
  }

  if (error) return <h2>We are maintaining the website, please try again later.</h2>
  if (isLoading) return <h2>Loading...</h2>

  return (
    <S.Shop>
      <Container>
        <S.Filter onClick={() => setFilterOpen(!filterOpen)}>
          <button className="btn-filter">Filter and sort</button>
          <img src={filter} alt="" />
        </S.Filter>
        {sortedItems && items && items.length > 0 ? (
          <>
            <ProductsList filteredProducts={sortedItems} />
            <S.Pagination $percentage={percentage()}>
              <button onClick={() => setPage((e) => Number(e.target.value))}>
                1
              </button>
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
      <S.FilterOpen
        $isopen={filterOpen}
        ref={filterRef}
      >
        <S.Filter onClick={() => setFilterOpen(!filterOpen)}>
          <img src={close} alt="" />
        </S.Filter>
        <p>Filter and sort</p>
        <S.Option>
          <S.ButtonRow
            onClick={() => setProductsPageOpen(!productsPageOpen)}
            className="btn-filter"
          >
            <p>Products per page</p>
            <p>{sortByOpen ? '-' : '+'}</p>
          </S.ButtonRow>
          {productsPageOpen && (
            <S.OptionOpen>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value))
                  setOffset(0)
                }}
              >
                <option value={5}>5</option>
                <option value={10}>20</option>
                <option value={20}>50</option>
                <option value={50}>100</option>
              </select>
            </S.OptionOpen>
          )}
        </S.Option>
        <S.Option>
          <S.ButtonRow
            onClick={() => setSortByOpen(!sortByOpen)}
            className="btn-filter"
          >
            <p>Sort by</p>
            <p>{sortByOpen ? '-' : '+'}</p>
          </S.ButtonRow>
          {sortByOpen && (
            <S.OptionOpen>
              <S.Row >
                <input
                  type="radio"
                  name="sort-by"
                  id="desc-price"
                  onClick={() => setSortBy('desc')}
                />
                <label htmlFor="desc-price">Price: High to Low</label>
              </S.Row>
              <S.Row>
                <input
                  type="radio"
                  name="sort-by"
                  id="asc-price"
                  onClick={() => setSortBy('asc')}
                />
                <label htmlFor="asc-price">Price: Low to High</label>
              </S.Row>
            </S.OptionOpen>
          )}
        </S.Option>
        <S.Option>
          <S.ButtonRow
            onClick={() => setPriceOpen(!priceOpen)}
            className="btn-filter"
          >
            <p>Price range</p>
            <p>{priceOpen ? '-' : '+'}</p>
          </S.ButtonRow>
          {priceOpen && (
            <S.OptionOpen>
              <S.Row>
                <label htmlFor="minimum-price">Minimum</label>
                <Input
                  type="number"
                  id="minimum-price"
                  placeholder="Min."
                  className="input-price"
                  onChange={(e) => setPriceMin(Number(e.target.value))}
                />
              </S.Row>
              <S.Row>
                <label htmlFor="maximum-price">Maximum</label>
                <Input
                  type="number"
                  id="maximum-price"
                  placeholder="Max."
                  className="input-price"
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                />
              </S.Row>
            </S.OptionOpen>
          )}
        </S.Option>
      </S.FilterOpen>
    </S.Shop>
  )
}

export default Shop

import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFilterOpen, setLimit, setOffset, setPriceMax, setPriceMin, setSortBy } from '../../store/reducers/filter'
import { RootState } from '../../store'

import close from '../../assets/icons/close.png'

import { Input } from '../../styles'
import * as S from './styles'

const AsideFilter = () => {
  const dispatch = useDispatch()
  const { limit, filterOpen } = useSelector((state: RootState) => state.filter)
  const filterRef = useRef<HTMLDivElement | null>(null)

  const [sortByOpen, setSortByOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)
  const [productsPageOpen, setProductsPageOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterOpen && filterRef.current && !filterRef.current.contains(e.target as Node)) {
        closeFilter()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const closeFilter = () => {
    dispatch(setFilterOpen(false))
    setSortByOpen(false)
    setPriceOpen(false)
    setProductsPageOpen(false)
  }

  return (
    <S.FilterAside
      filterOpen={filterOpen}
      ref={filterRef}
    >
        <img src={close} alt="Close" onClick={closeFilter} />
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
                dispatch(setLimit(Number(e.target.value)))
                dispatch(setOffset(0))
              }}
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
              <option value={20}>20</option>
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
                onClick={() => dispatch(setSortBy('desc'))}
              />
              <label htmlFor="desc-price">Price: High to Low</label>
            </S.Row>
            <S.Row>
              <input
                type="radio"
                name="sort-by"
                id="asc-price"
                onClick={() => dispatch(setSortBy('asc'))}
              />
              <label htmlFor="asc-price">Price: Low to High</label>
            </S.Row>
            <S.Row>
              <input
                type="radio"
                name="sort-by"
                id="latest"
                onClick={() => dispatch(setSortBy('latest'))}
              />
              <label htmlFor="latest">Latest products</label>
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
                onChange={(e) => dispatch(setPriceMin(Number(e.target.value)))}
              />
            </S.Row>
            <S.Row>
              <label htmlFor="maximum-price">Maximum</label>
              <Input
                type="number"
                id="maximum-price"
                placeholder="Max."
                className="input-price"
                onChange={(e) => dispatch(setPriceMax(Number(e.target.value)))}
              />
            </S.Row>
          </S.OptionOpen>
        )}
      </S.Option>
    </S.FilterAside>
  )
}

export default AsideFilter

import { useEffect, useRef, useState } from 'react'
import close from '../../assets/icons/close.png'
import * as S from './styles'
import { Input } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterOpen, setLimit, setOffset, setPriceMax, setPriceMin, setSortBy } from '../../store/reducers/filter'
import { RootState } from '../../store'

const Filter = () => {
  const dispatch = useDispatch()
  const { limit, filterOpen } = useSelector((state: RootState) => state.filter)

  const filterRef = useRef<HTMLDivElement | null>(null)
  const [sortByOpen, setSortByOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)
  const [productsPageOpen, setProductsPageOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        dispatch(setFilterOpen(false))
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <S.FilterOpen
      $isopen={filterOpen}
      ref={filterRef}
    >
        <img src={close} alt="" onClick={() => dispatch(setFilterOpen(!filterOpen))} />
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
                onClick={() => dispatch(setSortBy('asc'))}
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
    </S.FilterOpen>
  )
}

export default Filter

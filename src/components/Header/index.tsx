import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { RootState } from "../../store"
import { setCategory, setTerm } from "../../store/reducers/filter"

import cart from '../../assets/icons/cart.png'
import search from '../../assets/icons/search.png'
import favorite from '../../assets/icons/favorite.png'
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'

import { Input } from "../../styles"
import * as S from "./styles"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items: itemsCart } = useSelector((state: RootState) => state.cart)

  const [searchActive, setSearchActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const searchInput = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInput.current && !searchInput.current.contains(event.target as Node)) {
        setSearchActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchInput])

  useEffect(() => {
    if (searchActive && searchInput.current) {
      searchInput.current.focus();
    }
  }, [searchActive]);

  const categoryFilter = (category: RootState['filter']['category']) => {
    navigate('/shop')
    dispatch(setCategory(category))
    dispatch(setTerm(''))
  }

  const filterAndClose = (category: number) => {
    categoryFilter(category)
    setMenuOpen(!menuOpen)
  }

  return (
    <S.Header>
      <S.UpperLine>
        <p>free shipping from 100€ and free return in all orders</p>
      </S.UpperLine>
      <S.Navbar>
        <button
          className="toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <img src={menuOpen ? close : menu} alt="Menu" />
        </button>
        <S.Links>
          <li>
            <button type="button" onClick={() => categoryFilter(1)}>
              Dress up
            </button>
          </li>
          <li>
            <button type="button" onClick={() => categoryFilter(2)}>
              Eletronics
            </button>
          </li>
          <li>
            <button type="button" onClick={() => categoryFilter(3)}>
              Furniture
            </button>
          </li>
          <li>
            <button type="button" onClick={() => categoryFilter(0)}>
              All
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('/about')}>
              About me
            </button>
          </li>
        </S.Links>
        <div className="logo">
          <h1><Link to='/'>Brand</Link></h1>
        </div>
        <S.AuxiliaryMenu>
          {searchActive ?
            <Input
              ref={searchInput}
              type="text"
              placeholder="Search"
              onChange={(e) => {
                dispatch(setTerm(e.target.value))
                navigate('/shop')
              }}
            />
          : ''}
          <button
            onClick={() => setSearchActive(true)}
            type="button"
            className="btn-search"
          >
            <img src={search} alt="Search" />
          </button>
          <Link to={'/favorites'} type="button">
            <img src={favorite} alt="Favorites" />
          </Link>
          <button type="button" className="btn-cart">
            <Link to='/cart'>
              <img src={cart} alt="Cart" />
              {itemsCart.length > 0 && (
                <span>{itemsCart.length}</span>
              )}
            </Link>
          </button>
        </S.AuxiliaryMenu>
      </S.Navbar>
      <S.NavbarOpen $isopen={menuOpen}>
        <div>
          <div className="logo">
            <h1><Link to='/'>Brand</Link></h1>
          </div>
          <S.Links>
            <li>
              <button type="button" onClick={() => filterAndClose(1)}>
                Dress up
              </button>
            </li>
            <li>
              <button type="button" onClick={() => filterAndClose(2)}>
                Eletronics
              </button>
            </li>
            <li>
              <button type="button" onClick={() => filterAndClose(3)}>
                Furniture
              </button>
            </li>
            <li>
              <button type="button" onClick={() => filterAndClose(0)}>
                Shop all
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigate('/about')}>
                About me
              </button>
            </li>
          </S.Links>
        </div>
        <div>

        </div>
      </S.NavbarOpen>
    </S.Header>
  )
}

export default Header

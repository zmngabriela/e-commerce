import { memo, useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import NavbarAside from "../NavbarAside"

import { RootState } from "../../store"
import { setCategory, setCurrentPage, setOffset, setTerm } from "../../store/reducers/filter"
import { setCartOpen } from "../../store/reducers/cart"

import cart from '../../assets/icons/cart.png'
import search from '../../assets/icons/search.png'
import favorite from '../../assets/icons/favorite.png'
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import userImage from '../../assets/icons/user.png'

import { Input } from "../../styles"
import * as S from "./styles"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items: itemsCart } = useSelector((state: RootState) => state.cart)
  const searchInput = useRef<HTMLInputElement | null>(null)

  const [searchActive, setSearchActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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

  const categoryFilter = useCallback((category: RootState['filter']['category']) => {
    navigate('/shop')
    dispatch(setCategory(category))
    dispatch(setTerm(''))
    dispatch(setCartOpen(false))
    dispatch(setOffset(0))
    dispatch(setCurrentPage(1))
  }, [navigate, dispatch])

  return (
    <S.Header $scrollY={scrollY}>
      <S.UpperLine>
        <p>free shipping from 100€ | free return in all orders</p>
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
              About the dev
            </button>
          </li>
        </S.Links>
        <div className="brand">
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
          <Link to={'/login'} type="button">
            <img src={userImage} alt="Login" />
          </Link>
          <Link to={'/favorites'} type="button">
            <img src={favorite} alt="Favorites" />
          </Link>
          <Link to='/cart' className="btn-cart">
            <img src={cart} alt="Cart" />
            {itemsCart.length > 0 && (
              <span>{itemsCart.length}</span>
            )}
          </Link>
        </S.AuxiliaryMenu>
      </S.Navbar>
      <NavbarAside categoryFilter={categoryFilter} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </S.Header>
  )
}

export default memo(Header)

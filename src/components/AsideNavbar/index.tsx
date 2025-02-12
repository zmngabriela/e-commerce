import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Links } from '../Header/styles'
import * as S from './styles'

type Props = {
  categoryFilter: (category: number) => void
  setMenuOpen: (arg: boolean) => void
  menuOpen: boolean
}

const AsideNavbar = ({ categoryFilter, setMenuOpen, menuOpen }: Props) => {
  const navigate = useNavigate()

  const filterAndClose = (category: number) => {
    categoryFilter(category)
    setMenuOpen(false)
  }

  const navigateAndClose = (to: string) => {
    navigate(to)
    setMenuOpen(false)
  }

  const currentYear = new Date().getFullYear()

  return (
    <S.NavbarOpen $menuOpen={menuOpen}>
      <div className="brand">
        <h1><Link to='/'>Brand</Link></h1>
      </div>
      <Links>
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
          <button type="button" onClick={() => navigateAndClose('/about')}>
            About the dev
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigateAndClose('/')}>
            Support
          </button>
        </li>
        <li>
          <button type="button">
            &copy; {currentYear}
          </button>
        </li>
      </Links>
    </S.NavbarOpen>
  )
}

export default memo(AsideNavbar)

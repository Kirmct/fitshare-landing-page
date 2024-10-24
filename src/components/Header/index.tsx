// src/components/Header/index.tsx
import { HeaderContainer } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MenuHamburguer } from '../MenuHamburguer'

export const Header = () => {
  const navigate = useNavigate()

  function handleLogoClick() {
    navigate('/')
  }

  function handleScrollToFeatures(sectionElement: string) {
    const section = document.getElementById(sectionElement)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })  
    }
  }

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" onClick={handleLogoClick} />
        <nav>
          <ul>
            <li><NavLink to="/#" title="Início">Início</NavLink></li>
            <li>
            <NavLink to="/#" onClick={() => handleScrollToFeatures("funcionalidades")} title="Funcionalidades">
              Funcionalidades
            </NavLink>
            </li>
            <li><NavLink to="/cadastro" title="Cadastre-se">Cadastre-se</NavLink></li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}

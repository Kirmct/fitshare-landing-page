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
            <li>
              <button onClick={() => handleScrollToFeatures("inicio")} title="Início">
                Início
              </button>
            </li>
            
            <li>
              <button onClick={() => handleScrollToFeatures("funcionalidades")} title="Funcionalidades">
                Features
              </button>
            </li>
            <li>
              <NavLink to="https://modohype.com.br/category/originais/fitshare/" title="ModoHype">
                ModoHype
              </NavLink>
            </li>
            <li>
              <button onClick={() => handleScrollToFeatures("cadastro")} title="Cadastre-se" className='active'>
                Cadastro
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}

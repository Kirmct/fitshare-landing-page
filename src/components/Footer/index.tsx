import { NavLink, useNavigate } from 'react-router-dom'
import { FooterContaier } from './styles'

import logo from '../../assets/logo.svg'

import {
  LinkedinLogo,
  FacebookLogo,
  InstagramLogo,
} from '@phosphor-icons/react'

export const Footer = () => {
  const navigate = useNavigate()
  function handleLogoClick() {
    navigate('/')
  }
  return (
    <FooterContaier>
      <div className="footerContent">      
        <nav className="footerMenu">
        <img src={logo} alt="" onClick={handleLogoClick} />
          <ul>
            <li>
              <NavLink to="/" title="Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/funcionalidades" title="Funcionalidades">
              Funcionalidades
              </NavLink>
            </li>
            <li>
              <NavLink to="/cadastro" title="Cadastre-se">
              Cadastre-se
              </NavLink>
            </li>
            <li>
              <NavLink to="/suporte" title="Suporte">
              Suporte
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footerLinks">
          <InstagramLogo size={32} color="white" />
          <FacebookLogo size={32} color="white" />
          <LinkedinLogo size={32} color="white" />
        </div>
        
      </div>
      <p>Copyright © 2024 FitShare. Todos os direitos reservados.</p>
    </FooterContaier>
  )
}

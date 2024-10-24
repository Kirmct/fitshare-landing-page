// src/components/MenuHamburguer/index.tsx
import { useState } from 'react'
import { HamburguerButton, MobileMenu } from './style'
import { NavLink } from 'react-router-dom'

export const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HamburguerButton onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </HamburguerButton>
      {isOpen && (
        <MobileMenu>
          <ul>
            <li><NavLink to="/" title="Início">Início</NavLink></li>
            <li><NavLink to="/pessoa-usuaria" title="Funcionalidades">Funcionalidades</NavLink></li>
            <li><NavLink to="/profissional" title="Planos">Planos</NavLink></li>
            <li><NavLink to="/profissional" title="Blog">Blog</NavLink></li>
            <li><NavLink to="/profissional" title="Suporte">Suporte</NavLink></li>
            <li><NavLink to="/profissional" title="Cadastre-se">Cadastre-se</NavLink></li>
          </ul>
        </MobileMenu>
      )}
    </>
  )
}

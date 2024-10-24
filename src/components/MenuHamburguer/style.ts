// src/components/MenuHamburguer/style.ts
import styled from 'styled-components'

export const HamburguerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  div {
    width: 100%;
    height: 0.25rem;
    background: ${(props) => props.theme['white']};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 600px) {
    display: flex;
  }
`

export const MobileMenu = styled.nav`
  position: absolute;
  top: 4rem;
  right: 0;
  width: 100%;
  background-color: ${(props) => props.theme['primary-color']};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li a {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${(props) => props.theme['white']};
      text-align: center;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`

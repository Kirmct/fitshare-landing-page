import styled from 'styled-components'
import { ColorChoose } from '../Features/styles'

export type ButtonVariant = 'primary-color' | 'secondary-color' | 'transparent'
export type ButtonColor = 'white' | 'black'

interface ButtonContainerProps {
  variant: ColorChoose
  textColor: ButtonColor
  hasBorder: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  max-width: 10rem;
  padding: 0 2rem;
  height: 2.5rem;
  font-weight: 700;
  font-size: .85rem;
  transition: 0.2s;

  background: ${(props) => props.theme[props.variant]};

  color: ${(props) => props.theme[props.textColor]};

  color: ${(props) => (props.textColor === 'white' ? 'white' : 'black')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`

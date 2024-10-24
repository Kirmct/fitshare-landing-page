import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'transparent' | 'white';
export type ButtonColor = 'white' | 'black';

interface ButtonIconContainerProps {
  variant: ButtonVariant;
  textColor: ButtonColor;
  android: boolean;
  hasBorder: boolean;
}

export const ButtonIconContainer = styled.button<ButtonIconContainerProps>`
  display: flex;
  align-items: center;  /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente o conteúdo do botão */
  padding: 0.5rem 1rem;  /* Ajuste o padding conforme necessário */
  min-width: 12rem; 
  height: 3.5rem;  
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s;
  background: ${(props) =>
    props.variant === 'primary'
      ? `${props.theme['secondary-color']}`
      : `${props.theme.white}`};
  color: ${(props) => (props.textColor === 'white' ? 'white' : 'black')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  border:none;

  &:hover {
    scale: 1.01;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  /* Centraliza o ícone */
  margin-right: 0.75rem;

  img {
    width: 1.5rem;  /* Ajuste conforme o tamanho do ícone */
    height: 1.5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Centraliza verticalmente o texto */
  text-align: left;  /* Ajusta o alinhamento horizontal conforme necessário */
`;

export const ContentText = styled.span<{ textColor: ButtonColor }>`
  font-size: 0.75rem;
  color: ${(props) => (props.textColor === 'white' ? 'white' : 'black')};
  font-weight: normal;
  text-align: left;  /* Ajusta o alinhamento do texto */
`;

export const TitleText = styled.span<{ textColor: ButtonColor }>`
  font-size: 1.075rem;
  font-weight: bold;
  color: ${(props) => (props.textColor === 'white' ? 'white' : 'black')};
  margin-top: -0.25rem;
  text-align: left;  /* Ajusta o alinhamento do texto */
`;

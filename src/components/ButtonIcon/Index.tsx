import { useCallback } from 'react';
import { ButtonIconContainer, ButtonVariant, ButtonColor, IconWrapper, TextContainer, ContentText, TitleText } from './styles';
// Importando os ícones da pasta assets
import googlePlayIcon from '../../assets/googlePlayLogo.svg';
import appStoreIcon from '../../assets/appleLogo.svg';

interface ButtonProps {
  variant?: ButtonVariant;
  content: string;
  title: string;
  textColor?: ButtonColor;
  android: boolean;
  url: string;  
}

export const ButtonIcon = ({
  variant = 'primary',
  content,
  title,
  textColor = 'white',
  android = true,
  url,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [url]);

  return (
    <ButtonIconContainer
      onClick={handleClick}
      variant={variant}
      textColor={textColor}
      hasBorder
      android={android}
      type="button" 
    >
      <IconWrapper>
        {/* Verifica se é Android ou iOS e usa o ícone adequado */}
        <img src={android ? googlePlayIcon : appStoreIcon} alt={android ? 'Google Play' : 'App Store'} />
      </IconWrapper>
      <TextContainer>
        <ContentText textColor={textColor}>{content}</ContentText>
        <TitleText textColor={textColor}>{title}</TitleText>
      </TextContainer>
    </ButtonIconContainer>
  );
};

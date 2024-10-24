import styled from 'styled-components';
export type TextColor = 'white' | 'black';

interface CircleContentProps {
  backgroundImg: string;
  textColor: TextColor;
}

export const ChooseContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;

  h1 {
    color: ${(props) => props.theme['primary-color']};
  }

  .circle-area {
    display: flex;
    flex-wrap: wrap;  
    justify-content: center; 
    max-width: 100%; 
    gap: 1rem;
  }
`;

export const CircleContent = styled.div<CircleContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${(props) => (props.textColor === 'white' ? 'white' : 'black')};
  flex-shrink: 0;
  flex-grow: 0;
  padding: 0;
  margin: 0;

  span {
    font-size: 0.75rem;
    max-width: 16ch;
    z-index: 1;
    position: relative;
    padding: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
  }
`;
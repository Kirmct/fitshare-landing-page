import styled from 'styled-components'

interface HomeContainerProps {
  backgroundHome: string;  
}

export const HomeContaier = styled.main<HomeContainerProps>`
  background-image: url('${({backgroundHome}) => backgroundHome}');
  background-size: cover;
  padding: 2rem 2rem 6rem 2rem;

  .container {
    display: flex;
    max-width: 1200px;
    align-items: flex-end;
    justify-content: space-between;
    gap: 3rem;
    margin: 0 auto;
    
    section {
      flex: 1;
      max-width: 550px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: .75rem;
      height: 400px;

      h1 {
        font-size: 2.75rem;
        max-width: 30ch;
        font-weight: bold;
        color: ${(props) => props.theme['secondary-color']};
      }

      p {
        font-size: 1.5rem;
        max-width: 35ch;
        color: ${(props) => props.theme.white};

      }

      .divBtn {
        display: flex;
        gap: 1.5rem;
      }
    }

    .divSvg {
      img {
        width: 100%;
        max-height: 50vh;
        display: block;
      }
    }
  }
  @media (max-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    .container {
      flex-direction: column;
      section {
        margin: 0 auto;
        justify-content: space-around;
        height: 250px;
        gap: 1.5rem;
      }
    }
  }

  @media (max-width: 570px) {
    .container section h1 {
      font-size: 2rem;
    }
    .container section p {
      font-size: 0.875rem;
    }
    .divBtn {
      gap: 2rem 0;
      flex-direction: column;
      align-items: center;
    }
  }
`

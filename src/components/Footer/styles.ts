import styled from 'styled-components'

export const FooterContaier = styled.footer`
  padding: 0 1rem 1rem 1rem;
  background-color: ${(props) => props.theme['primary-color']};  
  
  img{
    margin: 0 0 1.5rem 0;
  }

  .footerContent {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;
    display:flex;
    justify-content: space-between;
    padding-right: 8rem;
    flex-wrap: wrap;
    .footerMenu ul {
      display: flex;
      flex-direction: column;
      gap: .75rem;
      
      li a {
        font-size: 1rem;
        transition: 0.2s;
        color: ${(props) => props.theme.white};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
          opacity: 0.8;
        }

        &.active {
          font-weight: 700;
          color: ${(props) => props.theme['secondary-color']};
        }
      }
    }

    .footerLinks {
      margin-top: 1rem;
      display: flex;
      gap: 2rem;

      svg {
        cursor: pointer;
        transition: 0.1s;
        &:hover {
          opacity: 0.7;
        }
      }
    }   

    @media (max-width: 1000px) {
      padding: 1.5rem 2rem;
    }
    @media (max-width: 500px) {
      .footerMenu ul {
        flex-direction: column;
        gap: 0.875rem;
      }
    }
  }
     p {
      margin-top: 1rem;
      color: ${(props) => props.theme.white};
      text-align: center;
    }
`

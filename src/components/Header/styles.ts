import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0.75rem 3rem;
  background-color: ${(props) => props.theme['primary-color']};

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    img {
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    nav {
      color: ${(props) => props.theme['white']};

      ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 2.5rem;

        /* Estilos para links e botões */
        li {
          a, button {
            font-size: 1rem;
            font-weight: 600;
            color: ${(props) => props.theme['white']};
            transition: 0.2s;
            background: none;
            border: none;
            cursor: pointer;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            padding: 0.5rem;

            &:hover {
              opacity: 0.8;
            }
          }

          /* Estilo específico para links ativos */
          a.active {
            background-color: ${(props) => props.theme['secondary-color']};
            padding: 1px 12px;
            border-radius: 1rem;
            color: ${(props) => props.theme['tertiary-color']};
          }

          button.active {
            background-color: ${(props) => props.theme['secondary-color']};
            padding: 1px 12px;
            border-radius: 1rem;
            color: ${(props) => props.theme['tertiary-color']};
          }
        }
      }
    }
  }

  /* Responsividade */
  @media (max-width: 700px) {
    div {
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      nav ul {
        gap: 0.875rem;
      }
    }
  }
`

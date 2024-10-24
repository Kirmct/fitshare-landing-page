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

    span {
      color: ${(props) => props.theme['secondary-color']};
      font-weight: bold;
      font-size: 2rem;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    nav {
      color: ${(props) => props.theme['white']};
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        gap: 2.5rem;

        li a {
          font-size: 1rem;
          font-weight: 600;
          transition: 0.2s;

          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;

          &:hover {
            opacity: 0.8;
          }

          &.active {
            background-color: ${(props) => props.theme['secondary-color']};
            padding: 1px 12px;
            border-radius: 1rem;
            color: ${(props) => props.theme['tertiary-color']};
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    div {
      justify-content: center;
      flex-direction: column;
      gap:1rem;
      nav ul {
        gap: 0.875rem;
      }
    }
  }
`

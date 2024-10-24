import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 100vw;

  background: ${(p) => p.theme.white};

  display: flex;
  flex-direction: column;
  @media (max-width: 570px) {
    gap: 0;
  }
`

import styled from 'styled-components'

export const DevicesContaier = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(p) => p.theme['background-color-cold']};
        padding: 3rem;
        
        h3{
            margin-bottom: 1rem;
            color: ${(p) => p.theme['tertiary-color']};
        }

        .logoArea{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            img{
                width: 7rem;
            }
        }
`
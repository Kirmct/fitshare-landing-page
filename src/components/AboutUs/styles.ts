import styled from 'styled-components'

export const AboutUsContainer = styled.section`
    display: flex;
    padding: 2rem;


    .container{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

         .divSvg {
            img {
                width: 100%;
                height: 10rem;
                display: block;
            }
        }

        
        .about{
            display: flex;
            flex-direction: column;
            gap: .75rem;

            h1{
                color: ${(props) => props.theme['primary-color']};
            }

            p{
                max-width: 50ch;
                font-size: .75rem;
            }
        }
    }
`
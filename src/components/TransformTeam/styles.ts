import styled from 'styled-components'

interface HomeContainerProps {
  backgroundHome: string;  
}

export const TransformContainer = styled.section`
    padding: 3rem;
    h2{
        font-size: 1.3rem;
        color: ${(props) => props.theme['primary-color']};
        margin-bottom: 2rem;
        text-align: center;
    }

    .content{
        display: flex;
        flex-wrap: wrap;
        align-item: flex-start;
        justify-content: center;
        gap: 2rem;

        .card{
            display: flex;
            gap: .785rem;

            img{
                max-width: 3rem;
            }
            .cardText{
                display: flex;
                flex-direction: column;
                gap: .3rem;
                max-width: 40ch;    
                
                h4{
                    color : ${(props) => props.theme['tertiary-color']};
                }

                span{
                    font-size: .785rem;
                }
            }
        }
    }

`
import styled from 'styled-components'

interface PartnersContainerProps {
  imgTop: string;  
}

export const PartnersContainer = styled.section<PartnersContainerProps>`
       
    // .imgTop{
    //     background-image: url('${({imgTop}) => imgTop}');
    //     height: 30px;
    //     background-size: cover;
    // }

    .content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        // background-color: ${(props) => props.theme['background-color-cold-light']};
        padding: 3rem 2rem;

        .contentHeader{
            h3{
                color: ${(props) => props.theme['tertiary-color']}
            }
        }

        .contentBody{
            display: flex;
            gap: 2rem;
            img{
                height: 2rem;
                display: block;
            }
        }
    }


`
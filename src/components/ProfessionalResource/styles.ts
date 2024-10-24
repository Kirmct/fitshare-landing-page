import styled from 'styled-components'

interface ResourceContainerProps{
    imgTop: string;
    imgBottom: string;
}

export const ResourceContainer = styled.section<ResourceContainerProps>`
 .imgTop{
        background-image: url('${({imgTop}) => imgTop}');
        height: 65px;
        background-size: cover;
    }

     .imgBottom{
        background-image: url('${({imgBottom}) => imgBottom}');
        height: 65px;
        background-size: cover;
    }

    .content{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        background-color: ${(props) => props.theme['background-color-warn']};
        padding: 3rem 2rem;

        .contentLeft{
            max-width: 50%;
            display: flex;
            flex-direction: column;
            gap: .75rem;

            h3{
                color: ${(props) => props.theme['primary-color']};
                max-width: 36ch;
            }

            p{
                font-size: .785rem;
                max-width: 52ch;
            }
        }

        .contentRight{
            

            .card{
                display: flex;
                gap: .75rem;
                padding: .5rem 2rem;
                .cardContent{
                    h4{
                        color: ${(props) => props.theme['tertiary-color']};                    
                    }

                    span{
                        font-size: .785rem;
                    }
                }
            }
        }
    }

`
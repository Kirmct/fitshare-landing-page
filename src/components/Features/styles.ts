import styled from 'styled-components';
export type ColorChoose = 'primary-color' | 'secondary-color' | 'tertiary-color';

interface FeatureContainerProps {
  topImage: string;
}

interface ContentCardContainerProps{
    color: ColorChoose;
}

interface ContentCardIconProps {
    bgColor: ColorChoose;
}



export const FeatureContainer = styled.section<FeatureContainerProps>`    
    .imgTop{
        background-image: url('${({topImage}) => topImage}');
        height: 65px;
        background-size: cover;
    }

    .content{
        background-color: ${(props) => props.theme['background-color-cold']};
        margin-top: -4px;
        padding: 3rem;
        
        h1{
            text-align: center;
            color: ${(props) => props.theme['primary-color']};
            margin-bottom: 2rem;
        }

        .contentBody{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }
    }
`

export const ContentCardContainer = styled.div<ContentCardContainerProps>`
    display: flex;
    align-items: center;
    .contentCardContainerBody{
        margin-left: 8px;
        max-width: 35ch;
        h4{
            font-size: 1rem;
            color: ${(props) => props.theme[props.color]};
        }

        span{
            font-size: .75rem;            
        }
    }
`


export const ContentCardIcon = styled.div<ContentCardIconProps>`
  height: 3rem;
  background-color: ${(props) => props.theme[props.bgColor]};
  border-radius: 50%;

  img{
    padding: 8px;
    min-width: 100%;
    height: 3rem;
    display: block;
  }
`;

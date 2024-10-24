import { ChooseContainer, CircleContent } from './styles'
import circle1 from '../../assets/c1.svg'
import circle2 from '../../assets/c2.svg'

export const Choose = () => {
    return (
        <ChooseContainer>
            <h1>Por que escolher a FitShare?</h1>
            <div className='circle-area'>

                <CircleContent 
                    backgroundImg={circle1}
                    textColor='white'>
                        <span>Comunidade ativa que motiva você a seguir em frente</span>
                </CircleContent >

                <CircleContent 
                    backgroundImg={circle2}
                    textColor='black'>
                        <span>Recompensas personalizadas para cada objetivo atingido</span>
                </CircleContent >


                <CircleContent 
                    backgroundImg={circle1}
                    textColor='white'>
                        <span>Experiência totalmente integrada com dispositivos de fitness</span>
                </CircleContent >


                <CircleContent 
                    backgroundImg={circle2}
                    textColor='black'>
                        <span>Ferramentas profissionais para treinadores monitorarem o progresso de seus clientes</span>
                </CircleContent >


                
            </div>
        </ChooseContainer>
    );    
}
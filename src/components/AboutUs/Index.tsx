import {AboutUsContainer} from './styles'
import { Button } from '../Button'

import logo from '../../assets/logo2.svg'

export const AboutUs = () => {
  return (
    <AboutUsContainer>
        <div className='container'>      

        <div className="divSvg">
          <img src={logo} alt="" />
        </div>

        <div className="about">
          <h1>Quem somos</h1>
          <p>A FitShare é uma plataforma social voltada para a prevenção em saúde através da motivação fitness que combina gamificação, inteligência artificial (IA) e uma comunidade de usuários para incentivar e motivar seus membros a alcançar seus objetivos de saúde e bem-estar.</p>
            <Button
                variant='primary-color' 
                textColor='white' 
                content='Saiba Mais' 
                url='/'/>
        </div>


        </div>
    </AboutUsContainer>
  )
}

import { ResourceContainer } from "./styles"
import imagemTop from '../../assets/yellowTop.svg'
import imagemBottom from '../../assets/yellowBottom.svg'
import { Button } from "../Button"
import chartBlue from "../../assets/chartBlue.svg"
import medalBlue from "../../assets/medalBlue.svg"
import paperBlue from "../../assets/paperBlue.svg"


export const ProfessionalResources = () => {
    return (
      <ResourceContainer 
        imgTop={imagemTop} 
        imgBottom={imagemBottom}>
            <div className="imgTop"/>
            <div className="content">
                <div className="contentLeft">
                    <h3>Recursos exclusivos para profissionais de Fitness</h3>
                    <p>A FitShare oferece uma plataforma completa para profissionais monitorarem e motivarem seus clientes de forma eficiente. Controle o progresso, crie desafios e ofereça feedback diretamente através da plataforma</p>
                
                    {/* <Button
                        variant='secondary-color' 
                        textColor='black' 
                        content='Conheça mais' 
                        url='/'/> */}
                </div>

                <div className="contentRight">

                    <div className="card">
                        <img src={chartBlue} alt="" />
                        <div className="cardContent">
                            <h4>Monitoramento de Clientes</h4>
                            <span>Acompanhe o desempenho dos seus clientes em tempo real</span>
                        </div>
                    </div>

                    <div className="card">
                        <img src={medalBlue} alt="" />
                        <div className="cardContent">
                            <h4>Desafios Personalizados</h4>
                            <span>Crie desafios exclusivos para motivar seu grupo de clientes</span>
                        </div>
                    </div>

                    <div className="card">
                        <img src={paperBlue} alt="" />
                        <div className="cardContent">
                            <h4>Relatórios Avançados</h4>
                            <span>Receba relatórios detalhados sobre o progresso de cada cliente</span>
                        </div>
                    </div>


                </div>
            </div>
            <div className="imgBottom"/>
      </ResourceContainer>
    )
  }
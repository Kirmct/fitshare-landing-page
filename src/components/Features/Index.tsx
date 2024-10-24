import { ContentCardContainer, ContentCardIcon, FeatureContainer } from "./styles"
import imageTop from "../../assets/topBlue.svg"
import peopleIcon from "../../assets/people.svg"
import gameIcon from "../../assets/gameIcon.svg"
import chartIcon from "../../assets/chartIcon.svg"
import camIcon from "../../assets/camIcon.svg"
import gearIcon from "../../assets/gearIcon.svg"

export const Features = () => {
  return (        
        <FeatureContainer  topImage={imageTop} id="funcionalidades">
            <div className="imgTop"/>
            <div className="content">
                <h1>Nosas principais funcionalidades</h1>
                <div className="contentBody">
                    <ContentCardContainer color="tertiary-color">
                        <ContentCardIcon bgColor="secondary-color">
                            <img src={peopleIcon} alt="" />
                        </ContentCardIcon>

                        <div className="contentCardContainerBody">
                            <h4>Comunidade</h4>
                            <span>Conecte-se com amigos, compartilhe suas conquistas e encontre suporte 
                                em cada etapa da sua jornada."</span>
                        </div>
                    </ContentCardContainer>

                    <ContentCardContainer color="tertiary-color">
                        <ContentCardIcon bgColor="tertiary-color">
                            <img src={gameIcon} alt="" />
                        </ContentCardIcon>

                        <div className="contentCardContainerBody">
                            <h4>Gameficação</h4>
                            <span>Participe de desafios e ganhe recompensas enquanto melhora seu desempenho.</span>
                        </div>
                    </ContentCardContainer>

                    <ContentCardContainer color="primary-color">
                        <ContentCardIcon bgColor="primary-color">
                            <img src={chartIcon} alt="" />
                        </ContentCardIcon>

                        <div className="contentCardContainerBody">
                            <h4>Monitoramento em tempo real</h4>
                            <span>Integre-se com dispositivos de fitness para obter dados precisos e manter o foco nos seus objetivos.</span>
                        </div>
                    </ContentCardContainer>

                    <ContentCardContainer color="secondary-color">
                        <ContentCardIcon bgColor="secondary-color">
                            <img src={camIcon} alt="" />
                        </ContentCardIcon>

                        <div className="contentCardContainerBody">
                            <h4>Personalização com IA</h4>
                            <span>Receba recomendações de treino e desafios personalizados de acordo com o seu progresso.</span>
                        </div>
                    </ContentCardContainer>

                    <ContentCardContainer color="tertiary-color">
                        <ContentCardIcon bgColor="tertiary-color">
                            <img src={gearIcon} alt="" />
                        </ContentCardIcon>

                        <div className="contentCardContainerBody">
                            <h4>Versão profissional</h4>
                            <span>Ferramentas avançadas para profissionais de fitness monitorarem o progresso de seus clientes.</span>
                        </div>
                    </ContentCardContainer>
                </div>
            </div>
        </FeatureContainer>
  )
}

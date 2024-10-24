import { TransformContainer } from "./styles"
import heartBlue from "../../assets/heartBlue.svg"
import gameBlue from "../../assets/gameBlue.svg"
import chartBlue from "../../assets/chartBlue.svg"
import trophyBlue from "../../assets/trophyBlue.svg"
import moneyBlue from "../../assets/moneyBlue.svg"

export const TransformSection = () => {
    return (
      <TransformContainer>
        <h2>Transforme o bem-estar da sua equipe com o FitShare</h2>

        <div className="content">
            <div className="card">
                <img src={heartBlue} alt="" />
                <div className="cardText">
                    <h4>Incentive a saúde e produtividade</h4>
                    <span>Proporcione aos seus colaboradores uma ferramenta poderosa para se manterem ativos, saudáveis e motivados, promovendo um ambiente de trabalho mais produtivo</span>
                </div>
            </div>

            <div className="card">
                <img src={gameBlue} alt="" />
                <div className="cardText">
                    <h4>Desafios e gamificação personalizados</h4>
                    <span>Crie desafios corporativos que incentivem a interação, colaboração e competição saudável entre equipes, aumentando o engajamento</span>
                </div>
            </div>

            <div className="card">
                <img src={chartBlue} alt="" />
                <div className="cardText">
                    <h4>Monitoramento e relatórios de progresso</h4>
                    <span>Tenha acesso a relatórios detalhados sobre a participação e evolução dos colaboradores, auxiliando no desenvolvimento de iniciativas de bem-estar mais eficazes</span>
                </div>
            </div>

            <div className="card">
                <img src={trophyBlue} alt="" />
                <div className="cardText">
                    <h4>Programas de recompensa</h4>
                    <span>Ofereça incentivos para colaboradores que atingirem suas metas de saúde, fortalecendo o sentimento de valorização e motivação contínua</span>
                </div>
            </div>

            <div className="card">
                <img src={moneyBlue} alt="" />
                <div className="cardText">
                    <h4>Impacto na receita e redução de custos</h4>
                    <span>A promoção da saúde no ambiente corporativo não só melhora a produtividade da equipe, mas também pode reduzir significativamente os custos com planos de saúde e afastamentos, gerando um impacto positivo na receita da empresa.</span>
                </div>
            </div>
        </div>


      </TransformContainer>
    )
  }
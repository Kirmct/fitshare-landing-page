import { DevicesContaier } from "./styles"
import googleFit from '../../assets/googleFitLogo.svg'
import appleFit from '../../assets/appleFitnessLogo.svg'
import fitBit from '../../assets/fitlibLogo.svg'
import samsumgHealth from '../../assets/samsumgHealthLogo.svg'

export const DevicesSection = () => {
    return (
      <DevicesContaier>
            <h3>Compatível com seus dispositivos favoritos</h3>
            <div className="logoArea">
                <img src={googleFit} alt="" />
                <img src={appleFit} alt="" />
                <img src={fitBit} alt="" />
                <img src={samsumgHealth} alt="" />
            </div>
      </DevicesContaier>
    )
  }

import { PartnersContainer } from './styles'
import imageTop from '../../assets/partnersTop.svg'
import fitbitLogo from '../../assets/fitlibLogo.svg'
import samsumgHealthLogo from '../../assets/samsumgHealthLogo.svg'

export const Partners = () => {
    return (
        <PartnersContainer imgTop={imageTop}>
            <div className='imgTop'/>
            <div className='content'>
                <div className='contentHeader'>
                    <h3>Nossos parceiros</h3>
                </div>
                <div className='contentBody'>
                    <img src={fitbitLogo} alt="" />
                    <img src={samsumgHealthLogo} alt="" />
                </div>
            </div>
        </PartnersContainer>
    )
}
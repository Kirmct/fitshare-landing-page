import { ButtonIcon } from '../../components/ButtonIcon/Index'
import { HomeContaier } from './styles'
import homeCell from '../../assets/home-cell.svg'
import homeBg from '../../assets/home-bg.png'

export const MainContent = () => {
  return (
    <HomeContaier backgroundHome={homeBg}>
      <div className="container">
        <section>
          <h1>Cada movimento conta</h1>
          <p>Transforme sua jornada fitness em uma experiência social</p>

          <div className="divBtn">
            <ButtonIcon
              content="DISPONÍVEL NO"
              title="Google Play"
              variant="white"
              textColor="black"
              android
              url="/"
            />
             <ButtonIcon
              content="BAIXAR NA"
              title="App Store"
              variant="white"
              textColor="black"
              android={false}
              url="/"
            />
          </div>
        </section>

        <div className="divSvg">
          <img src={homeCell} alt="" />
        </div>
      </div>      
    </HomeContaier>
  )
}

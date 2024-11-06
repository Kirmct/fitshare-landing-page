import { MainContent } from '../../components/MainContent/Index'
import { AboutUs } from '../../components/AboutUs/Index'
import { Choose } from '../../components/ChooseFitshare/Index'
import { Features } from '../../components/Features/Index'
import { ProfessionalResources } from '../../components/ProfessionalResource/Index'
import { TransformSection } from '../../components/TransformTeam/Index'
import { Partners } from '../../components/Partners/Index'
import { DevicesSection } from '../../components/DevicesSection/Index'
import { TalkToUs } from '../../components/TalkToUsSection'

export const Home = () => {
  return (
    <div>
    <MainContent/>
    <AboutUs/>
    <Features/>
    <Choose/>
    <ProfessionalResources/>
    <TransformSection/>
    <TalkToUs/>
    <Partners/>
    <DevicesSection/>
    </div>
  )
}

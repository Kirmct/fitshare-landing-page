import { Header } from '../../components/Header/index'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Footer } from '../../components/Footer'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}

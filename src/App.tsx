import Footer from './components/Footer'
import AppRoutes from './routes'
import EstiloGlobal, { MainContainer } from './styles'

function App() {
  return (
    <>
      <MainContainer>
        <EstiloGlobal />
        <AppRoutes />
      </MainContainer>
      <Footer />
    </>
  )
}

export default App

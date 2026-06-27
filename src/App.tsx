import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { MainContainer } from './styles'

import Home from './pages/Home'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <MainContainer>
        <EstiloGlobal />
        <RouterProvider router={rotas} />
      </MainContainer>
      <Footer />
    </>
  )
}

export default App

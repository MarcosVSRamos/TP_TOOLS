import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import EstiloGlobal, { MainContainer } from './styles'

import Home from './pages/Home'
import { Provider } from 'react-redux'
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

import { HeaderContainer } from './styles'
import { FaCalculator } from 'react-icons/fa'

const Header = () => {
  return (
    <HeaderContainer>
      <span className="icon">
        <FaCalculator />
      </span>
      <h2>
        CALCULADORA <span>ANTT</span>
      </h2>
    </HeaderContainer>
  )
}

export default Header

import { HeaderContainer } from './styles'
import { FaCalculator } from 'react-icons/fa'

type Props = {
  inconeHeader: React.ReactNode
  tituloHeader: React.ReactNode
}

const Header = ({ inconeHeader, tituloHeader }: Props) => {
  return (
    <HeaderContainer>
      <span className="icon">{inconeHeader}</span>
      <h2>{tituloHeader}</h2>
    </HeaderContainer>
  )
}

export default Header

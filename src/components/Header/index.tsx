import { HeaderContainer } from './styles'

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

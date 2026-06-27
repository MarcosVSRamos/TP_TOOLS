import { ButtonContainer } from './styles'

type Props = {
  onClick: () => void
}

const Button = ({ onClick }: Props) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>Calcular Tarifa</button>
    </ButtonContainer>
  )
}

export default Button

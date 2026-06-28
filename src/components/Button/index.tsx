import { ButtonContainer } from './styles'

type Props = {
  onClick: () => void
  nomeButtom: string
}

const Button = ({ onClick, nomeButtom }: Props) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>{nomeButtom}</button>
    </ButtonContainer>
  )
}

export default Button

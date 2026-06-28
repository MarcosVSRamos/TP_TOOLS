import { ButtonContainer } from './styles'
import { FaCalculator } from 'react-icons/fa'

type Props = {
  onClick: () => void
  nomeButtom: string
}

const Button = ({ onClick, nomeButtom }: Props) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>
        <>
          <FaCalculator />
          <p>{nomeButtom}</p>
        </>
      </button>
    </ButtonContainer>
  )
}

export default Button

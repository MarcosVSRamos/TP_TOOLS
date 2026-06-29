import { ButtonContainer } from './styles'
import { FaCalculator } from 'react-icons/fa'

type Props = {
  onClick: () => void
  nomeButtom: string
  icon: React.ReactNode
}

const Button = ({ onClick, nomeButtom, icon }: Props) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>
        <>
          {icon}
          <p>{nomeButtom}</p>
        </>
      </button>
    </ButtonContainer>
  )
}

export default Button

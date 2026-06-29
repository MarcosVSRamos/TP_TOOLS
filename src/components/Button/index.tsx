import { ButtonContainer } from './styles'

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

import { InputContainer } from './styles'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, onChange }: Props) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        type="number"
        placeholder="Digite a distância em Km"
      />
    </InputContainer>
  )
}

export default Input

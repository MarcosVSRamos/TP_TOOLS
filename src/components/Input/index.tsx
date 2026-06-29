import { InputContainer } from './styles'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
}

const Input = ({ value, onChange, type, placeholder }: Props) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}

export default Input

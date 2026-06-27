import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const InputContainer = styled.div`
  display: flex;
  margin: 16px 0px;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 32px;
  border-radius: 6px;

  input {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    color: ${variaveis.textoSecundario};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
    margin-bottom: 32px;
    height: 28px;

    input {
      font-size: 12px;
    }
  }
`

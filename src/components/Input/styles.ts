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
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    color: ${variaveis.textoPrincipal};
    background-color: ${variaveis.corDeFundoCard};
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 7px 17px rgba(0, 0, 0, 0.43);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
    margin-top: 16px;
    margin-bottom: 8px;
    height: 28px;

    input {
      font-size: 12px;
    }
  }
`

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 32px;
  border-radius: 6px;
  margin-bottom: 18px;
  cursor: pointer;

  button {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0 auto;
    cursor: pointer;
    font-size: 16px;
    border-radius: 6px;
    color: ${variaveis.textoPrincipal};
    background-color: ${variaveis.corAmarelaParaFundo};
    backdrop-filter: blur(8px);
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.49);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
    margin-bottom: 16px;
    height: 28px;

    input {
      font-size: 12px;
    }
`

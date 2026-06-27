import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${variaveis.corDeFundo};

  button {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0 auto;
    cursor: pointer;
    font-size: 26px;
    font-weight: bold;
    border-radius: 6px;
    background-color: ${variaveis.corDeFundo};
  }
`

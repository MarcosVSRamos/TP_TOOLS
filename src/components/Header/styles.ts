import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 16px;
  border-bottom: 1px solid ${variaveis.corDeFundo};

  h1 {
    width: 100%;
    height: 100%;
    color: ${variaveis.textoSecundario};
    font-weight: 900;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 8px;
    h1 {
      font-size: 18px;
    }
  }
`

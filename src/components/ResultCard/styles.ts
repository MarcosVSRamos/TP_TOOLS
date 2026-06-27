import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ResultContainer = styled.ul`
  p {
    color: ${variaveis.textoSecundario};
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    li {
      align-items: center;
      text-align: center;
      justify-content: space-between;
      gap: 22px;
      width: 100%;
      margin-top: 16px;
      display: flex;
      border-bottom: 1px solid ${variaveis.textoSecundario};
    }
  }

  @media (max-width: 768px) {
    p {
      display: flex;
      align-items: center;
      font-size: 12px;
    }
  }
`

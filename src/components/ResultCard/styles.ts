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

    li {
      align-items: center;
      text-align: center;
      justify-content: space-between;
      gap: 22px;
      width: 100%;
      margin-top: 16px;
      display: flex;
      border-top: 1px solid ${variaveis.textoSecundario};
      padding-top: 8px;
    }

    .div-edicao {
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
      margin top;
      border-bottom: 1px solid ${variaveis.textoSecundario};
      padding-bottom: 8px;
      width: 100%;

      button {
        text-color: ${variaveis.textoSecundario};
        color: ${variaveis.textoSecundario};
        width: 80px;
        height: 22px;
        margin-top: 4px;
        margin-left: 8px;
        margin-right: 28px;
        background-color: ${variaveis.corDeFundoSecundaria};
        border: 1px solid ${variaveis.textoSecundario};

      }

      input {
        text-color: ${variaveis.textoSecundario};
        color: ${variaveis.textoSecundario};
        max-width: 130px;
        height: 22px;
        background-color: ${variaveis.corDeFundoCard};
        border: 1px solid ${variaveis.textoSecundario};
        margin-top: 4px;
        font-weight: bold;
        text-align: center;
      }
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

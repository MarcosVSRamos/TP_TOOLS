import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ResultContainer = styled.ul`

  .div-principal {
    display: flex;
    border-bottom: 1px solid ${variaveis.tracoSecundario};
    align-items: center;
    gap: 22px;
    width: 100%;

    @media (max-width: 768px) {

    gap: 12px;

    .titulos-secundarios {
      font-size: 8px;
    }
  }

    p {
    color: ${variaveis.textoSecundario};
    font-size: 12px;
    white-space: nowrap;
    }

    .resultado {
      font-weight: bold;
      font-size: 18px;
      margin-top: 6px;
      color: ${variaveis.corAmarela};

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    .coluna-um {

      width: 33%;
      padding: 8px;

      .composition {
        font-size: 18px;
        margin-bottom: 6px;
        font-weight: bold;
        color: ${variaveis.textoPrincipal};

        @media (max-width: 768px) {
        font-size: 8px;
      }
      }

      .edicao {
        flex-direction: row;
        align-items: center;
        margin: 0 auto;
        margin top;
        padding-bottom: 8px;
        width: 100%;

        button {
          height: 22px;
          padding: 2px;
          min-width: 32px;
          background-color: ${variaveis.corDeFundoSecundaria};
          border: 1px solid ${variaveis.corAmarela};
          border-radius: 4px;
          font-size: 12px;

          a {

          display: flex;
          align-items: center;
          text-align: center;
          gap: 4px;
          margin: 0 2px;

          span {
            color: ${variaveis.corAmarela};
          }

          }

          @media (max-width: 768px) {
            padding: 2px;
            min-width: 28px;

            a {

              span{
                font-size: 8px;
              }

            }

          }
        }

        input {
        text-color: ${variaveis.textoSecundario};
        color: ${variaveis.textoSecundario};
        width: 80px;
        height: 22px;
        background-color: ${variaveis.corDeFundoCard};
        border: 1px solid ${variaveis.textoSecundario};
        margin-top: 5px;
        margin-left: 8px;
        font-weight: bold;
        text-align: center;

          @media (max-width: 768px) {
          width: 50px;
          font-size: 8px;
          margin-left: 2px;
          }
        }

        @media (max-width: 768px) {
          white-space: nowrap;
        }

      }
    }

    .coluna-dois {

    position: relative;
    width: 33%;
    padding: 8px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 15%;
      height: 70%;
      width: 1px;
      background-color: ${variaveis.tracoSecundario};
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
    padding: 0 12px;

      .incone-dinheiro {
        color: ${variaveis.corAmarela};
        margin-right: 4px;
      }
    }

    .coluna-tres {

      width: 33%;
      padding: 8px;

      .incone-peso{
        margin-right: 6px;
      }

    }


    li {
      align-items: center;
      text-align: center;
      justify-content: space-between;
      gap: 22px;
      width: 100%;
      margin-top: 16px;
      display: flex;
      padding-top: 8px;

    }
    }
  }

`

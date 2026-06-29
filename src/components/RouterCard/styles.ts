import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 40px;
  width: 70%;
  max-width: 660px;
  min-height: 300px;
  padding: 28px;
  border-radius: 16px;
  background-color: ${variaveis.corDeFundoCard};
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  position: relative;

  .card-base {
    border-radius: 8px;
    padding: 10px;
    margin: 0 auto;
    margin-bottom: 6px;
    background-color: ${variaveis.corDeFundoCard};
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);

    @media (max-width: 768px) {
      padding: 6px;
      max-width: 80%;
    }
  }

  .titulo-de-resumo {
    margin-top: 28px;
    font-size: 12px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    width: 93%;
  }
`

export const DivGeral = styled.div`
  display: block;
  algin itens: center;
  width: 100%;

`

export const DivInputs = styled.div`
  display: flex;
  gap: 26px;

  input {
    width: 230px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const DivAcordeons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  span {
    margin-left: 8px;
  }

  h5 {
    font-size: 10px;
    margin-bottom: 2px;
  }

  ul {
    position: absolute;
    background-color: black;
    width: 110px;
    text-align: center;
    z-index: 10;

    li {
      padding: 2px 10px;
      font-size: 10px;
      color: ${variaveis.textoSecundario};
      background-color: ${variaveis.corDeFundoCard};
      backdrop-filter: blur(8px);
      border: 0.5px solid rgba(255, 255, 255, 0.37);
      box-shadow: 0 7px 17px rgba(0, 0, 0, 0.43);
    }
  }

  .div-acordeons {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .acordeon {
    width: 110px;
    border-radius: 2px;
    padding: 4px;
    text-align: center;
    font-size: 10px;
    cursor: pointer;
    color: ${variaveis.textoSecundario};
    background-color: ${variaveis.corDeFundoCard};
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.62);
    box-shadow: 0 7px 17px rgba(0, 0, 0, 0.43);
  }

  .botao-calcular {
    button {
      padding: 20px 12px;
      font-weight: bold;
      margin-top: 16px;
    }
  }

  @media (max-width: 768px) {
    display: block;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;

    .botao-calcular {
      button {
        padding: 18px 8px;
        width: 235px;
        font-weight: bold;
        margin-top: 16px;
        font-size: 12px;
      }
    }

    .div-acordeons {
      width: 100%;
      justify-content: center;
    }
  }
`

export const DivMap = styled.div`
  margin: 18px 0;
  font-size: 12px;
  height: 300px;
  z-index: -1;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const DetalhesCard = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: grid;
    gap: 4px;
    grid-template: 1fr 1fr / 1fr 1fr;
  }
`

export const DivDetalhes = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 8px;

  h5 {
    font-size: 10px;
    color: ${variaveis.textoSecundario};
  }

  p {
    font-size: 10px;
    color: ${variaveis.corAmarela};
  }
`

export const BotaoRetorno = styled.button`
  display: flex;
  margin: 0 auto;
  background-color: rgba(34, 51, 68, 0);
  border: none;
  cursor: pointer;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: bold;
`

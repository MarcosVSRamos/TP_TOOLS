import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  max-width: 660px;
  min-height: 500px;
  padding: 56px;
  border-radius: 16px;
  border: 2px solid black;
  background-color: ${variaveis.corDeFundoCard};

  header {
    margin-top: 16px;
    h1 {
      text-color: ${variaveis.textoPrincipal};
    }
  }

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 32px;
  }
`

export const DivCard = styled.div`
  height: 100%;
`

export const DivHeader = styled.div`
  displa: flex;
  justify-content: center;
  margin-bottom: 48px;
`

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
`

export const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 24px auto 0;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

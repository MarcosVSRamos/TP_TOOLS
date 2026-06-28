import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 90px;
  margin-top: 40px;
  width: 70%;
  max-width: 660px;
  min-height: 300px;
  max-height: 660px;
  padding: 56px;
  border-radius: 16px;
  background-color: ${variaveis.corDeFundoCard};
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);

  header {
    h1 {
      text-color: ${variaveis.textoPrincipal};
    }
  }

  @media (max-width: 768px) {
    min-height: 300px;
    width: 93%;
    padding: 32px;
  }
`

export const DivCard = styled.div`
  height: 100%;
`

export const DivHeader = styled.div`
  displa: flex;
  justify-content: center;
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

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 16px;
  border-bottom: 2px solid ${variaveis.corAmarela};

  .icon {
    margin-right: 12px;
    padding: 6px 7px 4px 7px;
    border-radius: 6px;
    color: ${variaveis.corAmarela};
    background-color: ${variaveis.corDeFundoCard};
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }

  h2 {
    color: ${variaveis.textoPrincipal};
    font-weight: 900;

    span {
      color: ${variaveis.corAmarela};
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 8px;
    h2 {
      font-size: 18px;
    }
  }
`

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const FooterContainer = styled.div`
  background-color: ${variaveis.corDeFundoCard};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 18px 0;

  footer {
    color: ${variaveis.textoSecundario};

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`

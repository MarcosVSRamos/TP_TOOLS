import { ResultadoFrete } from '../../types/Frete'
import { ResultContainer } from './styles'

type Props = {
  resultado: ResultadoFrete
}

const ResultCard = ({ resultado }: Props) => {
  return (
    <ResultContainer>
      <div>
        <li>
          <p>{resultado.composicao}:</p>
          <p>R${resultado.valorTotal.toFixed(2)}</p>
          <p>R${resultado.valorTonelada.toFixed(2)}/Ton</p>
        </li>
      </div>
    </ResultContainer>
  )
}

export default ResultCard

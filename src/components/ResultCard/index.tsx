import { useState } from 'react'
import { ResultadoFrete } from '../../types/Frete'
import { ResultContainer } from './styles'

type Props = {
  resultado: ResultadoFrete
}

const ResultCard = ({ resultado }: Props) => {
  const [peso, setPeso] = useState(resultado.capacidade.toString())
  const [editandoPeso, setEditandoPeso] = useState(false)
  const valorTonelada = peso === '' ? 0 : resultado.valorTotal / Number(peso)

  return (
    <ResultContainer>
      <div className="div-principal">
        <li>
          <p>{resultado.composicao}:</p>
          <p>R${resultado.valorTotal.toFixed(2)}</p>
          <p>R${valorTonelada.toFixed(2)}/Ton</p>
        </li>
        <div className="div-edicao">
          <button type="button" onClick={() => setEditandoPeso(!editandoPeso)}>
            {editandoPeso ? 'Salvar' : 'Editar peso'}
          </button>
          {editandoPeso && (
            <input
              type="number"
              placeholder="Peso em toneladas"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          )}
        </div>
      </div>
    </ResultContainer>
  )
}

export default ResultCard

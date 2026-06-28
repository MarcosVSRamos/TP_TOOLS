import { useState } from 'react'
import { ResultadoFrete } from '../../types/Frete'
import { ResultContainer } from './styles'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FaWeightHanging } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

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
        <div className="coluna-um">
          <p className="composition">{resultado.composicao}:</p>
          <div className="edicao">
            <button
              type="button"
              onClick={() => setEditandoPeso(!editandoPeso)}
            >
              {editandoPeso ? (
                <FaPencilAlt />
              ) : (
                <a>
                  <span>
                    <FaPencilAlt />
                  </span>
                  <span>Editar peso</span>
                </a>
              )}
            </button>
            {editandoPeso && (
              <input
                type="number"
                placeholder="Peso (Ton)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            )}
          </div>
        </div>
        <div className="coluna-dois">
          <p className="titulos-secundarios">
            <FaMoneyBillWave className="incone-dinheiro" />
            Tarifa Mínima (Total)
          </p>
          <p className="resultado">R${resultado.valorTotal.toFixed(2)}</p>
        </div>
        <div className="coluna-tres">
          <p className="incone-peso titulos-secundarios">
            <FaWeightHanging /> Tarifa Mínima (Por Ton)
          </p>
          <p className="resultado">R${valorTonelada.toFixed(2)}/Ton</p>
        </div>
      </div>
    </ResultContainer>
  )
}

export default ResultCard

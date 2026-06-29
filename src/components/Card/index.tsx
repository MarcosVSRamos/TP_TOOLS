import { useState } from 'react'

import { calcularFrete } from '../../services/calcularFrete'
import { ResultadoFrete } from '../../types/Frete'

import Button from '../Button'
import Header from '../Header'
import Input from '../Input'
import ResultCard from '../ResultCard'
import {
  BotaoRetorno,
  CardContainer,
  DivCard,
  DivGeral,
  DivHeader,
  DivResult,
  MiddleSection
} from './styles'
import { FaCalculator } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const [km, setKm] = useState('')
  const [resultado, setResultado] = useState<ResultadoFrete[]>([])
  const navigate = useNavigate()

  const calcular = () => {
    const dados = calcularFrete(Number(km))

    setResultado(dados)

    console.log(dados)
  }

  return (
    <DivGeral>
      <CardContainer>
        <DivCard>
          <DivHeader>
            <Header
              inconeHeader={<FaCalculator />}
              tituloHeader={
                <>
                  CALCULADORA <span>ANTT</span>
                </>
              }
            />
          </DivHeader>
          <MiddleSection>
            <Input
              value={km}
              onChange={(e) => setKm(e.target.value)}
              type="number"
              placeholder="Digite a distância em Km"
            />
            <Button
              icon={<FaCalculator />}
              onClick={calcular}
              nomeButtom="Calcular Tarifa"
            />
          </MiddleSection>
          <DivResult>
            {resultado.map((item) => (
              <ResultCard key={item.composicao} resultado={item} />
            ))}
          </DivResult>
        </DivCard>
      </CardContainer>
      <BotaoRetorno type="button" onClick={() => navigate('/distancia')}>
        Ir para Calculadora de Rotas
      </BotaoRetorno>
    </DivGeral>
  )
}

export default Card

import { useState } from 'react'

import { calcularFrete } from '../../services/calcularFrete'
import { ResultadoFrete } from '../../types/Frete'

import Button from '../Button'
import Header from '../Header'
import Input from '../Input'
import ResultCard from '../ResultCard'
import {
  CardContainer,
  DivCard,
  DivHeader,
  DivResult,
  MiddleSection
} from './styles'

const Card = () => {
  const [km, setKm] = useState('')
  const [resultado, setResultado] = useState<ResultadoFrete[]>([])

  const calcular = () => {
    const dados = calcularFrete(Number(km))

    setResultado(dados)

    console.log(dados)
  }

  return (
    <CardContainer>
      <DivCard>
        <DivHeader>
          <Header />
        </DivHeader>
        <MiddleSection>
          <Input value={km} onChange={(e) => setKm(e.target.value)} />
          <Button onClick={calcular} nomeButtom="Calcular Tarifa" />
        </MiddleSection>
        <DivResult>
          {resultado.map((item) => (
            <ResultCard key={item.composicao} resultado={item} />
          ))}
        </DivResult>
      </DivCard>
    </CardContainer>
  )
}

export default Card

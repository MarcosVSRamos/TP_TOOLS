import Button from '../Button'
import { CardContainer } from './styles'
import Header from '../Header'
import {
  FaAngleDown,
  FaAngleUp,
  FaCashRegister,
  FaLocationArrow,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaRoad,
  FaWeightHanging
} from 'react-icons/fa'
import Input from '../Input'
import { useState } from 'react'
import { DivGeral } from './styles'
import { DivInputs } from './styles'
import { DivAcordeons } from './styles'
import { DivMap } from './styles'
import { BotaoRetorno } from './styles'
import { DivDetalhes } from './styles'
import { DetalhesCard } from './styles'
import { useNavigate } from 'react-router-dom'

const RouterCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenVeicle, setIsOpenVeicle] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('Selecione a rota')
  const [selectedVeicle, setSelectedVeicle] = useState('Tipo de veículo')

  const selecionarRota = (rota: string) => {
    setSelectedRoute(rota)
    setIsOpen(false)
  }

  const selecionarVeiculo = (veiculo: string) => {
    setSelectedVeicle(veiculo)
    setIsOpenVeicle(false)
  }

  const rotas = ['Rota Rápida', 'Rota Média', 'Rota Longa']
  const veiculos = ['Ls 6 eixos', 'Bitrem 7 eixos', 'Rodotrem 9 eixos']
  const navigate = useNavigate()

  return (
    <DivGeral>
      <CardContainer>
        <div>
          <div>
            <Header
              inconeHeader={<FaLocationArrow />}
              tituloHeader={
                <>
                  CALCULADORA <span>DE ROTAS</span>
                </>
              }
            />
          </div>
          <DivInputs>
            <Input
              onChange={() => console.log('Opa')}
              placeholder="Local de origem"
              type="text"
              value=""
            />
            <Input
              onChange={() => console.log('Opa')}
              placeholder="Destino final"
              type="text"
              value=""
            />
          </DivInputs>
          <DivAcordeons className="card-base">
            <div className="div-acordeons">
              <div>
                <h5>TIPO DE ROTA</h5>
                <button
                  className="acordeon"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {
                    <>
                      {selectedRoute || 'Selecione a rota'}
                      <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                    </>
                  }
                </button>
                {isOpen && (
                  <ul>
                    {rotas.map((rota) => (
                      <li key={rota} onClick={() => selecionarRota(rota)}>
                        {rota}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h5>VEÍCULO</h5>
                <button
                  className="acordeon"
                  type="button"
                  onClick={() => setIsOpenVeicle(!isOpenVeicle)}
                >
                  {
                    <>
                      {selectedVeicle || 'Tipo de veículo'}
                      <span>
                        {isOpenVeicle ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                    </>
                  }
                </button>
                {isOpenVeicle && (
                  <ul>
                    {veiculos.map((veiculo) => (
                      <li
                        key={veiculo}
                        onClick={() => selecionarVeiculo(veiculo)}
                      >
                        {veiculo}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="botao-calcular">
              <Button
                icon={<FaMapMarkedAlt />}
                nomeButtom="CALCULAR ROTA"
                onClick={() => {
                  console.log('opa')
                }}
              />
            </div>
          </DivAcordeons>
          <DivMap className="card-base">
            <h1>Atualização em desenvolvimento...</h1>
          </DivMap>
          <div>
            <h4 className="titulo-de-resumo">RESUMO DA ROTA</h4>
            <DetalhesCard>
              <DivDetalhes className="card-base">
                <span>
                  <FaRoad size={28} />
                </span>
                <div>
                  <h5>DISTÂNCIA</h5>
                  <p>1.284 km</p>
                </div>
              </DivDetalhes>
              <DivDetalhes className="card-base">
                <span>
                  <FaCashRegister size={28} />
                </span>
                <div>
                  <h5>PEDÁGIO</h5>
                  <p>R$1.286,13</p>
                </div>
              </DivDetalhes>
              <DivDetalhes className="card-base">
                <span>
                  <FaMoneyBillWave size={28} />
                </span>
                <div>
                  <h5>FRETE</h5>
                  <p>R$14.765,98</p>
                </div>
              </DivDetalhes>
              <DivDetalhes className="card-base">
                <span>
                  <FaWeightHanging size={28} />
                </span>
                <div>
                  <h5>/TON + PED</h5>
                  <p>R$305,43</p>
                </div>
              </DivDetalhes>
            </DetalhesCard>
          </div>
        </div>
      </CardContainer>
      <BotaoRetorno type="button" onClick={() => navigate('/')}>
        Voltar para Calculadora ANTT
      </BotaoRetorno>
    </DivGeral>
  )
}

export default RouterCard

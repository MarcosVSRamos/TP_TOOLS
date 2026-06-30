import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { buscarCidade } from '../../services/geocoding'
import { buscarRota } from '../../services/routes'
import { RouteResult } from '../../types/RouteResult'
import { ResultadoFrete } from '../../types/Frete'
import { Cidade } from '../../types/Cidade'

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

import Header from '../Header'
import Input from '../Input'
import Button from '../Button'
import Map from '../Map'

import { CardContainer } from './styles'
import { DivGeral } from './styles'
import { DivInputs } from './styles'
import { DivAcordeons } from './styles'
import { DivMap } from './styles'
import { BotaoRetorno } from './styles'
import { DivDetalhes } from './styles'
import { DetalhesCard } from './styles'
import { LatLng, LatLngExpression } from 'leaflet'
import { calcularFrete } from '../../services/calcularFrete'

type ResultadoFreteLocal = ResultadoFrete & {
  valorPorTonelada?: number
}

const RouterCard = () => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenVeicle, setIsOpenVeicle] = useState(false)

  const [selectedRoute, setSelectedRoute] = useState('Selecione a rota')
  const [selectedVeicle, setSelectedVeicle] = useState('Tipo de veículo')

  const [origem, setOrigem] = useState('')
  const [destino, setDestino] = useState('')

  const [origemCoords, setOrigemCoords] = useState<Cidade | null>(null)
  const [destinoCoords, setDestinoCoords] = useState<Cidade | null>(null)

  const [rota, setRota] = useState<RouteResult | null>(null)
  const [resultado, setResultado] = useState<ResultadoFreteLocal | null>(null)

  const rotas = ['Rota Rápida', 'Menor Distância', 'Recomendada']

  const preferencias = {
    'Rota Rápida': 'fastest',
    'Menor Distância': 'shortest',
    Recomendada: 'recommended'
  } as const

  const veiculos = ['Ls 6 eixos', 'Bitrem 7 eixos', 'Rodotrem 9 eixos']

  //Funções Acordeons

  const selecionarRota = (rota: string) => {
    setSelectedRoute(rota)
    setIsOpen(false)
  }

  const selecionarVeiculo = (veiculo: string) => {
    setSelectedVeicle(veiculo)
    setIsOpenVeicle(false)
  }

  const calcularResultadoFrete = (km: number, veiculo: string) => {
    const tabela = calcularFrete(km)

    const capacidadeSelecionada = peso(veiculo)

    const item = tabela.find((t) => t.capacidade === capacidadeSelecionada)

    if (!item) return null

    const valorPorTonelada =
      capacidadeSelecionada > 0 ? item.valorTotal / capacidadeSelecionada : 0

    return {
      ...item,
      valorPorTonelada
    }
  }

  const origemLeaflet: LatLngExpression | null = origemCoords
    ? [origemCoords.lat, origemCoords.lon]
    : null

  const destinoLeaflet: LatLngExpression | null = destinoCoords
    ? [destinoCoords.lat, destinoCoords.lon]
    : null

  const rotaLeaflet: LatLngExpression[] | null = rota
    ? rota.geometry.map(([lon, lat]) => [lat, lon])
    : null

  //Funcões Inputs

  const handleOrigemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrigem(e.target.value)
  }

  const handleDestinoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestino(e.target.value)
  }

  const calcularRota = async (origemCidade: Cidade, destinoCidade: Cidade) => {
    const resultadoRota = await buscarRota(
      origemCidade,
      destinoCidade,
      preferencias[selectedRoute as keyof typeof preferencias]
    )

    const distanciaKm = Math.ceil(resultadoRota.distancia)

    setRota({
      ...resultadoRota,
      distancia: distanciaKm
    })

    const frete = calcularResultadoFrete(distanciaKm, selectedVeicle)

    setResultado(frete)
  }

  const handleCalcular = async () => {
    try {
      let origemCidade = origemCoords
      let destinoCidade = destinoCoords

      if (!origemCidade || !destinoCidade) {
        origemCidade = await buscarCidade(origem)
        destinoCidade = await buscarCidade(destino)

        setOrigemCoords(origemCidade)
        setDestinoCoords(destinoCidade)
      }

      await calcularRota(origemCidade, destinoCidade)
    } catch (erro) {
      console.error(erro)
    }
  }

  //Resultados Da Rota

  // const getEixos = () => {
  //   if (selectedVeicle === 'Ls 6 eixos') return 6
  //   if (selectedVeicle === 'Bitrem 7 eixos') return 7
  //   return 9
  // }

  const peso = (veiculo: string) => {
    switch (veiculo) {
      case 'Ls 6 eixos':
        return 32

      case 'Bitrem 7 eixos':
        return 37

      case 'Rodotrem 9 eixos':
        return 48

      default:
        return 0
    }
  }

  //Interação com o mapa

  const handleMapClick = async (latlng: LatLng) => {
    const ponto: Cidade = {
      lat: latlng.lat,
      lon: latlng.lng,
      nome: ''
    }

    if (!origemCoords) {
      setOrigemCoords(ponto)
      return
    }

    if (!destinoCoords) {
      setDestinoCoords(ponto)

      await calcularRota(origemCoords, ponto)

      return
    }

    setOrigemCoords(ponto)
    setDestinoCoords(null)
    setRota(null)
    setResultado(null)
  }

  //Calculos de Pedágio

  //const pedagio = calcularPedagio(selectedRoute, getEixos())

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
              onChange={handleOrigemChange}
              placeholder="Local de origem"
              type="text"
              value={origem}
            />
            <Input
              onChange={handleDestinoChange}
              placeholder="Destino final"
              type="text"
              value={destino}
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
                onClick={handleCalcular}
              />
            </div>
          </DivAcordeons>
          <DivMap className="card-base">
            <Map
              origem={origemLeaflet}
              destino={destinoLeaflet}
              rota={rotaLeaflet}
              onMapClick={handleMapClick}
            />
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
                  <p>{rota?.distancia ?? 0} km</p>
                </div>
              </DivDetalhes>
              <DivDetalhes className="card-base">
                <span>
                  <FaCashRegister size={28} />
                </span>
                <div>
                  <h5>PEDÁGIO</h5>
                  <p>INDISPONÍVEL</p>
                </div>
              </DivDetalhes>
              <DivDetalhes className="card-base">
                <span>
                  <FaMoneyBillWave size={28} />
                </span>
                <div>
                  <h5>FRETE</h5>
                  <p>
                    R$
                    {resultado?.valorTotal
                      ? resultado.valorTotal.toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })
                      : '0,00'}
                  </p>
                </div>
              </DivDetalhes>
              <DivDetalhes className="card-base">
                <span>
                  <FaWeightHanging size={28} />
                </span>
                <div>
                  <h5>/TON</h5>
                  <p>
                    R$
                    {resultado?.valorPorTonelada
                      ? resultado.valorPorTonelada.toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })
                      : '0,00'}
                  </p>
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

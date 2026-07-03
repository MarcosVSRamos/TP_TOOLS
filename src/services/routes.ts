import { Cidade } from '../types/Cidade'
import { RouteResult } from '../types/RouteResult'

const API_KEY = process.env.REACT_APP_ORS_API_KEY

export async function buscarRota(
  origem: Cidade,
  destino: Cidade,
  tipoRota: string
): Promise<RouteResult> {
  if (!API_KEY) {
    throw new Error('REACT_APP_ORS_API_KEY não definida')
  }

  const response = await fetch(
    'https://api.openrouteservice.org/v2/directions/driving-hgv/geojson',
    {
      method: 'POST',
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinates: [
          [origem.lon, origem.lat],
          [destino.lon, destino.lat]
        ],
        preference: tipoRota,
        geometry_simplify: false
      })
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao calcular rota')
  }

  const data = await response.json()

  const rota = data.features[0]

  console.log(rota.properties.summary)
  console.log(rota.properties.segments)

  console.log(rota.properties)

  return {
    distancia: rota.properties.summary.distance / 1000,
    duracao: rota.properties.summary.duration,
    geometry: rota.geometry.coordinates
  }
}

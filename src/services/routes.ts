import { Cidade } from '../types/Cidade'
import { RouteResult } from '../types/RouteResult'

const API_KEY = process.env.REACT_APP_ORS_API_KEY

export async function buscarRota(
  origem: Cidade,
  destino: Cidade,
  tipoRota: string
): Promise<RouteResult> {
  const response = await fetch(
    'https://api.openrouteservice.org/v2/directions/driving-hgv/geojson',
    {
      method: 'POST',
      headers: {
        Authorization: API_KEY!,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinates: [
          [origem.lon, origem.lat],
          [destino.lon, destino.lat]
        ],
        preference: tipoRota
      })
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao calcular rota')
  }

  const data = await response.json()

  console.log(data)

  const rota = data.features[0]

  return {
    distancia: rota.properties.summary.distance / 1000,
    duracao: rota.properties.summary.duration,
    geometry: rota.geometry.coordinates
  }
}

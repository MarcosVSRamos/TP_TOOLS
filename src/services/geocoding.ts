import { Cidade } from '../types/Cidade'

const API_KEY = process.env.REACT_APP_ORS_API_KEY

export async function buscarCidade(cidade: string): Promise<Cidade> {
  const response = await fetch(
    `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(
      cidade
    )}`
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar cidade')
  }

  const data = await response.json()

  if (data.features.length === 0) {
    throw new Error('Cidade não encontrada')
  }

  const feature = data.features[0]

  return {
    lat: feature.geometry.coordinates[1],
    lon: feature.geometry.coordinates[0],
    nome: feature.properties.label
  }
}

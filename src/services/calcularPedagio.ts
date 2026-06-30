import { pedagioBase } from '../data/pedagios'

export function calcularPedagio(tipoRota: string, eixos: 6 | 7 | 9) {
  const base = pedagioBase

  if (tipoRota === 'Rota Rápida') return base.rapida[eixos]
  if (tipoRota === 'Rota Média') return base.curta[eixos]
  return base.economica[eixos]
}

import { tabelaANTT } from '../data/tabelaANTT'

export function calcularFrete(km: number) {
  return tabelaANTT.map(({ composicao, capacidade, ccd, cc }) => {
    const valorTotal = km * ccd + cc
    const valorTonelada = valorTotal / capacidade

    return {
      composicao,

      valorTotal,

      valorTonelada
    }
  })
}

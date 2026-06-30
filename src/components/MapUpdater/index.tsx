import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import type { LatLngExpression } from 'leaflet'
import L from 'leaflet'

type Props = {
  center: LatLngExpression
  rota: LatLngExpression[] | null
}

export function MapUpdater({ center, rota }: Props) {
  const map = useMap()

  useEffect(() => {
    if (center) {
      map.setView(center)
    }

    if (rota && rota.length > 0) {
      map.fitBounds(L.latLngBounds(rota))
    }
  }, [center, rota, map])

  return null
}

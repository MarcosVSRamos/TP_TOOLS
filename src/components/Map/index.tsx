import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMapEvents
} from 'react-leaflet'
import type { LatLng, LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapUpdater } from '../MapUpdater'
import MapClickHandler from '../MapClickHandler'
import { useEffect, useState } from 'react'

type Props = {
  origem: LatLngExpression | null
  destino: LatLngExpression | null
  rota: LatLngExpression[] | null
  onMapClick: (latlng: LatLng) => void
}

const ClickMap = () => {
  useMapEvents({
    click(e) {
      console.log(e.latlng)
    }
  })

  return null
}

const Map = ({ rota, origem, destino, onMapClick }: Props) => {
  const [center, setCenter] = useState<LatLngExpression>([-15.78, -47.93])

  useEffect(() => {
    if (destino) {
      setCenter(destino)
    }
  }, [destino])

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{
        height: '278px',
        width: '100%',
        maxWidth: '660px',
        borderRadius: '8px'
      }}
    >
      <ClickMap />
      <MapClickHandler onMapClick={onMapClick} />

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater center={center} rota={rota} />

      {origem && <Marker position={origem} />}
      {destino && <Marker position={destino} />}
      {rota && <Polyline positions={rota} />}
    </MapContainer>
  )
}

export default Map

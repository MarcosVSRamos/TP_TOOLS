import { useMapEvents } from 'react-leaflet'
import { LatLng } from 'leaflet'

type Props = {
  onMapClick: (latlng: LatLng) => void
}

const MapClickHandler = ({ onMapClick }: Props) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng)
    }
  })

  return null
}

export default MapClickHandler

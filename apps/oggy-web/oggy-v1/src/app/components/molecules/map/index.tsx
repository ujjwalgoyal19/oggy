import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Text from 'app/components/atoms/text';

/* eslint-disable-next-line */
export interface MapProps {
  Location: any;
  ZoomLevel: number;
  Text: string;
}

export function Map(props: MapProps) {
  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      center={props.Location}
      zoom={props.ZoomLevel}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.Location}>
        <Popup>
          <Text H4>{props.Text}</Text>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

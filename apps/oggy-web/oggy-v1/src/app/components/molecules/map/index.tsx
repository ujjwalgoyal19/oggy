import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import Text from 'app/components/atoms/text';

/* eslint-disable-next-line */
export interface MapProps {
  Location: any;
  ZoomLevel: number;
  Text: string;
}

const StyledMap = styled.div``;

export function Map(props: MapProps) {
  console.log(props.Location);
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

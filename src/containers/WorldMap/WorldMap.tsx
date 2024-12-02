import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import geoUrl from "../../data/feature.json";
import MapTag from "../../components/MapTag/MapTag";

const markers = [
  {
    markerOffset: -15,
    name: "New York",
    coordinates: [-74.006, 40.7128],
    label: "72K",
    value: 72,
  },
  {
    markerOffset: -15,
    name: "San Francisco",
    coordinates: [-122.4194, 37.7749],
    label: "39K",
    value: 39,
  },
  {
    markerOffset: -15,
    name: "Sydney",
    coordinates: [151.2093, -33.8688],
    label: "25K",
    value: 25,
  },
  {
    markerOffset: -15,
    name: "Singapore",
    coordinates: [103.8198, 1.3521],
    label: "61K",
    value: 61,
  },
];

interface WorldMapProps {
  title: string;
}

const WorldMap = ({ title }:WorldMapProps) => {
  return (
    <div className="world-map-wrapper">
      <h6>{title}</h6>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-170, -90, -10],
          scale: 35,
        }}
        width="153"
        height="82"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#A8C5DA"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }:{name:string;coordinates:number[]}) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#000" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
      <div className="all-tag-wrapper">
        {markers?.map((marker, index) => (
          <MapTag {...marker} key={index} />
        ))}
      </div>
    </div>
  );
  
}

export default WorldMap;

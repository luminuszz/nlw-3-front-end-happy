import React from 'react'
import {
  TileLayer,
  TileLayerProps,
  MapProps,
  Map as ReactLeaftMap,
} from 'react-leaflet'

const CustomMap: React.FC<MapProps> = ({ children, ...props }) => {
  return <ReactLeaftMap {...props}>{children}</ReactLeaftMap>
}

export default CustomMap

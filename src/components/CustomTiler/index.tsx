import React from 'react'
import { TileLayer, TileLayerProps } from 'react-leaflet'

const CustomTilerLayer: React.FC<TileLayerProps> = props => {
  return <TileLayer {...props} />
}

export default CustomTilerLayer

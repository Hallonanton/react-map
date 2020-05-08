import React from 'react'
import styled from '@emotion/styled'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


/*==============================================================================
  # Styles
==============================================================================*/

const ContainerElement = styled('div')`
  width: 100%;
  max-width: 800px;
  height: 400px;
`

const MapElement = styled('div')`
  width: 100%;
  height: 100%;
  box-shadow: var(--main-box-shadow);
`


/*==============================================================================
  # Componet
==============================================================================*/

const MapComponent  = compose(
  withProps({
    mapOptions: {
      panControl: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      overviewMapControl: false,
      rotateControl: true
    },
    lat: 57.7067214,
    lng: 11.9682732,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCW4QqJpulINgrU-J1xtde6UYPCtVEWbNY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <ContainerElement />,
    containerElement: <ContainerElement />,
    mapElement: <MapElement />,
  }),
  withScriptjs,
  withGoogleMap
)(({ mapOptions, strokeLength, iconPath, savedIconPaths, lat, lng }) => 
  <GoogleMap
    options={mapOptions}
    defaultZoom={14}
    defaultCenter={{ lat: lat, lng: lng }}
  >
    <Marker 
      position={{ lat: lat, lng: lng }}
    />
    {savedIconPaths && savedIconPaths.map((path, i) => (
      <Marker 
        key={i}
        position={{ lat: lat, lng: lng }}
        zIndex={1}
        icon={{
            path: path,
            scale: 1,
            strokeWeight: 2
        }}
      />
    ))}
    <Marker 
      position={{ lat: lat, lng: lng }}
      zIndex={2}
      icon={{
          path: iconPath,
          scale: 1,
          strokeWeight: 2.5,
          strokeColor: '#f00f00'
      }}
    />
  </GoogleMap>
)

export default MapComponent
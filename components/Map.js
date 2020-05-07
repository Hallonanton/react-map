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
)(({ mapOptions, strokeLength, iconPath, lat, lng }) => 
  <GoogleMap
    options={mapOptions}
    defaultZoom={14}
    defaultCenter={{ lat: lat, lng: lng }}
  >
    <Marker 
      position={{ lat: lat, lng: lng }}
    />
    <Marker 
      position={{ lat: lat, lng: lng }}
      icon={{
          path: iconPath,
          scale: 1,
          strokeWeight: 1
      }}
    />
  </GoogleMap>
)

export default MapComponent
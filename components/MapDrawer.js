import React, { Component } from 'react'
import styled from '@emotion/styled'
import Controls from './Controls'
import MapComponent from './Map'
import DisplayPatterns from './DisplayPatterns'


/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

/*==============================================================================
  # Component
==============================================================================*/

export const preparePath = pathArray => {
  return pathArray.map(s => {
    switch(s.type) {
      case 'H':
        return `${s.type}${s.x}`
        break;
      case 'V':
        return `${s.type}${s.y}`
        break;
      default:
        return `${s.type}${s.x} ${s.y}`
    }
  }).join(' ')
}

class MapDrawer extends Component {

  state = {
    angle: undefined,
    currentPath: [],
    savedPaths: [] 
  }

  onChange = e => {
    let intValue = parseInt(e.target.value)
    if ( intValue <= 360 && intValue >= 0 ) {
      this.setState({
        angle: intValue
      })
    }
  }

  onMove = e => {
    let { currentPath, angle } = this.state
    if ( angle === undefined ) {
      alert('No angle defined');
    } else {

      if ( currentPath.length === 0 ) {
        currentPath.push({
          'type': 'M',
          'x': 0,
          'y': 0
        })
      }

      const prevSection = currentPath[currentPath.length-1]

      if ( angle === 0 || angle === 360 || angle === 180 ) {
        currentPath.push({
          'type': 'H',
          'x': prevSection.x + (angle === 180 ? -20 : 20),
          'y': prevSection.y
        })
      } else if ( angle === 90 || angle === 270 ) {
        currentPath.push({
          'type': 'V',
          'x': prevSection.x,
          'y': prevSection.y + (angle === 270 ? -20 : 20)
        })
      } else {

        currentPath.push({
          'type': 'L',
          'x': prevSection.x + (Math.cos(Math.PI * angle / 180))*10,
          'y': prevSection.y + (Math.sin(Math.PI * angle / 180))*10
        })

      }

      this.setState({
        currentPath: currentPath,
        preparedPath: preparePath(currentPath)
      })
    }
  }

  onSave = e => {
    let { savedPaths, currentPath } = this.state
    savedPaths.push(currentPath)
    this.setState({
      currentPath: [],
      savedPaths: savedPaths
    })
  }

  render () {
    const { currentPath, savedPaths } = this.state
    return (
      <Wrapper>
        <Controls 
          onChange={this.onChange}
          onMove={this.onMove}
          onSave={this.onSave}
        />
        <MapComponent 
          iconPath={preparePath(currentPath)}
          savedIconPaths={savedPaths.map(path => preparePath(path))}
        />
        {savedPaths && savedPaths.length > 0 && <DisplayPatterns paths={savedPaths} />}
      </Wrapper>
    )
  }
}

export default MapDrawer;
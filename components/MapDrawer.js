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
  // The paths are saved as arrays with objects so later calculations can be done
  // This functions converts the array/objects to a string that can be used as data for a svg
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

  // Save the angle from the input field
  onChange = e => {
    let intValue = parseInt(e.target.value)
    if ( intValue <= 360 && intValue >= 0 ) {
      this.setState({
        angle: intValue
      })
    }
  }

  // Update the path on move
  onMove = e => {
    let { currentPath, angle } = this.state
    if ( angle === undefined ) {
      alert('No angle defined');
    } else {

      // Add start value to the svg path
      if ( currentPath.length === 0 ) {
        currentPath.push({
          'type': 'M',
          'x': 0,
          'y': 0
        })
      }

      // Get previous end-position to draw new line from
      const prevSection = currentPath[currentPath.length-1]

      // Calculate horizontal lines
      if ( angle === 0 || angle === 360 || angle === 180 ) {
        currentPath.push({
          'type': 'H',
          'x': prevSection.x + (angle === 180 ? -20 : 20),
          'y': prevSection.y
        })

      // Calculate vertical lines
      } else if ( angle === 90 || angle === 270 ) {
        currentPath.push({
          'type': 'V',
          'x': prevSection.x,
          'y': prevSection.y + (angle === 270 ? -20 : 20)
        })

      // Calculate diagonal lines
      } else {
        currentPath.push({
          'type': 'L',
          'x': prevSection.x + (Math.cos(Math.PI * angle / 180))*10,
          'y': prevSection.y + (Math.sin(Math.PI * angle / 180))*10
        })
      }

      this.setState({
        currentPath: currentPath
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
          savedIconPaths={savedPaths.map(path => {
            return {
              path: preparePath(path)
            }
          })}
        />
        {savedPaths && savedPaths.length > 0 && <DisplayPatterns paths={savedPaths} />}
      </Wrapper>
    )
  }
}

export default MapDrawer;
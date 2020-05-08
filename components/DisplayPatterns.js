import React, { Component } from 'react'
import styled from '@emotion/styled'
import { preparePath } from './MapDrawer'


/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  padding: 0px;
  margin: 15px -15px 0px -15px;
`

const Item = styled('li')`
  width: 25%;
  padding: 15px;
  box-sizing: border-box;
  list-style: none;

  .inner {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 15px;
    background-color: var(--secondary-bg-color);
    box-shadow: var(--main-box-shadow);
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc( 100% - 20px );
    height: calc( 100% - 20px );
  }
`


/*==============================================================================
  # Componet
==============================================================================*/

class Pattern extends Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    svg: null
  }

  handleRef = ref => {
    this.ref = ref
    this.prepareSVG()
  }

  prepareSVG = () => {
    if ( this.state.svg ) return
    let { path } = this.props
    
    // Declare variables
    let updatedPath = null
    let sX = 0,
        sY = 0,
        lX = 0,
        lY = 0,
        addX = 0,
        addY = 0

    // Find largest and smallest value for x and y
    // Used to set svg viewbox
    path.forEach(s => {
      const { x, y } = s
      sX = x < sX ? x : sX 
      sY = y < sY ? y : sY
      lX = x > lX ? x : lX 
      lY = y > lY ? y : lY
    })

    // If smallest X is smaller than 0, recalculate viewbox values
    if ( sX < 0 ) {
      addX = sX*-1
      sX = sX + addX
      lX = lX + addX
    }

    // If smallest Y is smaller than 0, recalculate viewbox values
    if ( sY < 0 ) {
      addY = sY*-1
      sY = sY + addY
      lY = lY + addY
    }

    // If the viewbox was recalculated, also relocate all paths to fit inside the new viewbox
    if ( addY > 0 || addX > 0 ) {
      // Return new object/array so that changes dosent effect other parts of the site
      updatedPath = path.map(s => ({
        type: s.type,
        x: s.x + addX,
        y: s.y + addY
      }))
    }

    // Make sure that the viewbox always has a width and height
    lX = lX > 0 ? lX : 1
    lY = lY > 0 ? lY : 1

    // Update path is size was recalculated
    let finalPath = updatedPath ? updatedPath : path


    // Create SVG element
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink')
    svg.setAttributeNS(null, 'viewBox', `${sX} ${sY} ${lX} ${lY}`)

    let svgPath = document.createElementNS('http://www.w3.org/2000/svg','path')
    svgPath.setAttributeNS(null, 'stroke', '#000')
    svgPath.setAttributeNS(null, 'stroke-width', '1')
    svgPath.setAttributeNS(null, 'fill', 'none')
    svgPath.setAttributeNS(null, 'd', preparePath(finalPath))

    svg.appendChild(svgPath)

    this.setState({
      svg: svg
    }, () => {
      this.ref.appendChild( svg )
    })
  }

  download = () => {
    const { svg } = this.state
    if ( !svg ) return

    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob([this.ref.innerHTML], {type: 'image/svg+xml'}));
    a.download = 'pattern.svg';

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
  }

  render () {
    return (
      <Item>
        <div 
          className="inner"
          title="download"
          onClick={this.download()}
          ref={ref => this.handleRef(ref)} 
        />
      </Item>
    )
  }
}

const DisplayPatterns = ({ paths }) => (
  <Wrapper>
    {paths.map((path, i) => <Pattern key={i} path={path}/>)}
  </Wrapper>
)

export default DisplayPatterns
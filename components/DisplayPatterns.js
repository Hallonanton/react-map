import React from 'react'
import styled from '@emotion/styled'
import { preparePath } from './MapDrawer'


/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('ul')`
  width: 100%;
  max-width: 800px;
  padding: 0px;
  margin-top: 15px;
`

const Item = styled('li')`
  width: 25%;
  padding: 15px;
  border-radius: 15px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--main-box-shadow);
  box-sizing: border-box;
  list-style: none;

  .inner {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`


/*==============================================================================
  # Componet
==============================================================================*/

const Pattern = ({path}) => {

  let sX = 0,
      sY = 0,
      lX = 0,
      lY = 0,
      addX = 0,
      addY = 0

  path.forEach(s => {
    const { x, y } = s
    sX = x < sX ? x : sX 
    sY = y < sY ? y : sY
    lX = x < lX ? x : lX 
    lY = y < lY ? y : lY
  })

  if ( sX < 0 ) {
    addX = sX*-1
    sX = sX + addX
    lX = lX + addX
  }

  if ( sY < 0 ) {
    addY = sY*-1
    sY = sY + addY
    lY = lY + addY
  }

  if ( addY > 0 || addX > 0 ) {
    path = path.map(s => {
      s.x = s.x + addX
      s.y = s.y + addY
      return s
    })
  }

  console.log(sX, sY, lX, lY)

  return (
    <Item>
      <div className="inner">
        <svg viewBox={`${sX} ${sY} ${lX} ${lY}`}>
          <path stroke="#000" strokeWidth="1" fill="none" d={preparePath(path)} />
        </svg>
      </div>
    </Item>
  )
}

const DisplayPatterns = ({ paths }) => (
  <Wrapper>
    {paths.map((path, i) => <Pattern key={i} path={path}/>)}
  </Wrapper>
)

export default DisplayPatterns
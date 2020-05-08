import React from 'react'
import styled from '@emotion/styled'


/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('div')`
  width: 100%;
  max-width: 800px;
  margin-bottom: 15px;
`

const Controls = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 15px 30px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--main-box-shadow);
  box-sizing: border-box;

  > * {
    margin: 10px;
  }
`

const Description = styled('div')`
  width: 100%;
  margin-bottom: 15px;

  h2 {
    margin: 0px;
  }

  p {
    font-size: 12px;
  }
`

const Label = styled('label')`
  font-size: 12px;
  font-weight: 700;

  span {
    margin-left: 20px;
  }

  input {
    width: 200px;
    margin-top: 5px;
    padding: 10px 20px;
    border-radius: 40px;
    border: 1px solid var(--main-btn-bg);
    box-shadow: none;
    font-size: 16px;
    outline: none;
    transition: 250ms ease;

    &:focus {
      border-color: var(--hover-btn-bg);
    }
  }
`

const Button = styled('button')`
  width: 130px;
  padding: 10px 30px;
  border-radius: 40px;
  color: var(--main-btn-color);
  background-color: var(--main-btn-bg);
  font-size: 18px;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 250ms ease;

  &:hover {
    background-color: var(--hover-btn-bg);
  }
`


/*==============================================================================
  # Componet
==============================================================================*/

const ControlComponent = ({ onChange, onMove, onSave }) => (
  <Wrapper>
    <Controls>
      <Description>
        <h2>Instructions</h2>
        <p>Use the "degrees input" to specify an angle. After an angle is set press "move" to draw a 20px line in that direction. Change the degree and keep pressing "move" to create a pattern. Pressing "save" will save that pattern to a list of pattern beneath the map and you will be able to create a new pattern from scratch. Have fun!</p>
      </Description>
      <Label htmlFor="degrees">
        <span>Degrees</span><br/>
        <input id="degrees" onChange={onChange} min="0" max="360" type="number" placeholder="Degrees"/>
      </Label>
      <Button onClick={onMove}>Move</Button>
      <Button onClick={onSave}>Save</Button>
    </Controls>
  </Wrapper>
)

export default ControlComponent
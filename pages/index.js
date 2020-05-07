import React, { Component } from 'react'
import styled from '@emotion/styled'
import Layout from '../layout/Layout'
import Controls from '../components/Controls'
import MapComponent from '../components/Map'


/*==============================================================================
  # Styles
==============================================================================*/

const Hero = styled('h1')`
	margin: 15px 0px 45px;
	text-align: center;
	text-transform: uppercase;
	font-size: 60px;
	line-height: 1.1; 
`


/*==============================================================================
  # Component
==============================================================================*/

class Home extends Component {

  onChange = e => {
    console.log('onChange', e)
  }

  onMove = e => {
    console.log('onMove', e)
  }

  onSave = e => {
    console.log('onSave', e)
  }

  render () {
    return (
      <Layout>
      	<Hero>Map Drawer</Hero>
        <Controls 
          onChange={this.onChange}
          onMove={this.onMove}
          onSave={this.onSave}
        />
        <MapComponent />
      </Layout>
    )
  }
}

export default Home;
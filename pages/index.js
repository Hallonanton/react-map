import styled from '@emotion/styled'
import Layout from '../layout/Layout'
import MapDrawer from '../components/MapDrawer'


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

const Home = () => (
  <Layout>
  	<Hero>Map Drawer</Hero>
    <MapDrawer />
  </Layout>
)

export default Home;
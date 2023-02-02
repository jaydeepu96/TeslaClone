import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <container>
      <Section
      title="Model S "
      description="Order online for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"

      />
       <Section
      title="Model Y "
      description="Order online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"

      />
      <Section
      title="Model 3"
      description="Order online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section
      title="Model X"
      description="Order online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
       
       <Section
       title="Lowest Cost solar panel in America "
       description="Money-back guarantee"
       backgroundImg="solar-panel.jpg"
       leftBtnText=" Order now"
       rightBtnText="Learn more"
       />

       <Section
       title=" Solar for New Roofs "
       description="Solar Roof Costs Less Then a New Roof Plus Solar Panels"
       backgroundImg="solar-roof.jpg"
       leftBtnText=" Order now"
       rightBtnText="Learn more"
       />

<Section
       title=" Accessories "
       description="Solar Roof Costs Less Then a New Roof Plus Solar Panels"
       backgroundImg="accessories (1).jpg"
       leftBtnText=" Shop now"
       
       />
    </container>
  )
}

export default Home
const container = styled.div`
height:100vh;
z-index:10;

`

import React from 'react'
import styled from 'styled-components'
import Section from './Section'


export default function Home() {
  return (
    <Container>


      <Section
        
        title="Model 3"
        image="model-3.jpg"
        description="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="Existing Inventory"
      />


      <Section
      
        title="Model Y"
        image="model-y.jpg"
        description="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="Existing Inventory"
      />


      <Section
      
        title="Model S"
        image="model-s.jpg"
        description="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="Existing Inventory"
      />





      <Section title="Mode X"
      
        image="model-x.jpg"
        description="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="Existing Inventory"
      />



      <Section title="Solar Panels"
     
        description="Lowest Cost Solar Panels in America"
        leftbutton="Order Now"
        rightbutton="Learn More"
        image="solar-panel.jpg"
      />



      <Section title="Solar Roof"
      
        description="Produce Clean Energy From Your Roof"
        leftbutton="Order Now"
        rightbutton="Learn More"
        image="solar-roof.jpg"
      />




      <Section title="Accessories"
        description=""
        leftbutton="Shop Now"
        rightbutton=""
        image="accessories.jpg"
      />
             

    </Container >
  )
}

const Container = styled.div`
    height: 100vh;
`


import React from 'react'
import Section from '../Section'
import styled from 'styled-components'


export default function Model3() {
  return (
    <Container>
        <Section
        
        title="Model 3"
        image="model-3.jpg"
        description="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="Existing Inventory"
      />

    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`
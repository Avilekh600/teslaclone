import React from 'react'
import Section from '../Section'
import styled from 'styled-components'

export default function Modelx() {
  return (
    <Container>
        <Section title="Mode X"
      
      image="model-x.jpg"
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
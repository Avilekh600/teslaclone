import React from 'react'
import Section from '../Section'
import styled from 'styled-components'

export default function Solarroof() {
  return (
    <Container>
      <Section title="Solar Roof"
      
      description="Produce Clean Energy From Your Roof"
      leftbutton="Order Now"
      rightbutton="Learn More"
      image="solar-roof.jpg"
    />

    </Container>
  )
}
const Container = styled.div`
    height: 100vh;
`
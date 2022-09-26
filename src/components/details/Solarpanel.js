import React from 'react'
import Section from '../Section'
import styled from 'styled-components'

export default function Solarpanel() {
  return (
    <Container>
         <Section title="Solar Panels"
     
     description="Lowest Cost Solar Panels in America"
     leftbutton="Order Now"
     rightbutton="Learn More"
     image="solar-panel.jpg"
   />

    </Container>
  )
}
const Container = styled.div`
    height: 100vh;
`
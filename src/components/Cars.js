import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Cars() {
  return (
    <Container>
      <Router>   
        <Routes>  
          <Route path='/model3' element={
                 <Section 
                 title = "Model 3"
                 image="model-3.jpg"
                 description ="Order Online for touchless delivery"
                 leftbutton ="Custom Order"
                 rightbutton = "Existing Inventory"
        />
       } ></Route>

<Route path='/modely' element={
                 <Section 
                 title = "Model Y"
                 image="model-y.jpg"
                 description ="Order Online for touchless delivery"
                 leftbutton ="Custom Order"
                 rightbutton = "Existing Inventory"
        />
       } ></Route>

<Route path='/models' element={
                   <Section 
                   title = "Model S" 
                    image="model-s.jpg"
                    description ="Order Online for touchless delivery"
                    leftbutton ="Custom Order"
                    rightbutton = "Existing Inventory"
           />
       } ></Route>
        
         
      

<Route path='/modelx' element={
                    <Section title = "Mode X"
                    image="model-x.jpg"
                    description ="Order Online for touchless delivery"
                    leftbutton ="Custom Order"
                    rightbutton = "Existing Inventory"
           />

                } ></Route>
       
     

<Route path='/solarpanels' element={
                 
                 <Section title = "Solar Panels"
                 description ="Lowest Cost Solar Panels in America"
                 leftbutton ="Order Now"
                 rightbutton = "Learn More"
                 image="solar-panel.jpg"
                 />
                } ></Route>
        

<Route path='/solarroof' element={
               <Section title = "Solar Roof"
               description ="Produce Clean Energy From Your Roof"
               leftbutton ="Order Now"
               rightbutton = "Learn More"
               image="solar-roof.jpg"
               />
                 
                } ></Route>
       

         

        <Section title = "Accessories"
                 description =""
                 leftbutton ="Shop Now"
                 rightbutton = ""
                 image="accessories.jpg"
                 />
             </Routes>
        </Router>         

    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`

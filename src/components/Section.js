import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


export default function Section( {title , image ,description ,leftbutton,rightbutton} ) {
  return (
    <Wrap bgimg = {image}>
      <Fade bottom>
        <Text>
            <h1>{title}</h1>
            <p> {description}</p>
        </Text>
        </Fade>
        <Button>
          <Fade bottom > 
        <ButtonGroup>
            <LeftButton>{leftbutton}</LeftButton>
           { rightbutton &&  <RightButton>{rightbutton}</RightButton> }
           
        </ButtonGroup>
        </Fade>
        <Downarrow src="./images/down-arrow.svg" /> 
          
          </Button>       
    </Wrap>
  )
}

const Wrap = styled.div`
   display : flex;
   flex-direction : column;
   justify-content : space-between;
   align-item : center;
   width:100vw;
   height: 100vh;
   background-size : cover;
   background-position : center;
   background-repeat : no-repeat;
  background-image : ${props => `url('/images/${props.bgimg}')`};


`
const Text = styled.div`
       text-align: center;
       padding-top : 13vh;

`
const ButtonGroup = styled.div`
   display : flex;
   margin-bottom :5px;
   justify-content: center;
   align-item : center;
   @media (max-width : 665px){
    flex-direction: column;
    margin : auto;
   }

`
const LeftButton = styled.div`
  margin : 10px;
  cursor : pointer;
   text-align : center;
   padding-top : 8px;
   justify-content : center;
   background-color : #2d2f34;
   font-weight : bold;
   color: white;
   width : 260px;
   height : 40px;
   border-radius : 8px;
   opacity : 0.70;


`
const RightButton = styled(LeftButton)`
    background-color : white;
    color : black;

`

const Downarrow = styled.img`
     height : 40px;
     animation : animateDown infinite 1.5s;
     cursor : pointer;
     margin-bottom : 20px;
`

const Button = styled.div`
     display : flex;
     flex-direction : column;
     align-item : center;
     justify-content : center;
    a{
      margin : 0;
    }
     padding : 5px 50px;
     
`
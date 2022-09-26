import React from 'react'
import styled  from 'styled-components'
import { Link } from 'react-router-dom'




export default function Header() {

 const [burgerStatus,setBurgerStatus] = React.useState(false)


  return (

    <div>
       <Container>
          <span>
          <Link to={`/`} className='logoo'>   
          
          <img src="/images/logo.svg" alt="logo" />
          </Link>
                
            
          </span>
          <Menu >
                <Link className='linklist' to={`/model_s`}>
                    <a href='#'> Model S</a>
                </Link>
                <Link className='linklist' to={`/model_3`}>
                    <a href='#'> Model 3</a>
                </Link>
                <Link className='linklist' to={`/model_x`}>
                    <a href='#'> Model X</a>
                </Link>
                <Link className='linklist' to={`/model_y`}>
                    <a href='#'> Model Y</a>
                </Link>
                <Link className='linklist' to={`/solar_panel`}>
                <a href='#'> Solar Panel</a> 
                </Link>
               
                <Link to={`/solar_roof`}>
                <a href='#'> Solar Roof</a> 
                </Link>
                

          </Menu>
          <Rightmenu>
          <a href='#'>Shop</a> 
          <a href='#'>Account</a> 
         
          <i class="fa-solid fa-bars" onClick={()=> setBurgerStatus(true)}></i>
          
          </Rightmenu>
       
    </Container>

    <HamMenu show={burgerStatus}>
    <i class="fa-solid fa-xmark" onClick={()=> setBurgerStatus(false)}></i>
         <div className="list" onClick={()=> setBurgerStatus(false)}>
                    
                    <li>
                    <Link className='listitem' to={`/model_s`}>  
                     Model S
                    </Link>
                    </li>
                   
                
                 <li>
                 <Link className='listitem' to={`/model_3`}>
                     Model 3
                </Link>
                 </li>
                <li>
                <Link className='listitem' to={`/model_x`}>
                     Model X
                </Link>
                </li>
                <li>
                <Link className='listitem' to={`/model_y`}>
                     Model Y
                </Link>
                </li>
                <li>
                <Link className='listitem' to={`/solar_panel`}>
                Solar Panel> 
                </Link>
                </li>
              

                <li>   <Link className='listitem' to={`/solar_roof`}>
                         Solar Roof
                         </Link>
                </li>
         <li>Existing Inventory</li>
          <li>Used Inventory</li>
          <li> Charging</li>
          <li> Find Us</li>
         </div>
         </HamMenu>


    </div>
  )
}

const Container = styled.div`
     position : fixed;
     display : flex;
     align-item : center;
     justify-content : space-between;
     padding :  15px;
     top : 0;
     right : 0;
     left : 0;
     z-index : 1;
     span{
      cursor : pointer;
     }
`
const Menu = styled.div`
    display : flex;
    
    @media (max-width : 1125px){
      display : none;
    }
   
`
const Rightmenu = styled.div`
display : flex;
i{
  padding : 5px 7px;
  cursor : pointer;
  font-size : 25px;
  
}
i:hover{
  background-color:rgba(0,0,0,0.15);
}
 


`
const CustomMenu = styled.div`
   cursor : pointer;
`

const HamMenu = styled.div`
   background-color : white;
  width : 300px;
  display : flex;
  flex-direction : column;
  position : fixed;
  right : 0;
  height : 100vh;
  padding : 20px 0;
 z-index : 10;
 
 li{
  
  padding : 15px 10px;
  list-style : none;
  border-bottom : 1px solid black;
  cursor : pointer;
 }
li:hover{
  background-color:rgb(212, 232, 249);
}

 i{
  position : absolute;
  right : 20px;
  top : 10px;
  cursor : pointer;
  padding : 10px;
  font-size : 25px;
  
 }
 i:hover{
  background-color : rgba(0,0,0,0.15);
 }

 transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
 transition : transform 0.3s ease-in;
`
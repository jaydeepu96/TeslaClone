import React, { useState} from 'react'
import styled from 'styled-components'
 import MenuIcon from '@material-ui/icons/Close'///// icon

import CloseIcon from '@mui/icons-material/Close';
///// import { useState } from 'react'///////

import { selectCars } from '../features/Car/carSlice'
import{useSelector}   from 'react-reduxj';



function Header() {
const [burgerStatus,setBurgerStatus] = useState(false);
const cars = useSelector(selectCars)


  return (
    <Container>
      <a>

        <img src='./logo.svg' alt="" />

       </a>

       <Menu>
        {cars && cars.map((car,index)=>(

       <a key={index} herf="#">{car}</a>
        ))}
    
       </Menu>

       <RightMenu>
        <a herf="#">Shop</a>
        <a herf="#">Tesla Account</a>

         <CustomMenu onClick={()=> setBurgerStatus(true)}/> 

       </RightMenu>

       <BurgerNav show={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=> setBurgerStatus(flase)}/>
          </CloseWrapper>
          {cars && cars.map((car,index)=>(

           <a key={index} herf="#">{car}</a>
          
 ))}

        <li><a herf="#">Existing Inventory</a></li>
        <li><a herf="#">Used Inventory</a></li>
        <li><a herf="#">Trade-in</a></li>
        <li><a herf="#">Cybertruck</a></li>
        <li><a herf="#">Roadaster</a></li>
        
       </BurgerNav>
       
    </Container>
  )
}

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;




a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}

`

const RightMenu = styled.div`
   display: flex;
   align-items: center;

a {
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px
  
}

@media(max-width: 768px) {
  display: none;
}


`

const CustomMenu = styled(MenuIcon)`
 cursor: pointer;


 `

 const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 bottom:0;
 right:0;
background:white;
width: 300px; 
 z-index:16;
 list-style: none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 Transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
 transition: transform 0.2s;

 li{
  padding: 15px;
  border-bottom: 1px solid rgba(0,0,0,.2);

  a  {

    font-weight:600;

    }



 }

`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`



const CloseWrapper = styled.div`

display: flex;
justify-content: flex-end;


`

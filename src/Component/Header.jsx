
import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';






function Header() {
  return (
    <>
     
<div    style={{backgroundColor:'black'}}>

<div className=" d-flex justify-content-center aligne-item-center ">
<h6 style={{fontSize:'17px',fontWeight:'800',color:'white'}} className='mt-2'>SIGN UP FOR 15% OFF</h6>




</div>


</div>

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      
      <img src="https://th.bing.com/th/id/OIP.wu9sBlw9WpXIieni19-QLgAAAA?rs=1&pid=ImgDetMain" alt=""  style={{width:'14%'}} />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link   className='ms-2' style={{color:'black' , fontSize:'15px' , fontWeight:'550'}}>WOMEN</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>MEN</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>KIDES</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>JIBBITZ CHARMS</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>CROCS SOCKS</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>BESTSELLERS</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>NEW ARRIVALS</Nav.Link>
            <Nav.Link className='ms-3'  style={{color:'black'  , fontSize:'15px'  , fontWeight:'550'}}>SALE</Nav.Link>
            
          </Nav>
          <Nav>
            
            <Nav.Link className='d-flex' style={{marginLeft:'%'}}>
             <h4  style={{color:'black'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></h4>
             <h4  style={{color:'black'}}><FontAwesomeIcon icon={faHeart} className='ms-4'/></h4>
             <h4  style={{color:'black'}}><FontAwesomeIcon icon={faCartShopping} className='ms-4'/></h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  
    </>
  )
}

export default Header






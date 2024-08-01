import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faInstagram,faTwitter,faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
    <div style={{backgroundColor:'gray'}}>
    <div className='row mt-5 ' >
      <div className='col-md-3 mt-5'  >
        <img src="/Image/footer_top_4.jpg" alt="" style={{width:'65px' , marginLeft:'39%'}} />
        <h6 className='text-center mt-3' style={{color:'black'}}>Free Shipping</h6>
        <p className='text-center' style={{fontSize:'13px' , color:'black'}}>Free shipping on all orders</p>
      </div>
      <div className='col-md-3 mt-5'>
      <img src="/Image/footer_top_3.jpg" alt="" style={{width:'40px' , marginLeft:'44%'}}/>
      <h6 className='text-center mt-3' style={{color:'black'}}>Easy Returns</h6>
        <p className='text-center' style={{fontSize:'13px' , color:'black'}}>Change your mind? No problem. Our free returns process makes it easy.</p>
      </div>
      <div className='col-md-3 mt-5'>
      <img src="/Image/footer_top_2.jpg" alt="" style={{width:'30px' , marginLeft:'45%'}}/>
      <h6 className='text-center mt-3' style={{color:'black'}}>Crocs Gurantee</h6>
        <p className='text-center' style={{fontSize:'13px' , color:'black'}}>Crocs™ products are covered by a 90-day warranty</p>
      </div>
      <div className='col-md-3 mt-5'>
      <img src="/Image/footer_top_1.jpg" alt="" style={{width:'65px' , marginLeft:'41%'}}/>
      <h6 className='text-center mt-3' style={{color:'black'}}>Your Information is Secure</h6>
        <p className='text-center' style={{fontSize:'13px' , color:'black'}}>100% secured transaction using SSL encrypted connection.</p>
      </div>
     </div>
     </div> 


     
     <div style={{backgroundColor:'black'}}>
     <div class="d-flex border-bottom">
     <div className='row  container-fluid  p-4 text-light' >
      <div className='col-md-2 mt-3 '>
        <h6 style={{color:'white'}}>My Account</h6>
        <p style={{fontSize:'13px' , color:'white'}}>Order Status</p>
        <p style={{fontSize:'13px' , color:'white'}}>Sign in/Ragister</p>
        <p style={{fontSize:'13px' , color:'white'}}>Returns</p>
      </div>
      <div className='col-md-2 mt-3 '>
      <h6 style={{color:'white'}}>Shop</h6>
        <p style={{fontSize:'13px' , color:'white'}}>Women</p>
        <p style={{fontSize:'13px' , color:'white'}}>Men</p>
        <p style={{fontSize:'13px' , color:'white'}}>Little Kids Age 1-5</p>
        <p style={{fontSize:'13px' , color:'white'}}>Big Kids Age 5+</p>
       
      </div>
      <div className='col-md-2 mt-3 '>
      <h6 style={{color:'white'}}>Help</h6>
        <p style={{fontSize:'13px' , color:'white'}}>FAQs</p>
        <p style={{fontSize:'13px' , color:'white'}}>Return Policy</p>
        <p style={{fontSize:'13px' , color:'white'}}>Size Chart</p>
        <p style={{fontSize:'13px' , color:'white'}}>Caring for your Crocs</p>
        
      </div>
      <div className='col-md-2 mt-3 '>
      <h6 style={{color:'white'}}>Company</h6>
        <p style={{fontSize:'13px' , color:'white'}}>About CROCS</p>
        <p style={{fontSize:'13px' , color:'white'}}>Store Locator</p>
        <p style={{fontSize:'13px' , color:'white'}}>Compilance Information</p>
      
      </div>
      <div className='col-md-4 mt-3'>
        <p style={{fontSize:'13px' , color:'white'}}>For online order & delivery related queries</p>
        <div class="d-flex border-bottom">
        <p style={{fontSize:'13px' , color:'white'}}>Customer Service Email: support-in@crocs.in
Toll-Free Customer Service Number: 000-800-919-1686 (Use
 "000" while dialing)
Monday - Friday: 10:00 AM - 6:00 PM IST</p></div>
<p style={{fontSize:'13px' , color:'white'}}>Get the latest scoop on new arrivals, sales, special offers and receive 15% off on your first order.</p>
<Link  className='text-light'><p style={{fontSize:'13px' , color:'white'}}>SIGN UP NOW</p></Link> 
<p style={{fontSize:'13px' , color:'white'}}>Stay Connected</p>
<div className='d-flex  ' style={{color:'white'}}>
          <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
         <FontAwesomeIcon icon={faInstagram} className='fa-2x ms-4'/>
         <FontAwesomeIcon icon={faTwitter} className='fa-2x ms-4'/>
         
         </div>
        
      </div>


      
      
     

     </div>
     </div>

     <div className='d-flex p-2'>
     <p style={{fontSize:'13px' , color:'white'}}>crocs.in, Inc. All rights reserved.</p>
      <p style={{fontSize:'13px' , color:'white'}} className='ms-auto'>Pravicy Policy</p>
      </div>
     </div>

     
     
   
    </>
  )
}

export default Footer
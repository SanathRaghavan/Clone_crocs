
import React from 'react'
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';

import Card from 'react-bootstrap/Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';











function Home() {


  



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>
    <div className='row'>
     <div className='col-md-12'>
     <img src="/Image/Sale_3_Desktop.png" alt=""  style={{width:'100%'}}/>
     </div>
     </div>
     <div className='row'>
     <div className='col-md-12'>
     <img src="/Image/Hero_Mello.png" alt=""  style={{width:'100%'}}/>
     </div>
     </div>
     <div className='row'>
     <div className='col-md-12'>
     <img src="/Image/Monsoon_Desktop_Static_A_1.png" alt="" style={{width:'100%'}}/>
     </div>
     </div>
     <div className='row'>
     <div className='col-md-12'>
     <img src="/Image/Upsell_2_Crush_Desktop.png" alt="" style={{width:'100%'}}/>
     </div>
     </div>



     <div className='dev '>
    <div className='row m-0'>
      <h1 className='text-center mt-4' style={{color:'black' , fontWeight:'800' , fontSize:'50px'}}>NEW ARRIVALS</h1>
      <div className='col-12 ' >
        
        <div >
        <div className="slider-container">
        <Slider {...settings}>
          {
            data.map((d) => (
     <div style={{marginLeft:'550px'}} className='mt-2 '>         
    <Card style={{ width: '250px'  }} className='rounded' >
        <div className='d-flex p-1'>
      <div style={{ color:'red'}}><FontAwesomeIcon icon={faHeart} /></div>
      <h6 className='ms-auto ' style={{color:'green'}}>NEW</h6>
      </div>
      <Card.Img variant="top" src={d.img} />
      <Card.Body>
        <Card.Title style={{fontSize:'15px' , color:'black'}}>{d.name}</Card.Title>
        <Card.Text style={{fontSize:'15px' , color:'black'}}>₹ 
         {d.review}
        </Card.Text>

        
      </Card.Body>
    </Card>
    </div>
            ))}
    </Slider> 
    </div>      

          </div>
        </div>

      </div> 
      </div>

   
    







     <div className='row'>
     <div className='col-md-12'>
      <img src="/Image/Upsell_3_.png" alt="" style={{width:'100%'}}/>
     </div>
     </div>
     <div className='row'>
     <div className='col-md-12'>
      <img src="/Image/Kids_Toy_.png" alt="" style={{width:'100%'}}/>
     </div>
     </div>
     <div >
     <div className='text-center mt-3 ' >
     <button className='btn  ' style={{ borderColor:'lightgreen' , borderWidth:'3px' , fontWeight:'900' , fontSize:"170%" , color:'black'}} > SHOPE BY STYLE </button>
     </div>

     <div className='row ms-4' >
      
     <div className='col-md-4 mt-4 '>
      <img src="/Image/Category_Clog_2.png" alt="" style={{width:'95%'}}/>
     </div>
     
     <div className='col-md-4 mt-4'>
     <img src="/Image/Category_Flip_4.png" alt="" style={{ width:'95%'}}/>
     </div>
     <div className='col-md-4 mt-4 '>
     <img src="/Image/Category_Slide_2.png" alt="" style={{width:'95%'}}/>
     </div>
     </div>
     </div>

     <div className='row ms-4' >
      
     <div className='col-md-4 mt-5 '>
      <img src="/Image/Category_Sandal.png" alt="" style={{width:'95%'}}/>
     </div>
     
     <div className='col-md-4 mt-5'>
     <img src="/Image/Category_Platform_3.png" alt="" style={{ width:'95%'}}/>
     </div>
     <div className='col-md-4 mt-5 '>
     <img src="/Image/Category_Wedge_2.png" alt="" style={{width:'95%'}}/>
     </div>
     </div>

     <div className='container'>
      <div className='row ' style={{marginTop:'90px'}}>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{color:'black' }}>Classic Clogs and Slides</Accordion.Header>
        <Accordion.Body style={{color:'black'}}>
        As our most popular and iconic shoe silhouettes, the Classic Clog and Slide come in a wide variety of colors and patterns, are easy to clean, and serve as the foundation of our exciting collaborations. Clogs also accommodate infinite amounts of personalization thanks to our ever-changing collection of Jibbitz™ shoe charms.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{color:'black'}}>Sandals and Flip Flops</Accordion.Header>
        <Accordion.Body style={{color:'black'}}>
        No matter the occasion, we offer a sandal to match. Each style is as versatile as it is comfy, always at the forefront of fashion trends, and available in a variety of colors and silhouettes including strappy, platform, bedazzled, open toe, flip flop, and more. Shop our official online store for the biggest selection of sandals for your whole family.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{color:'black'}}>Literied</Accordion.Header>
        <Accordion.Body style={{color:'black'}}>
        LiteRide - technology design for comfort
        Trust improved technology. The Crocs' original LiteRide creation is specifically designed to offer you the ultimate in comfort and support. Made from softer and light material, Crocs LiteRide shoes will keep you looking and feeling fabulous.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{color:'black'}}>Jibbitz™ Charms</Accordion.Header>
        <Accordion.Body style={{color:'black'}}>
        Put your own personal touch on your favorite pair of Crocs to make them more personalized! Your little ones can add Jibbitz™ of their favorite characters, Dads can add Jibbitz™ of their favorite sports, and Moms can add jewels.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
        </div>
        <div className='col-md-3'></div>
      </div>
     </div>

     
    


     
   


    </>
  )
}


const data = [
  {
    name: `Toy Story Bizzare Classic Blue Grey Kids Clog`,
    img: `/Image/crocs_1.jpg`,
    review: `5,495`
  },
  {
    name: `Getaway Glitter Sstucco Women Flip`,
    img: `/Image/crocs_2.jpg`,
    review: `5,495`
  },
  {
    name: `Classic Green lvy Unisex Clog`,
    img: `/Image/crocs_3.jpg`,
    review: `2,597 to 3,995`
  },
  {
    name: `Getaway Black Women Flip`,
    img: `/Image/crocs_4.jpg`,
    review: `3,596 to 4,495`
  },
  {
    name: `Getaway Latte Women Flip`,
    img: `/Image/crocs_5.jpg`,
    review: `3,596 to 4,495`
  },
  {
    name: `Classic Juice Kids Sandle 2.0`,
    img: `/Image/crocs_6.jpg`,
    review: `2,495`
  },
  {
    name: `Toy Story Bizzare Classic Blue Gray Toddler Clog`,
    img: `/Image/crocs_1.jpg`,
    review: `4,995`
  },
  {
    name: `Getaway Platform Glitter Black Women Flip`,
    img: `/Image/crocs_8.jpg`,
    review: `5,995`
  },
  {
    name: `Hello Kitty IAM Classic White Unisex Clog`,
    img: `/Image/crocs_9.jpg`,
    review: `6,995`
  },
  {
    name: `Toy Story Woody Classic Blue Jean Toddler Clog`,
    img: `/Image/crocs_10.jpg`,
    review: `4,995`
  },
  {
    name: `Getaway Platform Glitter H Strip Stucco Women Sandle`,
    img: `/Image/crocs_10.jpg`,
    review: `5,995`
  },
  {
    name: `Classic Duke Print Venetian Blue Unisex Clog`,
    img: `/Image/crocs_12.jpg`,
    review: `3,596 to 4,495`
  },
  {
    name: `Toy Story Bizzare Classic Blue Grey Kids Clog`,
    img: `/Image/crocs_13.jpg`,
    review: `5,495`
  },
  {
    name: `Toy Story Woody Classic Blue Jean Toddler Clog`,
    img: `/Image/crocs_10.jpg`,
    review: `5,495`
  },
  {
    
    img: `/Image/crocs_15.jpg`,
    
  }
]



export default Home





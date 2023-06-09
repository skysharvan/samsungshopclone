import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import "./BigSlider.css"
import SliderItem from '../../carousel/carousel2/sliderItem/SliderItem';
import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';
import { color } from '@mui/system';
import { Box, Typography } from '@mui/material';
import SliderAtem from './sliderItem/SliderItem';


const SliderContainer = styled('div')({
width:"100%",
height:"auto",
// margin:"2% 0.3%",
overflow:"hidden",
backgroundColor:'transparent',
// border:'1px solid black',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 1490px)": {
  // margin:"2% "


},
"@media (max-width: 480px)": {
    backgroundColor:'transparent',
    width:'100%',
   margin:'0px'
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  backgroundColor:'transparent',
  justifyContent:"center",
  // alignItems:'center',
  flexDirection:"column",
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px 100px",
  "@media (max-width: 480px)": {
    backgroundColor:'white',
   padding:'0px'
 
 },
})



const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ChevronLeftOutlined sx={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}


const BigSlider = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            // autoplay:true,
            // dots: true,
          },
        },
    ]
  };
  return (
    <>
     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:{xs:'10px',sm:'30px',md:'40px'},display:'flex',justifyContent:'center'}}>
       <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'30px'},fontWeight:'500',color:'black'}}>Top Deals</Typography>
       
       </Box>
    <SliderContainer>         
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.map((item)=>(
      <SliderAtem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default BigSlider
import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SliderItem from './item/SliderItem';
import { styled } from '@mui/system';
import "./slider.css"
AOS.init();


const SliderContainer = styled('div')({
  width:"100%",
  height:"auto",
  overflow:"hidden",
  backgroundColor:"transparent",
 
  "@media (max-width: 480px)": {
      backgroundColor:'white',
      width:'100%'
   
   },
  
  
  })
 
  const SliderInnerContainer = styled('div')({
      dispay:'flex',
      justifyContainer:'center',
      flexDirection:'column',
      "@media (max-with:480px)":{
        backgroundColor:'white',
        padding:'0px',
      }
  })
  
  
  
  const PreviousBtn = (props)=>{
    const{className , onClick} = props;
    return(
      <div className={className} onClick={onClick}>
         <ArrowCircleLeftOutlined  style={{color:'white' , fontSize:'3rem',zIndex:'10'}}/>
      </div>
    )
  }
  
  const NextBtn = (props)=>{
    const{className , onClick} = props;
    return(
      <div className={className} onClick={onClick}>
         <ArrowCircleRightOutlined  style={{color:'white' , fontSize:'3rem',zIndex:'20'}}/>
      </div>
    )
  }

export default function Block1(props){
  
  const settings = {
    dots: true,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
            dots: true,
            infinite: true,
          },
        },
    ]
  };
  return(
    <SliderContainer>
      <SliderInnerContainer>
         <Slider {...settings}>
          {props.sliderData.map((item , id)=>(
           <SliderItem key={id} posterLinks={item} />
         ))}
         </Slider>
        </SliderInnerContainer>
    </SliderContainer>
  )
}
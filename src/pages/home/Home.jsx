import React from 'react'
import { Typography } from '@mui/material';
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import Block1 from '../../contents/home/block1/Block1';
import Block2 from 'contents/home/block2/Block2';
import Block3 from '../../contents/home/Block3'
import SwiggySlider from 'components/allcarousel/carousel/carousel2/SwiggySlider';
import { other } from 'constants/slider/other';
import { block2_Images } from 'constants/Images/block2_Images';
import block3_Images from 'constants/Images/block3_Images';

const Home = () => {
  return (
    <div>
    
         <Navbar /> 
         <SwiggySlider/>
         <Block1 sliderData={other} />
         <Typography sx={{display:'flex',justifyContent:'center',color:'white',backgroundColor:'black',margin:'10px 0px'}}>{<h1>Top Deals</h1>}</Typography>
         <Block2 cardLinks={block2_Images}/>
         <Typography sx={{display:'flex',justifyContent:'center',color:'white',backgroundColor:'black'}}>{<h1>Grab or Gone</h1>}</Typography>
         <Block3 cardLinks={block3_Images}/>
         <Footer />
      
      
</div>
    
  )
}

export default Home
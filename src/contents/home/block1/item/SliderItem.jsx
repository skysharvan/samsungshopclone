import React from 'react'
import {styled} from '@mui/styles'


const SliderContainer = styled("div")({
    width:"100%",
    height:"auto",
 
    
    })
    const ImageContainer = styled("div")({
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        
    
    })
    const Image = styled("img")({
        width:"100%",
        height:"600px",
        objectFit:"cover",
        zIndex:"1",
        "@media (max-width: 960px)": {
           width:'100%',
           height:'500px',
           
           },
           "@media (max-width: 770px)": {
            width:'100%',
            height:'400px',
            
            },
            "@media (max-width: 600px)": {
                width:'100%',
                height:'400px',
                
                },
                "@media (max-width: 480px)": {
                    width:'100%',
                    height:'200px',
                    margin:'0',
                    padding:'0',
                    
                    },
    })
    
export default function SliderItem({posterLinks}) {
  return (
      <SliderContainer>
        <ImageContainer>
            <Image src={posterLinks.image} />
        </ImageContainer>
       </SliderContainer>
  )
}

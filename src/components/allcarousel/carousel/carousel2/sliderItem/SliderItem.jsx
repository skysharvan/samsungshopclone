import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const SliderContainer = styled("div")({
width:"100%",
height:"auto",
paddingLeft:"px",
// zIndex:"1",
// border:'1px solid black'

})
const ImageContainer = styled("div")({
    display:"flex",
    alignItems:"center",
    // justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px"
    // border:'1px solid black'

})
const Image = styled("img")({
    width:"260px",
    height:"300px",
    objectFit:"cover",
    // margin:"40px",
    zIndex:"1",
    // border:'1px solid black',
    "@media (max-width: 960px)": {
       width:'200px',
       height:'230px',
       
       },
       "@media (max-width: 770px)": {
        width:'160px',
        height:'200px',
        
        },
        "@media (max-width: 600px)": {
            width:'120px',
            height:'170px',
            
            },
            "@media (max-width: 480px)": {
                width:'150px',
                height:'170px',
                margin:'0',
                padding:'0',
                // gap:'20px'
                
                },
})
const Head = styled("h3")({
    fontSize: "15px",
    fontWeight:"400",
    // textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 600px)": {
       fontSize: "13px",
       },
})
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const SliderItem = ({posterLinks}) => {
    console.log(posterLinks)
  return (
       <>
      
       <SliderContainer>
        <ImageContainer>
            <Image src={posterLinks.image} />
            <Box sx={{width:{xs:'140px',sm:'200px',md:'260px'}}}>
            <Head>{posterLinks.price.mrp}</Head>
            <Head>{posterLinks.name}</Head>
            <Head>{posterLinks.style}</Head>
            <Head>{posterLinks.tagline}</Head>
            </Box>
        </ImageContainer>
       </SliderContainer>
       </>
  )
}

export default SliderItem
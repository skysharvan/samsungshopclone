import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box} from '@mui/material';

import Card2 from '../../../components/card/card2/Card2'

const Block2 = (props) => {
  return(
    <>
      <Box sx={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap', margin:{sm:'5px 50px', xs:"5px"}}}>
         {props.cardLinks.map((item ,id)=>(

          <Card2 key={id}  posterLink={item} />

          ))} 
      </Box>
    </>
  ) 
}
export default Block2

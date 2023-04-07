import React from 'react'
import { Box} from '@mui/material';
import Card3 from '../../components/card/card2/Card3'

const Block3 = (props) => {
  
 
  return (
       <>
         <Box sx={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap', margin:'5px 50px '}}>
          {props.cardLinks.map((item , id)=>(
             <Card3 key={id} posterLink={item}/>
          ))}
         </Box>
       </>
       )
}
export default Block3
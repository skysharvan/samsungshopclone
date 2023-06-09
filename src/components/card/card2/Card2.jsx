import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Divider from '@mui/material/Divider';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CardContainer = styled(Box)(({theme})=>({
  display:"flex",
  margin:"10px",
  [theme.breakpoints.down('sm')]: {
   width:"80%"
}

}))
export default function Card3({posterLink}) {
  // const [expanded, setExpanded] = React.useState(false);

 
  return (
    
    <CardContainer >
    <Card sx={{ width:'100%',height:'400px',"&: hover":{transform:'scale(1.05)'}}}>
      
      <CardMedia
        component="img"
        height="194"
        image={posterLink.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{color:'black',fontWeight:'600',display:'flex',justifyContent:'center'}}>
           {posterLink.name}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" sx={{color:'black',fontWeight:'500',display:'flex',justifyContent:'center'}}>
            {posterLink.price}
        </Typography>
      </CardContent>
      <Divider sx={{backgroundColor:'#8777',height:'1px'}}/>
      <p>Description:Lorem ipsum dolor sit.</p>
      <CardActions disableSpacing sx={{height:'0%' , display:'flex',justifyContent:'space-between'}} >
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:'red'}}/>
        </IconButton> */}
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        <Button sx={{height:'28px',width:'39%',backgroundColor:'black',color:'white',"&:hover":{backgroundColor:'orange'}}}>
          Buy now
        </Button>
        <IconButton aria-label="share" >
          <ShareIcon  sx={{color:'#8777'}}/>
        </IconButton>
      </CardActions>

     
    </Card>
    
    </CardContainer>
  );
}
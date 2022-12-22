import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardServices = ({imag}) => {
  return (
    <Card sx={{ maxWidth: {xs:"325px", sm:"282px", md:"380px", lg:"370px"},
      //minWidth: {sm:"280px"},
      display:"flex",
      //border: "solid 2px red",
      flexDirection:"column",
      flexWrap:{xs:"wrap"},
      ml:{xs:"0px", sm:"13px"},
      mt:"10px",
      mb:"8px",
      borderRadius:"20px",
      //height: "550px"
     }}>

     {/*<img src={imag.imgPath} alt="" />*/}
      <img src={imag.imgPath} alt={imag.title} />
      {/*<CardMedia
        sx={{ height: "0px" }}
        src={imag.imgPath}
        title={imag.title}
      />*/}
      <CardContent sx={{m:"0px", pl:"12px", pt:"0px", pb:"0px"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{
          m:"8px 0px", 
          maxWidth: {xs:"305px", sm:"265px", md:"320px", lg:"330px"},
          fontSize: {xs:".95em", sm:"1.05em", md:"1.2em", lg:"1.05em"}
           }}>
          {imag.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify" sx={{
            //display: {xs:"none", sm:"flex", lg:"flex"},
            maxWidth: {xs:"300px", sm:"255px", md:"360px", lg:"330px"},
            fontSize: {xs:".7em", sm:".9em", md:"1em", lg:"1.05"},
            mb:"0px"
        }}>
          {imag.description}
        </Typography>
      </CardContent>
      {/*<CardActions sx={{mt:"0px", pt:"0px", display: {xs:"block", sm:"none", lg:"none"}}}>
        <Button size="small">Más información...</Button>
      </CardActions>*/}
    </Card>
  );
}

export default CardServices

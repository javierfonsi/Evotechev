import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
//import { CardContent } from '@mui/material';


const Footer = () => {
  return (
    <Card sx={{ maxWidth: 345, m:"4px", p:"8px", border:"solid 2px lightgrey", display:"flex", flexDirection:"column", alignItems:"center" }} >
        <Typography variant="body1" color="text.secondary" sx={{ pb:{xs: "0px"}}}>
            +57 3108126624
        </Typography>
        <Typography variant="body1" color="text.secondary">
            +57 3058175019
        </Typography>
        <Typography variant="body1" color="text.secondary">
            +57 3142985001
        </Typography>
        <Typography variant="body1" color="text.secondary">
            info@evotechingenieria.com
        </Typography>
        <Typography variant="body1" color="text.secondary">
            Carrera 89A Nº 22A-22
        </Typography>
        <Typography variant="body1" color="text.secondary" >
            Bogotá - Colombia
        </Typography>

      {/*<CardContent sx={{ py:{xs: "4px"}, border:"solid 2px darkgrey"}}>
        <Typography variant="body2" color="text.primary" >
            Bogotá - Colombia
        </Typography>
      </CardContent>*/}
    </Card>
  )
}

export default Footer


//{/*<Typography sx={{
//    fontSize: {xs:"1em", sm:"1.7em", md:"2.1em", lg:"2.6em"},
//    color:"white",
//    p:{ xs:"0%", sm:"1%", md:"1%"},
//    mt:{ xs:"0px", sm:"1px", md:"1px"},
    
//    //position:"absolute",
//    //top:{ xs:"40%", sm:"25%", md:"40%"},
//    //left:{ xs:"5%", sm:"12%", lg:"25%"},
//    //right:{ xs:"5%", sm:"10%"},
//    }}> 


// </Typography>*/}

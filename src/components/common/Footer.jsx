import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

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
    </Card>
  )
}

export default Footer
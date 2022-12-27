import React from 'react'
import { Box, Card } from "@mui/material";

const CustomerCard = ({imag}) => {
  return (
    <Card
          sx={{
            maxWidth: {xs: "100px", sm:"200px", md:"240px", lg:"335px"},
            //height:350,
            ml:{xs:'10px', sm:"0px"},
            mr:{xs:"2px", sm:"29px", lg:"50px"},
            my:"10px",
            p:"0px",
            backgroundColor: "transparent",
            color: "white", 
            border:"none",
            borderRadius:{xs:"55px", md:"65px"},
          }}
        >

          <Box sx={{ display: {xs: "flex", md:"none"}}}>
            <img 
            src={imag?.imgSmall} alt={imag?.label}
             />
          </Box>
          <Box sx={{ display: {xs: "none",  md:"flex"}}}>
            <img 
            src={imag?.imgPath} alt={imag?.label} 
             />
          </Box>
          
          {/*<Box sx={{ display: {xs: "none", lg:"flex"}, width:"160px", height:"160px"}}>
            <img 
            src={imag?.imgLg} alt={imag?.label}
             />
          </Box>*/}

        </Card>
  )
}

export default CustomerCard
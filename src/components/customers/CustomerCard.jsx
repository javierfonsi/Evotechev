import React from 'react'
import { Box, Card } from "@mui/material";

const CustomerCard = ({imag}) => {
  return (
    <Card
          sx={{
            maxWidth: {xs: "110px", md:"200px", lg:"335px"},
            //height:350,
            mx:"5px",
            my:"5px",
            p:"0px",
            backgroundColor: "transparent",
            color: "white", 
            border:"none",
            borderRadius:"50%"
            //border:"solid 2px red"
          }}
        >

          <Box sx={{ display: {xs: "flex", md:"none"}}}>
            <img 
            src={imag?.imgSmall} alt={imag?.label}
             />
          </Box>
          <Box sx={{ display: {xs: "none", md:"flex", lg:"none"}}}>
            <img 
            src={imag?.imgPath} alt={imag?.label}
             />
          </Box>
          <Box sx={{ display: {xs: "none", lg:"flex"}, width:"160px", height:"160px"}}>
            <img 
            src={imag?.imgLg} alt={imag?.label}
             />
          </Box>

        </Card>
  )
}

export default CustomerCard
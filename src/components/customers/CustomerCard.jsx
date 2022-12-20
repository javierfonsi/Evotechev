import React from 'react'
import { Box, Card } from "@mui/material";

const CustomerCard = ({imag}) => {
  return (
    <Card
          sx={{
            maxWidth: {xs: "110px", md:200},
            //height:350,
            mx: "auto",
            my:"10px",
            backgroundColor: "transparent",
            color: "white", 
            border:"none",
            //border:"solid 2px red"
          }}
        >

          <Box sx={{ display: {xs: "none", md:"flex"}}}>
            <img 
            src={imag?.imgPath} alt={imag?.label}
             />
          </Box>

          <Box sx={{ display: {xs: "flex", md:"none"}}}>
            <img 
            src={imag?.imgSmall} alt={imag?.label}
             />
          </Box>
        </Card>
  )
}

export default CustomerCard
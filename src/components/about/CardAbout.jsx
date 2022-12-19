import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const CardAbout = ({text}) => {
  return (
    <Card
    sx={{
      maxWidth: {xs:"330px", sm:"360px"},
      m: {xs: "20px 10px", md:"3% 10px"},
      backgroundColor: "transparent",
      borderRadius: "16px",
      boxShadow: "0px 1px 1px 1px grey",
      pt: "10px",
      //height:"50vh"
    }}
  >
    <CardContent>
      <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: {xs: 400, sm:600, md:700}, color:"darkgrey" }}>
        {text?.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: "justify", color: "white" }}
      >
      {text?.text}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default CardAbout
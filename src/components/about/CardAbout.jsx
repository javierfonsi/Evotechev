import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const CardAbout = ({text}) => {
  return (
    <Card
    sx={{
      maxWidth: 350,
      m: "auto",
      backgroundColor: "transparent",
      color: "white" 
    }}
  >
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
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
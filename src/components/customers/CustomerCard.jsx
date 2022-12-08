import React from 'react'
import { Card } from "@mui/material";

const CustomerCard = ({imag}) => {
  return (
    <Card
          sx={{
            maxWidth: 350,
            //height:350,
            m: "auto",
            backgroundColor: "transparent",
            color: "white", 
            border:"none"
          }}
        >

        <img src={imag?.imgPath} alt={imag?.label} />

        </Card>
  )
}

export default CustomerCard
import React from 'react'
//import { motion } from "framer-motion";
import { Box,  Typography } from "@mui/material";
//import entel from "./entel-400x400-rbg.png"
//import movistar from "./movistar_400x400-rbg.png"
//import claro from './claro_400x400-rbg.png'
import CustomerCard from './CustomerCard';
//import Cards from './Cards'

const imgCust = [
  {
    label: "entel",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/entel-130x130-rbg_ricfyg.png"
  },
  {
    label: "movistar",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/movistar_130x130-rbg_t2dyki.png",
  },
  {
    label: "claro",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/claro_130x130-rbg_kkzmmh.png"              
  }
]

const Customers = () => {
  return (
    <div
      style={{
        //backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1669843821/evotech/Clientes_zzgojc.jpg)`,
        backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1669854756/evotech/Custommers/custommers_gp9yti.jpg)`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    //  initial={{ with: 0 }}
    //  animate={{ width: "100%" }}
    //  exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >

      <div>

        <Typography gutterBottom variant="h4" 
          component="div"
          sx={{
            pt: {xs:"42px", sm:"40px"},
            textAlign:{xs:"center"},
            color: "white"
          }}
        >
          Confian en Nosotros
        </Typography>            

        <Box 
          sx={{
            maxWidth: 790,
            m: 'auto',
            backgroundColor: "transparent",
            display:{ xs: "block", md:"flex" },
            pt:1,
            pb:1,
            
            height: {md:"65vh"}
          }}>
              {
                imgCust.map(imag => (
                  <CustomerCard imag={imag} key={imag.label}/>
                ))
              }

        </Box>

        <Typography gutterBottom variant="h4" 
          component="div"
          sx={{
            pt: {xs:"42px", sm:"40px"},
            textAlign:{xs:"center"},
            color: "white"
          }}
        >
          Nuestros parthers
        </Typography>            
      </div>

    </div>
  )
}

export default Customers

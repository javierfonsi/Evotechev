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
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/entel-130x130-rbg_ricfyg.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671309817/evotech/Custommers/entel-110x110_bmfcma.png"
  },
  {
    label: "movistar",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/movistar_130x130-rbg_t2dyki.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671309817/evotech/Custommers/movistar_110x110_mmtzlo.png"
  },
  {
    label: "claro",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/claro_130x130-rbg_kkzmmh.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671309817/evotech/Custommers/claro_110x110_foua4c.png"
  }
]

const imgParth = [
  {
    label: "dji",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/dji_btnret.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/dji_s1vv6j.png"
  },
  {
    label: "tems",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/Tems_dcwk6b.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/Tems_zbj4h8.png"
  },
  {
    label: "pctel",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/pctel_qbubq6.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499639/evotech/Custommers/Partners/100px/pctel_pisrjt.jpg"
  },
  {
    label: "teoco",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/teoco_ipq11u.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/teoco_urhxvn.png"
  },
  {
    label: "nemo",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/Nemo_nklcsf.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/Nemo_sslrwu.png"
  },
  {
    label: "anritsu",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/Anritsu_ntgi9d.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/Anritsu_orl0wx.png"
  },
  {
    label: "garmin",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671487193/evotech/Custommers/Partners/garmin_dkksnt.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/garmin_b4ficw.png"
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
            fontSize:{xs:"1.8em", sm:"2.0em", md:"2.4em", lg:"3em"},
            pt: {xs:"18px", sm:"40px"},
            textAlign:{xs:"center"},
            color: "white"
          }}
        >
          Confian en Nosotros
        </Typography>            

        <Box 
          sx={{
            //maxWidth: 790,
            maxWidth: {xs:"340px", sm:"590px", md:"900px", lg:"1200px"},
            m: 'auto',
            backgroundColor: "transparent",
            display:{ xs: "flex", md:"flex" },
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
            fontSize:{xs:"1.8em", sm:"2.0em", md:"2.4em", lg:"3em"},
            pt: {xs:"42px", sm:"40px"},
            textAlign:{xs:"center"},
            color: "blue"
          }}
        >
          Nuestro equipo
        </Typography>
        <Box 
          sx={{
            maxWidth: {xs:"340px", sm:"599px"},
            m: 'auto',
            backgroundColor: "transparent",
            display:{ xs: "flex", md:"flex" },
            pt:"30px",
            pb:"30px",
            //mb:"20px",
            flexWrap: {xs:"wrap", sm:"no wrap"},
            //border: {xs:"solid 2px red", sm:"none"},
            height: {md:"65vh"}
          }}>
              {
                imgParth.map(imag => (
                  <CustomerCard imag={imag} key={imag.label}/>
                ))
              }

        </Box>            
      </div>

    </div>
  )
}

export default Customers

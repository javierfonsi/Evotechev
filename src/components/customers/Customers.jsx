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
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671309817/evotech/Custommers/entel-110x110_bmfcma.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671534947/evotech/Custommers/220x220/entel_220x220-bg_picwwf.png"
  },
  {
    label: "movistar",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/movistar_130x130-rbg_t2dyki.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671309817/evotech/Custommers/movistar_110x110_mmtzlo.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671534947/evotech/Custommers/220x220/movistar_220x220-bg_kqeexj.png"
  },
  {
    label: "claro",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669851871/evotech/Custommers/claro_130x130-rbg_kkzmmh.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671309817/evotech/Custommers/claro_110x110_foua4c.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671534947/evotech/Custommers/220x220/claro_220x220-bg_opwtck.png"
  }
]

const imgParth = [
  {
    label: "dji",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529107/evotech/Custommers/Partners/170px/dji_pw0yto.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/dji_s1vv6j.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/dji_dvpizl.png"
  },
  {
    label: "tems",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/Tems_qxe1la.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/Tems_zbj4h8.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/Tems_ouhpjg.png"
  },
  {
    label: "pctel",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/pctel_pux6ab.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499639/evotech/Custommers/Partners/100px/pctel_pisrjt.jpg",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/pctel_lgmfhc.jpg"
  },
  {
    label: "teoco",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/teoco_p6cpby.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/teoco_urhxvn.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/teoco_fwthxo.png"
  },
  {
    label: "nemo",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/Nemo_wfizb0.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/Nemo_sslrwu.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/Nemo_yivhki.png"
  },
  {
    label: "anritsu",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/anritzu_clti1i.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529460/evotech/Custommers/Partners/100px/Anritsum_bqzzqi.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/anritzu_kghxw9.jpg"
  },
  {
    label: "garmin",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/garmin_u8bux2.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529460/evotech/Custommers/Partners/100px/garminm_pqltte.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/garmin_ql3nxg.png"
  }

]
const Customers = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1669854756/evotech/Custommers/custommers_gp9yti.jpg)`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>

      <div>
        <Typography gutterBottom variant="h4" 
          component="div"
          sx={{
            fontSize:{xs:"1.8em", sm:"2.0em", md:"2.4em", lg:"3.4em"},
            pt: {xs:"30px", sm:"40px", lg:"60px"},
            textAlign:{xs:"center"},
            color: "white"
          }}
        >
          Confían en Nosotros
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
            height: {md:"40vh"}
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
            pt: {xs:"42px", sm:"40px", lg:"80px"},
            textAlign:{xs:"center"},
            color: "darkblue"
          }}
        >
          Nuestro Equipo
        </Typography>
        <Box 
          sx={{
            maxWidth: {xs:"340px", sm:"599px", md:"700px", lg:"900px"},
            m: 'auto',
            backgroundColor: "transparent",
            display:{ xs: "flex", md:"flex" },
            pt:{xs:"30px", md:"35px", lg:"40px"},
            pb:"30px",
            //mb:"20px",
            flexWrap: {xs:"wrap", sm:"no wrap"},
            //border: {xs:"solid 2px red", sm:"none"},
            height: {md:"40vh", lg:"45%"}
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

import React from 'react'
//import { motion } from "framer-motion";
import { Box,  Typography } from "@mui/material";
//import entel from "./entel-400x400-rbg.png"
//import movistar from "./movistar_400x400-rbg.png"
//import claro from './claro_400x400-rbg.png'
import CustomerCard from './CustomerCard';
//import Cards from './Cards'

import { lightBlue } from '@mui/material/colors';

const verde = lightBlue[900]; // #f44336

const imgCust = [
  {
    label: "virginMobile",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746252/evotech/Custommers/130px/VirginMobile130x130_zhkbv8.jpg",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671810172/evotech/Custommers/60px/VirginMobile_60x60_ovbtfz.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671832810/evotech/Custommers/90px/VirginMobile_90x90_gpjewz.jpg",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671745932/evotech/Custommers/110px/VirginMobile_110x110_j7uwdc.jpg",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746426/evotech/Custommers/160px/VirginMobile_160x160_n03je8.jpg"
  },
  {
    label: "movistar",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746252/evotech/Custommers/130px/movistar_130x130_an5k0s.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671810172/evotech/Custommers/60px/movistar_60x60_h93kwc.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671832809/evotech/Custommers/90px/movistar_90x90_ey7mht.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671745931/evotech/Custommers/110px/movistar_110x110_sf7gkm.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746426/evotech/Custommers/160px/movistar_160x160_tvan09.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671534947/evotech/Custommers/220x220/movistar_220x220-bg_kqeexj.png"
  },
  {
    label: "claro",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746252/evotech/Custommers/130px/claro_130x130_fhyq9x.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671810172/evotech/Custommers/60px/claro_60x60_bqgyzn.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671832809/evotech/Custommers/90px/claro_90x90_iwhyxv.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671745931/evotech/Custommers/110px/claro_110x110_p5qvwo.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746426/evotech/Custommers/160px/claro_160x160_yn5deq.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671738616/evotech/Custommers/220x220/claro_220x220-bg_cjx9ho.png"
  },
  {
    label: "tigo",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746252/evotech/Custommers/130px/tigo_hszpuj.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671810172/evotech/Custommers/60px/tigo_60x60_nnl5kj.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671745931/evotech/Custommers/110px/tigo_110x110_vxqg4u.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671832809/evotech/Custommers/90px/tigo_90x90_ueyiah.png",
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671727750/evotech/Custommers/220x220/tigo-removebg-preview_u3de4j.png"
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746426/evotech/Custommers/160px/tigo_160x160_nqrjgb.png"
  },
  {
    label: "entel",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746252/evotech/Custommers/130px/entel_130x130_txlola.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671810172/evotech/Custommers/60px/entel_60x60_ae8s77.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671745931/evotech/Custommers/110px/entel_110x110_wu3amw.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671832809/evotech/Custommers/90px/entel_90x90_uj5sxe.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746426/evotech/Custommers/160px/entel_160x160_kfwver.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671534947/evotech/Custommers/220x220/entel_220x220-bg_picwwf.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671727603/evotech/Custommers/220x220/Virgin_220x220_x1vx93.png"
  },
  {
    label: "Wom",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746252/evotech/Custommers/130px/wom_130x130_prxive.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671810172/evotech/Custommers/60px/wom_60x60_ffwbwq.png",
    //imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671745932/evotech/Custommers/110px/wom_110x110_ejqkxe.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671832809/evotech/Custommers/90px/wom_90x90_fvjg8g.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671746426/evotech/Custommers/160px/wom_160x160_mtxzdb.png"
  }
]

const imgParth = [
  {
    label: "dji",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529107/evotech/Custommers/Partners/170px/dji_pw0yto.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/dji_s1vv6j.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/dji_s1vv6j.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671764965/evotech/Custommers/Partners/240/dji_zgqrw9.png",
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/dji_dvpizl.png"
  },
  {
    label: "tems",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/Tems_qxe1la.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499456/evotech/Custommers/Partners/100px/Tems_zbj4h8.png",
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/Tems_ouhpjg.png"
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/Tems_qxe1la.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671762649/evotech/Custommers/Partners/180px/Tems_akfnsd.png"
  },
  {
    label: "pctel",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/pctel_pux6ab.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671499639/evotech/Custommers/Partners/100px/pctel_pisrjt.jpg",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671762649/evotech/Custommers/Partners/180px/pctel_crqbwv.jpg"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/pctel_lgmfhc.jpg"
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
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/Nemo_wfizb0.png"
    //imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/Nemo_yivhki.png"
  },
  {
    label: "anritsu",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/anritzu_clti1i.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529460/evotech/Custommers/Partners/100px/Anritsum_bqzzqi.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671767442/evotech/Custommers/Partners/Anritsum_lnlpnj.png"
  },
  {
    label: "garmin",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529106/evotech/Custommers/Partners/170px/garmin_u8bux2.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671529460/evotech/Custommers/Partners/100px/garminm_pqltte.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671537578/evotech/Custommers/Partners/200x200/garmin_ql3nxg.png"
  },
  {
    label: "infoVista",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748497/evotech/Custommers/Partners/170px/InfoVista_gf3amc.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748222/evotech/Custommers/Partners/100px/InfoVista_a1szfg.jpg",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748591/evotech/Custommers/Partners/200x200/InfoVista_uu6nfb.jpg"
  },
  {
    label: "keysight",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748497/evotech/Custommers/Partners/170px/keysight1_c0gdbu.png",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748222/evotech/Custommers/Partners/100px/keysight1_bgp8gg.png",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748591/evotech/Custommers/Partners/200x200/keysight1_qmzbcr.png"
  },
  {
    label: "luxCarta",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748497/evotech/Custommers/Partners/170px/LuxCarta_kx7ald.jpg",
    imgSmall: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748222/evotech/Custommers/Partners/100px/LuxCarta_xsxrz0.jpg",
    imgLg: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671748591/evotech/Custommers/Partners/200x200/LuxCarta_qb5guy.jpg"
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
            fontSize:{xs:"1.8em", sm:"2.0em", md:"2.6em", lg:"3.4em"},
            fontWeight:"bold",
            mr:{sm:"42px", lg: "260px"},
            pl:{xs:"10px", sm:"0px", md:"100px", lg:"86px"},
            pt: {xs:"30px", sm:"40px", lg:"60px"},
            pr: {xs:"45px", sm:"150px", md:"324px", lg:"250px"},
            textAlign:{xs:"center"},
            color: verde
          }}
        >
          Confían en Nosotros
        </Typography>            

        <Box 
          sx={{
            maxWidth: {xs:"350px", sm:"455px", md:"500px", lg:"550px"},
            m: {xs:'0 auto', },
            pr:{sm:"66px", md:"210px", lg:"360px"},
            opacity:".8",
            backgroundColor: "transparent",
            display:"flex",
            justifyContent:"start",
            flexWrap:{xs:"wrap"},
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
            fontSize:{xs:"1.8em", sm:"2.3em", md:"2.4em", lg:"3em"},
            fontWeight:"bold",
            mr:{sm:"0px", lg: "260px"},
            pr:{xs:"40px", sm:"194px", md:"256px", lg:"160px"},
            pt: {xs:"42px", sm:"40px", lg:"80px"},
            textAlign:{xs:"center"},
            color: "darkblue"
          }}
        >
          Nuestro Equipo
        </Typography>

        <Box 
          sx={{
            maxWidth: {xs:"300px", sm:"429px", md:"700px", lg:"720px"},
            m:{ xs:"0 auto", sm:'auto'},
            backgroundColor: "transparent",
            pr:{sm:"120px", lg:"300px"},
            pl:{xs:"30px", sm:"0px"},
            display:{ xs: "flex" },
            pt:{xs:"30px", md:"35px", lg:"40px"},
            pb:"30px",
            opacity:".78",
            //mb:"20px",
            flexWrap: {xs:"wrap", sm:"no wrap"},
            //border: {xs:"solid 2px red", sm:"solid 2px red"},
            //height: {md:"40vh", lg:"45%"}
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

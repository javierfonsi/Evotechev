import React from "react";
import Carrusel from "../common/Carrusel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
//import './Home.css'
const text = "Nuestro foco principal son actividades de implementación, servicios de planeación, optimización de redes fijas y móviles."
const imgBack = 
  {
    label: "rb1",
    Lg: ["https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_1x850_mlh3ck.jpg", "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_2x850_nwxrmp.jpg", "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/scanner_h1x850_oa9nzc.jpg"],
    Sm: ["https://res.cloudinary.com/dzkp92nfz/image/upload/v1671449729/evotech/home/rbh_1_rdkr6r.jpg", "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671449729/evotech/home/rbh_2_hpdonl.jpg", "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671449729/evotech/home/scanner_h1_t0nbbk.jpg"],
    Xs: ["https://res.cloudinary.com/dzkp92nfz/image/upload/v1671403491/evotech/home/rbh_1_n4nms4.jpg", "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671403491/evotech/home/rbh_2_rgkimo.jpg", "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671403491/evotech/home/scanner_h1_ijasgr.jpg"]
  }


const Home = () => {
  return (
 
    //<div className="main-carousel">
    <div>
    <Box sx={{display: {xs:"none", md:"block"}}}>
        <Carrusel imgBack={imgBack.Lg} />
    </Box>
    <Box sx={{display: {xs:"none", sm:"block", md:"none"}}}>
        <Carrusel imgBack={imgBack.Sm} />
    </Box>
    <Box sx={{display: {xs:"block", sm:"none"}}}>
        <Carrusel imgBack={imgBack.Xs} />
    </Box>
      <Typography sx={{
            fontSize: {xs:"1.4em", sm:"1.7em", md:"2.1em", lg:"2.6em"},
            color:"white",
            position:"absolute",
            top:{ xs:"40%", sm:"50%", md:"40%"},
            left:{ xs:"5%", sm:"12%", lg:"25%"},
            right:{ xs:"5%", sm:"10%"},
            tranform: "translate(-50%, -50%)",
            textShadow: "000px rgba(0,0,0,0.8)"
            }}> 
            {text}
      </Typography>
    </div>
  
  );
};

export default Home;

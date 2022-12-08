import React from "react";
import Carrusel from "../common/Carrusel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";
//import './Home.css'
const text = "Nuestro foco principal son actividades de implementación, servicios de planeación, optimización de redes fijas y móviles."


const Home = () => {
  return (
 
    //<div className="main-carousel">
    <div>
      <Carrusel/>
      <Typography sx={{
            fontSize: {xs:"1.4em", sm:"1.7em", md:"2.1em", lg:"2.6em"},
            color:"white",
            position:"absolute",
            top:{ xs:"15%", sm:"25%", md:"40%"},
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

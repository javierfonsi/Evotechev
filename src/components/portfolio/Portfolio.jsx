import { Typography } from "@mui/material";
import React from "react";
//import Carrusel from "../common/Carrusel";

const Portfolio = () => {
  return (
    <div 
      style={{
        //backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1669843539/evotech/About-xl_s59njp.jpg)`,
        backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1670581777/evotech/Portfolio/portafolio_vkloeo.jpg)`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"90vh"
      }}
      >

<div>

<Typography gutterBottom variant="h4" 
  component="div"
  sx={{
    pt: {xs:"42px", sm:"40px"},
    textAlign:{xs:"center"},
    color: "white"
    //</div>m: {xs:"0-auto", sm:"40px"}
  }}
>
  Nuestros Servicios
</Typography>            

{/*<Box 
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

</Box>*/}
</div>
      {/*<Carrusel/>*/}

    </div>
  );
};

export default Portfolio;

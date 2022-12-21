import { Box, Typography } from "@mui/material";
import React from "react";
import CardServices from "./CardServices";
//import Carrusel from "../common/Carrusel";

const imgServices= [
  {
    id:1,
    title: "DRIVE TEST OUTDOOR",
    //imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571518/evotech/Portfolio/DriveTestOutdoor_zhrim3.jpg",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671656208/evotech/Portfolio/driveTest_ast8ul.png",
    description: "Proporciona mediciones de voz y datos en las diferentes tecnologías, para mostrar al cliente final, donde hay deficiencia de cobertura o fallas en el servicio."
  },
  {
    id:2,
    title: "IBS (In Building solution)",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671642316/evotech/Portfolio/IBS_o5mijx.jpg",
    description: "Proporciona cobertura en interiores utilizando un sistema de antenas distribuidas, lo cual permite mejor conectividad, para esto ofrecemos servicio de planeación implementación y monitoreo de antes y después del proyecto."
  },
  {
    id:3,
    title: "POST PROCESO",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571517/evotech/Portfolio/PostProceso_xzzeta.jpg",
    description: "Permite analizar a profundidad los datos recolectados luego de llevar a cabo el proceso de drive test, esto le permite al cliente final identificar y corregir falencias en cobertura, accesibilidad y continuidad del servicio"
  },
  {
    id:4,
    title: "BUSQUEDA DE SITIOS",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571517/evotech/Portfolio/BusquedaSitios_qfuxqy.jpg",
    description: "Para la busqueda de sitios es importante tener en cuenta aspectos legales, eléctricos, de ingenieria civil y de radiofrecuencia, ofrecemos una solución integral o parcial para estas necesidades."
  },
  {
    id:5,
    title: "VIABILIDAD DE TRANSMISIÓN",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571517/evotech/Portfolio/ViabilidadDeTransmisi%C3%B3n_xvhpyj.jpg",
    description: "Para este servicio se comprueban líneas de vista a través de software especializados."
  },
  {
    id:6,
    title: "SIMULACIONES DE RADIOFRECUENCIA",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571517/evotech/Portfolio/SimulacionesDeRadioFrecuencia_qbdboe.jpg",
    description: "Mediante herramientas apropiadas como cartografía y software especializado, usando parametros adecuados, con modelos de propagación y cartografía."
  },
  {
    id:7,
    title: "ESTUDIOS CON DRONES",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571517/evotech/Portfolio/EstudiosConDrones_rgba7t.jpg",
    description: "Estos son utilizadas para viabilidad de búsqueda de sitios y verificación de torres."
  },
  {
    id:8,
    title: "OPTIMIZACIÓN RF",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571517/evotech/Portfolio/SiteSurvey_du7p42.jpg",
    description: "La optimización de los sitios se logra haciendo cambios físicos azimut, tilt eléctrico, tilt mecánico y cambio de altura de antenas."
  },
  {
    id:9,
    title: "SITE SURVEY",
    imgPath: "https://res.cloudinary.com/dzkp92nfz/image/upload/v1671571516/evotech/Portfolio/Optimizaci%C3%B3nRf_nlogs6.jpg",
    description: "Las inspecciones de campo (Site Survey) en el área donde se formule su proyecto, se harán para grantizar la recolección de la información más precisa para la planeación, diseño o desarrollo del mismo"
  }
]

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
        //border: "solid 2px red",
        //height:{xs:"300vh", lg:"141vh"}
      }}
      >

      <div>
        <Typography gutterBottom variant="h4" 
          component="div"
          sx={{
            pt: {xs:"32px", sm:"40px"},
            textAlign:{xs:"center"},
            color: "white"
            //</div>m: {xs:"0-auto", sm:"40px"}
          }}
        >
          Nuestros Servicios
        </Typography>            
      
        <Box 
          sx={{
            maxWidth: {xs:"720px", sm:"780px", md:"900px", lg:"1200px"},
            m: 'auto',
            backgroundColor: "transparent",
            display:{ xs: "flex", lg:"flex" },
            justifyContent:{xs:"center", md:"end"},
            flexWrap:{xs:"wrap"},
            pt:"10px",
            mr:"10px",
            pb:1,
            height: {md:"234vh"}
          }}>
              {
                imgServices.map(imag => (
                  <CardServices imag={imag} key={imag.title}/>
                ))
              }
            
        </Box>
      </div>

    </div>
  );
};

export default Portfolio;

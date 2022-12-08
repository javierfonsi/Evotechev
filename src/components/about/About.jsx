import React from "react";
//import { motion } from "framer-motion";
//import BannerImage from "../common/drone-3.jpg";
import { Box } from "@mui/material";
import CardAbout from "./CardAbout";

const texts = [
  {
    id:1,
    title: "Somos",
    text: "Una compañía colombiana, con experiencia en el area RF, constituida por Ingenieros especializados en diferentes áreas con un objetivo común: Unir nuestro conocimiento y experiencia para proporcionar soluciones de ingeniería integrales, innovadoras y de alta calidad.",
  },
  {
    id:2,
    title: "Acerca de nosotros",
    text: "Nacimos en 2020 y hemos venido construyendo procesos de ingeniería para nuestros clientes. Contamos con un equipo de colaboradores para desarrollar soluciones innovadoras que sean de apoyo y motor para el crecimiento de nuestros clientes, nuestra gente y nuestros aliados.",
  },
  {
    id:3,
    title: "Nuestra propuesta de valor",
    text: "Consiste de un equipo joven, unas directrices claras y unas perspectivas favorables, las cuales hacen de EVOTECH, una organización que se apoya en la convicción que la calidad y el servicio son el objetivo de todos y cada uno de los componentes de nuestra organización. La preocupación por satisfacer en todo momento las necesidades de nuestros clientes, se ve reflejada en la amplia gama de soluciones profesionales ofrecidas por nuestra empresa en ingeniería civil, telecomunicaciones, eléctrica y electrónica."
  }
]

const About = () => {
  return (
    <div
      style={{
        //backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1669843539/evotech/About-xl_s59njp.jpg)`,
        backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1670453185/evotech/Nosotros/AboutR_J_cmjxgz.jpg)`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box 
        sx={{
          maxWidth: 1090,
          m: "auto",
          backgroundColor: "transparent",
          display:{ xs: "block", md:"flex" },
          alignContent:"space-around",
          pt:10,
          pb:10,
          height: {md:"80vh"}
        }}>
        {
          texts.map(text=>(
            <CardAbout text={text} key={text.id}/>
          ))
        }
      </Box>

    </div>
  );
};

export default About;

import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Box, Grid} from "@mui/material";
import MessageAppBar from "./common/MessageAppBar"
//import './BaseLayout.css'
import Home from "./home/Home"
import About from "./about/About"
import Portfolio from "./portfolio/Portfolio"
import Contact from "./contact/Contact"
import Customers from "./customers/Customers"

export default function BaseLayout() {

   return (
      <Box>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <MessageAppBar/>
            </Grid>
            <Grid item flexGrow={1}>
                <Routes>
                    <Route exact path={"/"} element={<Home />} />
                    <Route exact path={"/nosotros"} element={<About />} />
                    <Route exact path={"/portafolio"} element={<Portfolio />} />
                    <Route exact path={"/contacto"} element={<Contact />} />
                    <Route exact path={"/clientes"} element={<Customers />} />
                </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    p={'0'} m="0" sx={{opacity: 0.7}} width={'100%'}>
                                         CONTACTENOS
                     <p>Carrera 89A Nº 22A-22</p>
                     <p> +57 3142985001 </p>
                     <p> +57 3058175019 </p>
                     <p>+57 3108126624</p>
                     <p>info@evotechingenieria.com</p>
                     <p>Bogotá - Colombia</p>
                     <p>&copy; 2022 Evotech Ingenieria. All Rights reserved.</p>
                  {/*<Typography sx={{
                     fontSize: {xs:"1em", sm:"1.7em", md:"2.1em", lg:"2.6em"},
                     color:"white",
                     //position:"absolute",
                     //top:{ xs:"40%", sm:"25%", md:"40%"},
                     //left:{ xs:"5%", sm:"12%", lg:"25%"},
                     //right:{ xs:"5%", sm:"10%"},
                     }}> 

                  </Typography>*/}
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}


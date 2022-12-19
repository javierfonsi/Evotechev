import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import MessageAppBar from "./common/MessageAppBar"
//import './BaseLayout.css'
import Home from "./home/Home"
import About from "./about/About"
import Portfolio from "./portfolio/Portfolio"
import Contact from "./contact/Contact"
import Customers from "./customers/Customers"
import Footer from './common/Footer';

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
                    sx={{opacity: 0.7,
                     pt:"10px",
                     mt: "0px"
                    }} width={'100%'}>
                  <Typography sx={{fontSize: {xs:"1.4em", sm:"1.7em", md:"2.1em", lg:"2.6em"} }}>
                     Contactanos
                  </Typography>
                  <Footer/>
                  <p>&copy; 2022 Evotech Ingenieria. All Rights reserved. <a href={'"https://fullstack-javierfonseca.netlify.app/"'}>JF</a></p>
                  {/*<p>created by <a href={'"https://fullstack-javierfonseca.netlify.app/"'}>Javier Fonseca</a></p>*/}
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}


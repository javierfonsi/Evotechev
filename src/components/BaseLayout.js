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
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>&copy; 2022 Evotech Ingenieria. All Rights reserved.</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}


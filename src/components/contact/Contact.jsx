//import React, { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css"
import { Button,  TextField } from '@mui/material';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const navigate = useNavigate()
    const getInitialValues = () =>{
      return {
        email: "",
        nombre: "",
        info: ""
      }
    }

    const getValidationSchema = ()=>{
      return Yup.lazy((values) =>
      Yup.object().shape({
        email: Yup.string().required("Campo Obligatorio"),
        nombre: Yup.string().required("Campo Obligatorio"),
        info: Yup.string().required("Campo Obligatorio"),
      })
      );
    }

    const onSubmit = ( x )=>{
      //console.log(x)
      const templateParams = {
      name: x.nombre,
      message: x.info,
      email: x.email
      };

      //emailjs.send('service_rxdex6n','template_dcomid5', templateParams, '_xNTJSBnYLKp9i9sc')
      //emailjs.send('service_3k547da','template_hj1jg05', templateParams, 'NnagG_4iDnNH6SIyl')
      emailjs.send('service_digmwhl','template_hj1jg05', templateParams, 'NnagG_4iDnNH6SIyl')
  	  .then((response) => { console.log('SUCCESS!', response.status, response.text);
        }, (err) => { console.log('FAILED...', err);
  	  });
          navigate("/")
    }

    const { handleSubmit, values, setFieldValue } = useFormik({
      initialValues: getInitialValues(),
      validateOnChange: false,
      validateOnBlur: false,
      enableReinitialize: true,
      validationSchema: getValidationSchema(),
      onSubmit,
    })

  return (
    <div className='layaut'>
      <section className='main'>
        <div className='main-card'>
          <div className='title'>
            <h1>EVOTECH</h1>
            <h2 className='slogan'>Resuelve tus dudas, por lo que te invitamos a escribirnos.</h2>
          </div>
          <form className='container-form' onSubmit={handleSubmit}>
            <TextField className='email-field' 
                type="text" 
                label="Correo electrónico" 
                variant="outlined" 
                value={values.email || ""} 
                onChange={ (e)=>{
                  setFieldValue( "email" , e.target.value )
                }}
              />
            <TextField className='email-field' 
                type="text" 
                label="Ingresa tu nombre" 
                variant="outlined" 
                value={values.nombre || ""} 
                onChange={ (e)=>{
                  setFieldValue( "nombre" , e.target.value )
                }}
              />
            <TextField className='text-field' 
                type="text" 
                label="Ingresa tu información" 
                variant="outlined"
                multiline
                maxRows={4} 
                value={values.info || ""} 
                onChange={ (e)=>{
                  setFieldValue( "info" , e.target.value )
                }}
              />
            
              <Button className='email-field' variant="contained" color="info" type='submit'>Enviar</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { Typography, Button, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios'
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    map:{
        width:"400",
        height:"650",
        border:'0',
        allowfullscreen:"",
        loading:"lazy"
    },
    boxStyle:{
        marginTop:'50px',
        backgroundColor:'#f5f5f5'
    },
    form:{
        width: '70%',
        marginTop: theme.spacing(2),
    },
    paper:{
        margin: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));



   




const Section4 = () => {
 
    const [fName , setFname] = useState('')
    const [lName , setLname] = useState('')
    const [email , setemail] = useState('')
    const [msg , setmsg] = useState('')

    function submitForm (event){
        event.preventDefault();
        
        
        const form = {
            firstName: fName,
            lastName: lName,
            email: email,
            message: msg
        }

    
    axios.post(`https://fjsolutions-backend.herokuapp.com/contact-form`, { form })
        .then(res => {
        console.log(res);
        console.log(res.data);
    })
    
        
    }


    
    const handleChange = (event) => {
        const target = event.target
        console.log(target.value)
        switch (target.name) {
            case 'firstName':
                setFname(target.value)
                break;
            case 'lastName':
                setLname(target.value)
                break;
            case 'email':
                setemail(target.value)
                break;
            case 'message':
                setmsg(target.value)
                break;
            default:
                break;
        }
        
    }


    const classes = useStyles();

    
    return (
        <>
        
            <Box className={classes.boxStyle}>
            <CssBaseline />
                
                <Grid container  >
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                        <Box className={classes.paper}>
                            <Grid container className={classes.form} spacing={2}>
                                
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant="h2" color="secondary">
                                        Ponete en contacto
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                  <Typography variant="h6" color="secondary">
                                 Nos gustaría hablar sobre cómo podemos ayudarte !
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <iframe 
                                width="70%" 
                                height="100%" 
                                border-radius="25px"
                                title="My Daily Marathon Tracker" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.56709648031!2d-58.414129884174606!3d-34.615106765608964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf74ccf247f%3A0xc0bbb233df9ed3fe!2sAv.%20Belgrano%203231%2C%20C1210AAA%20CABA!5e0!3m2!1ses!2sar!4v1627345519781!5m2!1ses!2sar" className={classes.map} ></iframe>                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography variant="subtitle1" >Llamanos:</Typography>
                                  <Typography variant="subtitle2" >+54 9 11 6456 3969</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography variant="subtitle1" >Email:</Typography>
                                  <Typography variant="subtitle2" >infofjsolution@gmail.com</Typography>

                                </Grid>
                                
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                            
                            <Box className={classes.paper}>
                                <form className={classes.form}  onSubmit={submitForm}>
                                    <Grid container  spacing={2} >
                                        
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <TextField
                                                autoComplete="fname"
                                                name="firstName"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                error={false}
                                                onChange={handleChange}

                                            /> 
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                error={false}
                                                autoComplete="lname"
                                                onChange={handleChange}
                                                
                                            /> 
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <TextField
                                               variant="outlined"
                                               required
                                               fullWidth
                                               id="email"
                                               label="Email Address"
                                               name="email"
                                               error={false}
                                               autoComplete="email"
                                               type='email'
                                               onChange={handleChange}
                                            /> 
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <TextField
                                                
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="message"
                                                label="Message"
                                                id="message"
                                                multiline
                                                rows={4}
                                                error={false}
                                                autoComplete="Message"
                                                onChange={handleChange}
                                            /> 
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                             >
                                                Enviar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Divider variant="middle" />

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Typography variant="subtitle2" color="initial">
                                                Nos vamos a contactar con vos a la brevedad ! Muchas gracias 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                
                                </form>
                            </Box>
                            
                    </Grid>
                
                </Grid>

            

            </Box>


        </>
    )
}

export default Section4 ;





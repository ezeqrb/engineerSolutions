import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { Typography, Button, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    map:{
        width:"800",
        height:"60",
        border:'0',
        allowfullscreen:"",
        loading:"lazy"
    },
    backgroundForm:{
        backgroundColor:'#f5f5f5'
    },
    boxStyle:{
        marginTop:'50px'
    },
    form:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

const Section4 = () => {

    const classes = useStyles();
        
    
    return (
        <>
        
            <Box className={classes.boxStyle}>
                <form className={classes.form} noValidate >
                <Grid container  >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                            <Grid container >
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                  <Typography variant="subtitle1" color="initial">
                                    CONTACT US
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant="h2" color="initial">
                                        Get in touch
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                  <Typography variant="h6" color="initial">
                                  We'd love to talk about how we can help you
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.56709648031!2d-58.414129884174606!3d-34.615106765608964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf74ccf247f%3A0xc0bbb233df9ed3fe!2sAv.%20Belgrano%203231%2C%20C1210AAA%20CABA!5e0!3m2!1ses!2sar!4v1627345519781!5m2!1ses!2sar" className={classes.map} ></iframe>                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography variant="subtitle1" >Call us:</Typography>
                                  <Typography variant="subtitle2" >+39 34 111 222</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography variant="subtitle1" >Email us:</Typography>
                                  <Typography variant="subtitle2" >hi@maccarianagency.com</Typography>

                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography variant="subtitle1" >Address:</Typography>
                                  <Typography variant="subtitle2" >Via E. Gola 4, Milan MI, Italy</Typography>

                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                            
                            <Box className={classes.backgroundForm}>
                                <Grid container className={classes.form} >
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField
                                            error
                                            id="outlined-error"
                                            label="Error"
                                            defaultValue="First Name"
                                            variant="outlined"
                                        /> 
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField
                                            error
                                            id="outlined-error"
                                            label="Error"
                                            defaultValue="Last Name"
                                            variant="outlined"
                                        /> 
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            error
                                            id="outlined-error"
                                            label="Error"
                                            defaultValue="Email"
                                            variant="outlined"
                                        /> 
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            error
                                            id="outlined-error"
                                            label="Error"
                                            defaultValue="Message"
                                            variant="outlined"
                                        /> 
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button variant="outlined" color="default" type='submit'>
                                            Submit
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Divider variant="middle" />

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Typography variant="subtitle2" color="initial">
                                            By clicking on "submit" you agree to our Privacy Policy, Data Policy and Cookie Policy.
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                            
                    </Grid>
                
                </Grid>

            </form>

            </Box>


        </>
    )
}

export default Section4 ;
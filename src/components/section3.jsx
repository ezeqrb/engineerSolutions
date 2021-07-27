import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import imagen2 from '../assets/imagen2.png'




const useStyles = makeStyles({
    contenedor:{
        paddingTop :'50px',
    },
    imagen2:{
        width:'50vw',
        
    }
});

const Section3 = () => {
    
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <>
        
            <Box >

                <Grid container  className={classes.contenedor} >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            
                            <Typography variant="h6" color="secondary">
                                FJ Solutiones 
                            </Typography>
                            
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            
                            <Typography variant="h2" color="secondary">
                                FJ Solutiones 
                            </Typography>
                            
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            
                            <Typography variant="h5" color="secondary">
                                FJ Solutiones 
                            </Typography>
                            
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            
                            <img src={imagen2} className={classes.imagen2}/>
                            
                    </Grid>

                </Grid>



            </Box>


        </>
    )
}

export default Section3 ;
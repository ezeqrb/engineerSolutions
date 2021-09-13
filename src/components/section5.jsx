import React from 'react'
import Grid from '@material-ui/core/Grid'
import Cards from './card'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'




const useStyles = makeStyles((theme) => ({
    contieneCards:{
        display:'flex',
        justifyContent:'center'
    },
    cartitas:{
        margin:'0px 0px 50px 50px'
    }
   
  }));




function Section5() {
    
    
    const classes = useStyles();

    return (
        <>

            <Grid container  
                direction="row"
                justifyContent="center" 
                alignItems="center"
                spacing={4}>
                
                
                    <Grid item >
                        <Box mb={3} mt={4}>
                            <Cards  
                                img='/img1.jpeg'
                                tittle='Mantenimiento electrico'
                                content='assets/img1.jpeg'
                            />
                        </Box>
                    </Grid>
                    <Grid item >
                        <Box mb={3} mt={4}>
                            <Cards 
                                img='/img2.jpeg'
                                tittle='Mantenimiento electrico'
                                content='assets/img1.jpeg'
                            /> 
                        </Box>
                    </Grid>

                    <Grid item >
                        <Box mb={3} mt={4}>
                            <Cards 
                                img='/img3.jpeg'
                                tittle='Mantenimiento electrico'
                                content='assets/img1.jpeg'
                            />
                        </Box>
                    </Grid>
                
            </Grid>
            
        </>
    )
}

export default Section5

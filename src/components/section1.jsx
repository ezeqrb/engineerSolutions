import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import imagen1 from '../assets/imagen3.png'
import { CalendarViewDay } from '@material-ui/icons';




const useStyles = makeStyles({
   
    imagen1:{
        width:'100%',
        height:'75%',
       
    },
    contenedor:{
        paddingTop :'50px',
        
        
        height:'60vh'
    },
    text:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    cuadro:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        backgroundColor: '#f5f5f5',
    }
})

const Section1 = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    return ( 
        <>
            <Box className={classes.box}>
                <Grid 
                container 
                className={classes.contenedor}
                

                >
                
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.text} >
                        <Typography variant="h2" color="secondary" >
                            FJ Solutions 
                        </Typography>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={6} lg={6} xl={6} className={classes.cuadro}>
                        <img src={imagen1} className={classes.imagen1} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
 
export default Section1;
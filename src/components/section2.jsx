import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import iconbg from '../assets/iconbg.png'


const useStyles = makeStyles({
    boxContainer: {
        padding:'25px 100px '
    },
    icondiv:{
        backgroundImage : `url(${iconbg})`,
        backgroundPosition: 'center',
        height : '55px',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },

     
    
  });


const Section2 = (props) => {

    const classes = useStyles();

    return ( 
        <>
            <Box >
                <Grid 
                container 
                className={classes.boxContainer}
            
                >
            
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}  >
                        
                        <div className={classes.icondiv} > {props.i1} </div>
                            
                            <Typography variant="h6" color="secondary">
                                {props.t1} 
                            </Typography>
                            <Typography variant="subtitle1" color="secondary" >
                                {props.s1} 
                            </Typography>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                    <div className={classes.icondiv}  >{props.i2}</div>
                        <Typography variant="h6" color="secondary">
                            {props.t2}  
                        </Typography>
                        <Typography variant="subtitle1" color="secondary" >
                            {props.s2} 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                    <div className={classes.icondiv}  >{props.i3}</div>
                        <Typography variant="h6" color="secondary">
                            {props.t3}  
                        </Typography>
                        <Typography variant="subtitle1" color="secondary" >
                            {props.s3} 
                        </Typography>
                    </Grid>
                </Grid> 
            </Box>  
        </>
    );
}



export default Section2 ;
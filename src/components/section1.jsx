import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';




const Section1 = (props) => {

   


    return ( 
        <>
        <Grid 
        container spacing={1} 
        alignItems="center"
        >
        
            <Grid item sm={6} >
                <Typography variant="h2" color="secondary">
                    FJ Solutiones 
                </Typography>
            </Grid>
            <Grid item sm={6} >
                <img src={"./pic1.png"} />
            </Grid>
        </Grid>
        </>
    );
}
 
export default Section1;
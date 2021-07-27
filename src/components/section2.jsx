import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import iconbg from '../assets/iconbg.png'


const useStyles = makeStyles({
    boxContainer: {
        padding:'50px 50px '
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


const Section2 = () => {

    const classes = useStyles();
    const theme = useTheme();

    return ( 
        <>
            <Box >
                <Grid container 
                className={classes.boxContainer}
            
                >
            
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                        <Box>
                        <div className={classes.icondiv}  ><EmojiPeopleRoundedIcon /></div>
                            
                            <Typography variant="h6" color="secondary">
                                FJ Solutiones 
                            </Typography>
                            <Typography variant="subtitle1" color="secondary">
                                FJ Solutiones 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                    <div className={classes.icondiv}  ><EmojiPeopleRoundedIcon /></div>
                        <Typography variant="h6" color="secondary">
                            FJ Solutiones 
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            FJ Solutiones 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                    <div className={classes.icondiv}  ><EmojiPeopleRoundedIcon /></div>
                        <Typography variant="h6" color="secondary">
                            FJ Solutiones 
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            FJ Solutiones 
                        </Typography>
                    </Grid>
                </Grid> 
            </Box>  
        </>
    );
}



export default Section2 ;
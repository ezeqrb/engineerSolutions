import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import Box from '@material-ui/core/Box';


const Section2 = () => {
    return ( 
        <>
            <Grid 
        container spacing={2} 
        alignItems="center"
        >
        
            <Grid item sm={4} >
                <Box>
                    <EmojiPeopleRoundedIcon />
                    <Typography variant="h6" color="secondary">
                        FJ Solutiones 
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                        FJ Solutiones 
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={4} >
                <EmojiPeopleRoundedIcon />
                <Typography variant="h6" color="secondary">
                    FJ Solutiones 
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    FJ Solutiones 
                </Typography>
            </Grid>
            <Grid item sm={4} >
                <EmojiPeopleRoundedIcon /> 
                <Typography variant="h6" color="secondary">
                    FJ Solutiones 
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    FJ Solutiones 
                </Typography>
            </Grid>
        </Grid>   
        </>
    );
}



export default Section2 ;
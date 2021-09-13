import React from 'react'
import Grid from '@material-ui/core/Grid'
import Cards from './card'
import Box from '@material-ui/core/Box'


function Section5() {
    
    
    return (
        <>

            <Grid container  
                direction="row"
                justifyContent="center" 
                alignItems="center"
                >
                
                
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
                        <Box mb={3} mt={4} ml={5} mr={5}>
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

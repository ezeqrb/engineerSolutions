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
                                content='Climatización y mantenimiento vrv'
                            />
                        </Box>
                    </Grid>
                    <Grid item >
                        <Box mb={3} mt={4} ml={2} mr={1} >
                            <Cards 
                                img='/img2.jpeg'
                                tittle='Mantenimiento electrico'
                                content='Obras, instalación y reparación'
                            /> 
                        </Box>
                    </Grid>

                    <Grid item >
                        <Box mb={3} mt={4} ml={1} mr={2}>
                            <Cards 
                                img='/img3.jpeg'
                                tittle='Mantenimiento electrico'
                                content={`Montajes , cableado e instalaciones`}
                            />
                        </Box>
                    </Grid>

                    <Grid item >
                        <Box mb={3} mt={4}>
                            <Cards 
                                img='/img4.jpeg'
                                tittle='Arquitectura'
                                content='Diversos arreglos y obras de remodelación  '
                            />
                        </Box>
                    </Grid>

                
            </Grid>
            
        </>
    )
}

export default Section5

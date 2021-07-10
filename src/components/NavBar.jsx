import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = (props) => {
    return ( 
        <>
        
        <AppBar position="fixed" color="#E1E8EB">
          <Toolbar>
            <Typography variant="h6">
              
            </Typography>
          </Toolbar>
        </AppBar>
        </>
    );
}
 
export default NavBar;
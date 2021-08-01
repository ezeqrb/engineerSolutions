import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../assets/favicon.png'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  logo:{
    width:'40px',
    height:'40px',
    marginRight:'8px'
  }

}))

const NavBar = (props) => {

  const classes = useStyles();
  
  
  return ( 
        <>
        
        <AppBar position="fixed" color="#E1E8EB">
          <Toolbar> 
            <img src={logo} className={classes.logo} alt='FJ solutions logo by zker'/>
            <Typography variant="h5">
                 SOLUTIONS
            </Typography>
          </Toolbar>
        </AppBar>
        </>
    );
}
 
export default NavBar;
import { createTheme } from '@material-ui/core/styles';

 const theme =  createTheme({
    palette:{
        primary:{
            main:"#FFC107"
        },
        secondary:{
            main:"#7952B3"
        },
        third:{
            main:"#343A40"
        }
    },
    typography:{
        fontFamily: "Inter",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700, 
    }
});

export default theme 
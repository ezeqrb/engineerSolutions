import { createTheme } from '@material-ui/core/styles';

 const theme =  createTheme({
    palette:{
        primary:{
            main:"#65bfb0"
        },
        secondary:{
            main:"#2d3748"
        },
        third:{
            main:"#E1E8EB"
        }
    },
    typography:{
        fontFamily: "Inter",
        h1:{
            fontWeight: 850,
        },
        h2:{
            fontWeight: 800,
        },
        h3:{
            fontWeight: 750,
        },
        h4:{
            fontWeight: 700,
        },
        h5:{
            fontWeight: 600,
        },
        h6:{
            fontWeight: 500,
        },
        subtitle1:{
            fontWeight: 400,
        },
    }
});

export default theme 
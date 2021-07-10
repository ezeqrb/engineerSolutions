import logo from './logo.svg';
import './App.css';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import  NavBar  from './components/NavBar';
import  Section1 from './components/section1';
import  Section2 from './components/section2';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
  bg1: {
    backgroundColor: '#f5f5f5',
    
  },
});

function App() {
  const theme = useTheme();
  const classes = useStyles();


  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl" className={classes.bg1}>
        <Section1 />
        
      </Container>
      <Container maxWidth="xl">
        <Section2 />
      </Container>
    </div>
  );
}


export default App;

import { makeStyles } from '@material-ui/core/styles';
import NavBar  from './components/NavBar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3  from './components/section3';
import Section4 from './components/section4';



const useStyles = makeStyles({
  app:{
    textAlign: 'center',
    
  }
});

function App() {
  const classes = useStyles();


  return (
    <div className={classes.app}>
        <NavBar/>
        <Section1 />
        <Section2 
        t1='FJ Solutions'
        s1='asdasdsadasdsadas'
        t2='FJ Solutions'
        s2='asdasdsadasdsadas'
        t3='FJ Solutions'
        s3='asdasdsadasdsadas'/>
        <Section2 
        t1='FJ Solutions'
        s1='asdasdsadasdsadas'
        t2='FJ Solutions'
        s2='asdasdsadasdsadas'
        t3='FJ Solutions'
        s3='asdasdsadasdsadas'/>
        <Section3 />
        <Section4 />
        
    </div>
  );
}


export default App;

import { makeStyles } from '@material-ui/core/styles';
import NavBar  from './components/NavBar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3  from './components/section3';
import Section4 from './components/section4';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PowerIcon from '@material-ui/icons/Power';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Section5 from './components/section5';



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
        i1 =  {<AcUnitIcon />}
        t1='Refrigeracion'
        s1='Mantenimiento y obras
        Split-Rooftop-VRV-Cámara frigoríficas'
        i2 =  {<PowerIcon />}
        t2='Electricidad'
        s2='Mantenimiento y montajes
        Tableros y tendidos en baja tensión'
        i3 =  {<WbIncandescentIcon />}
        t3='Iluminación'
        s3='Proyectos y montajes
        Optimizamos y automatizamos tu iluminación
        '/>
        <Section2 
          i1 =  {<SettingsIcon />}
          t1='Repuestos'
          s1='Somos tu aliado estratégico en repuestos de todo tipo.'
          i2 =  {<AccountBalanceIcon />}
          t2='Arquitectura general'
          s2='Realizamos arreglos en Durlock, herrería y pintura'
          i3 =  {<AcUnitIcon />}
          t3='Renta de equipos de AACC'
          s3='Tenemos a disposición equipos autónomos de Aire acondicionado'/>
        <Section5 />
        <Section3 />
        <Section4 />
        
    </div>
  );
}


export default App;

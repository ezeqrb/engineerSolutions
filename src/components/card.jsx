import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { CardActionArea } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
   
  }));

function Tarjeta(props) {

  const classes = useStyles();


    return (
      
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.tittle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.content}
                </Typography>
              </CardContent>
            </CardActionArea>
        
          </Card>
        </div>
    )
}

export default Tarjeta

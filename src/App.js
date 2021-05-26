
import './App.css';

import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import GitHubIcon from '@material-ui/icons/GitHub';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,Paper,ButtonBase,Button,CardMedia,CardContent,Card,CardActions,Container } from '@material-ui/core';
import covid19 from './covid19.jpg';

import Divider from '@material-ui/core/Divider';

import TAble from './Table';
import Footer from './Footer';

import { BrowserRouter as Router } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    marginTop:theme.spacing(2),
  },
  title2:{
    marginTop:theme.spacing(1),
    fontSize: theme.spacing(3),
    display: "block",
    fontFamily:"fontFamily"
  },
  title3:{
    marginTop:theme.spacing(5),
    display: "block",
    fontFamily:"sans-serif"
  },
  lowerwords:{
    height:100,
    width:200

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 720,
    maxHeight:"100%",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
   
  },
  carde:{
    height:"100%",
    display:'flex',
    flexDirection:"column",
    maxWidth: 200,
  },
  root2: {
    display: 'flex',
    marginTop:theme.spacing(2),
    justifyContent:'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(20),
    },


  },
  root3: {
    flex: 1,
    justifyItems:"center",
    alignItems:'center',
    
    
    
  },
  cardGrid:{
    padding:'20px 0'
  },

  footer:{
    display:'flex',
    flexDirection:"column",
    minWidth: theme.spacing(20)

  }


  
}));

function App(props) {
  const classes = useStyles();

  const [Covidsummary,setCovidsummary]=useState([]);
  const getData= async() =>{
      const worldStat= await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
          'x-rapidapi-key': 'ba61444e23msh2308b97d6e9dcbap10dd42jsne2697e354bcb',
        },
      })
        .then((response) =>
          response.json().then((data) => {
              setCovidsummary(data);
          })
        )
        .catch((err) => {
          console.log(err)
        })
      
      }

      useEffect(() => {
       
        getData();
       
      }, [Covidsummary]);


  return (
    <>
    <CssBaseline/>
   <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalHospitalIcon  color="secondary" />
          </IconButton>
          <Typography variant="h6" className={classes.menuButton} color="inherit">
            Covid19 Stats
          </Typography>
          {/* <Typography variant="h6"  color="inherit">
          External Links
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <GitHubIcon  color="action" />
          </IconButton> */}
        
        </Toolbar>
      </AppBar>

<main>
<div>
<Typography variant="h2"  color="inherit" align="center" className={classes.title} gutterBottom>
COVID-19 Statistics Updates
          </Typography>
</div>

<div>
<Typography variant="subtitle1"  color="inherit" align="center" className={classes.title2} gutterBottom>
Global statistics and per country analysis
          </Typography>
</div>

<div className={classes.root}>
<Container  maxWidth="md">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={covid19} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                No. of people tested positive for covid-19
                </Typography>
                {/* <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="contained" href="http://www.google.com/"
               style={{ cursor: 'pointer' }} color="secondary">
            Learn From WHO
            </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </Container>
    </div>
<div className={classes.root2}>

      <Paper  elevation={20} >
      <Typography variant="subtitle1" align="center" className={classes.title2} gutterBottom>
      Total Cases
          </Typography>
          <Divider/>

          <Typography variant="h6"   align="center" className={classes.title2} gutterBottom>
      {Covidsummary.total_cases}
          </Typography>

      </Paper>
      <Paper  elevation={20} >
      <Typography variant="subtitle1" align="center" className={classes.title2} gutterBottom>
      New Cases
          </Typography>
          <Divider/>

          <Typography variant="h6"   align="center" className={classes.title2} gutterBottom>
      {Covidsummary.new_cases}
          </Typography>

      </Paper>

      <Paper  elevation={15} >
      <Typography variant="subtitle1"  color="primary" align="center" className={classes.title2} gutterBottom>
      Total Deaths
          </Typography>
          <Divider/>

          <Typography variant="h6"   align="center" className={classes.title2} gutterBottom>
      {Covidsummary.total_deaths}
          </Typography>
      </Paper>
      <Paper  elevation={3} >
      <Typography variant="subtitle1"  color="secondary" align="center" className={classes.title2} gutterBottom>
      New Deaths
          </Typography>
          <Divider/>

          <Typography variant="h6"   align="center" className={classes.title2} gutterBottom>
      {Covidsummary.new_deaths}
          </Typography>
      </Paper>
   

</div>
<div  className={classes.root3}>
<Container maxWidth="md">
  <TAble />
 
  </Container>
</div>
<div >
  <div className={classes.footer}>
  <footer>

</footer >
</div>
</div>


</main>

    </div>
    <Footer />
    </>


  );
}

export default App;

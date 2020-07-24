import {useEffect, useState,useStyles} from 'react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function FetchGlobalStats(){

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

  const [globalStats,setGlobalStats]= useState([{}])

  useEffect (() => {
    async function getGlobalData() {
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?global=stats");
      const data = await response.json()
      console.log(data)
      delete data.results[0].source;
      setGlobalStats(data.results[0])
      console.log(data.results[0])  

    }
    getGlobalData();
  }, [])
  console.log(globalStats)  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {/* {Object.key(globalStats).map((key,ind)=> {
          return (
            <Grid item xs key= {ind}>
              <Paper className={classes.paper}>
                <h2></h2>
                <h3></h3>  
              </Paper>
            </Grid>
          )
        })} */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2>Total Cases</h2>
            <h3>{globalStats.total_cases}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <h2>Active Cases</h2>
          <h3>{globalStats.total_unresolved}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2>Recovered Cases</h2>
            <h3>{globalStats.total_recovered}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2>Total Death</h2>
            <h3>{globalStats.total_deaths}</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default FetchGlobalStats
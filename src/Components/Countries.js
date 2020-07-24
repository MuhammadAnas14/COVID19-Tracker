import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(6),
      width: '50ch',

    },
    rootgrid: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  },
}));

const AllCountries = () => {

  const classes = useStyles();
  const [countriesTitle, setcountriesTitle] = useState("")
  const [globalData,setGlobalData]= useState([{}])

  

  const handleChange = (event) => {
    setcountriesTitle(event.target.value);

  };

  const submitHandler = () => {
    const findCountry = globalData.filter(country => country.title === countriesTitle)
    console.log("SSS: ",findCountry)
  }
  useEffect(()=> {
    async function getCountriesData() {
      const response = await fetch ("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      const data = await response.json();
      delete data.sitedata;
      setGlobalData(Object.values(Object.values(data.countryitems)[0]));
    }
    getCountriesData()
  },[])
  console.log(globalData)
  // console.log(countriesTitle)
  const findCountry = globalData.filter(country => country.title === countriesTitle)
  // let foundCountry= findCountry[0]
  // console.log(foundCountry)
  let details = ""
  if (findCountry.length === 0){
    console.log('loading')
    
  }
  else {
    console.log("working")
    details = (
    
    <div className={classes.rootgrid}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <h2>Total Cases</h2>
            <h3>{findCountry[0].total_cases}</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <h2>Active Cases</h2>
            <h3>{findCountry[0].total_active_cases}</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <h2>Total Death</h2>
            <h3>{findCountry[0].total_deaths}</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <h2>Total Recovered</h2>
            <h3>{findCountry[0].total_recovered}</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
  }

  return(
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Choose A Country"
          value={countriesTitle}
          onChange={handleChange}
          helperText="Please select your Country"
        >
          {globalData.map((option) => (
            <MenuItem key={option.ourid} value={option.title}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      {details}
    </form>
    
  )

}

export default AllCountries
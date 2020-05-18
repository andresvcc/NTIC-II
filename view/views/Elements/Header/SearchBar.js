/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import cities from '../../Home/database/cities';
import countries from '../../Home/database/countries';
import owner from '../../Home/database/owner';


// console.log(allData);


const allCountries = countries.filter((country) => country.name !== undefined);
const allData = allCountries.concat(cities.concat(owner));


function sortByProperty(property) {
  return (a, b) => {
    if (a[property] > b[property]) return 1;
    if (a[property] < b[property]) return -1;

    return 0;
  };
}

const allDataSort = allData.sort(sortByProperty('name'));

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  autocomplete: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100%'
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  input: {
    width: '100%'
  }
}));

function ComboBox() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="combo-box-demo"
      className={classes.autocomplete}
      options={allDataSort}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <InputBase
          className={classes.input}
          ref={params.InputProps.ref}
          placeholder="Search on the map"
          inputProps={params.inputProps}
          autoFocus
        />
      )}
    />
  );
}

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>

      <ComboBox />

      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import cities from '../../Home/database/cities';
import countries from '../../Home/database/countries';

import {
  redux
} from '../../component';

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

function sortByProperty(property) {
  return (a, b) => {
    if (a[property] > b[property]) return 1;
    if (a[property] < b[property]) return -1;
    return 0;
  };
}

const allCountries = countries.filter((country) => country.name !== undefined);
const allData = allCountries.concat(cities);

function ComboBox() {
  const [stateRedux, dispatch] = redux();
  const [dataRows, setData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const spliterData = [];
    stateRedux.librairiesData.forEach((element) => {
      if (element.type === 'polygon') {
        element.markers.forEach((markers) => {
          spliterData.push({
            id: markers.id,
            name: markers.name,
            type: markers.type,
            pos: markers.pos,
            city: markers.city.name
          });
        });
      } else {
        spliterData.push({
          id: element.id,
          name: element.name,
          type: element.type,
          pos: element.pos,
          city: element.city.name
        });
      }
    });
    const allDataCont = allData.concat(spliterData);
    const allDataSort = allDataCont.sort(sortByProperty('name'));
    setData(allDataSort);
  }, [stateRedux.librairiesData]);

  const zoomClickTraslate = async (data) => {
    if (data.pos !== undefined) {
      const placeZoom = data.type === 'country' ? 6 : data.type === 'region' ? 9 : data.type === 'city' ? 12 : 17;
      await dispatch({
        state: 'center',
        value: {
          pos: data.pos || [0, 0],
          zoom: placeZoom
        }
      });
    } else {
      console.log('place not gps detected');
    }
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      className={classes.autocomplete}
      open={stateRedux.openSearch}
      options={dataRows}
      onOpen={() => dispatch({ state: 'openSearch', value: true })}
      clearOnBlur
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => `${option.type}: ${option.name}`}
      onChange={(event, value) => (value ? zoomClickTraslate(value) : true)}
      onKeyPress={(ev, value) => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
        }
      }}
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
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />

      <ComboBox />
    </Paper>
  );
}

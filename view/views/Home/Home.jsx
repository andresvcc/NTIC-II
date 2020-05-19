import 'babel-polyfill';
import React, { useEffect, useState, Fragment } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {
  CssBaseline,
} from '@material-ui/core';
import SearchBar from '../Elements/Header/SearchBar';


import Map from './sections/map';
import VerticalMenu from './sections/slide';

import {
  Header,
  Body,
} from '../elements';

import {
  redux
} from '../component';

import styles from './homeStyle';

const useStyles = makeStyles((theme) => ({
  ...styles(theme, fade)
}));

export default function Home() {
  const classes = useStyles();
  const [search, setSearch] = useState(undefined);
  const [stateRedux, dispatch] = redux();

  const changeSearch = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header classes={classes} />

      {
        stateRedux.pageSize > 5 ? '' : (
          <div className={classes.gTbox}>
            <SearchBar />
          </div>
        )
      }

      <Body classes={classes}>
        <VerticalMenu />
        <Map classes={classes} />
      </Body>
    </div>
  );
}

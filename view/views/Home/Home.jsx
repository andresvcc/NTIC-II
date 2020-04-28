import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
} from '@material-ui/core';

import Map from './sections/map';


import {
  Header,
  Body,
} from '../elements';

import styles from './homeStyle';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title="UNIGE" classes={classes} />

      <Body classes={classes}>
        <Map classes={classes} />
      </Body>
    </div>
  );
}

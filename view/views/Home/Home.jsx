import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
} from '@material-ui/core';

import Map from './sections/map';

import {
  GridRow,
} from '../component';

import {
  Header,
  Body,
} from '../elements';

import styles from './homeStyle';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 5
    }}
  />
);

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

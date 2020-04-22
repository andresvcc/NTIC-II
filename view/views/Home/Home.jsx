import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
} from '@material-ui/core';

import Map from './sections/map';

import {
  GridRow,
  VerticalTabs,
  Scroll
} from '../component';

import {
  Header,
  Body,
  Footer,
} from '../elements';

import styles from './homeStyle';
import VerticalMenu from './sections/VerticalMenu';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title="MEISTER ENGINEERING" classes={classes}>
        <Map classes={classes} />
      </Header>


      <Body classes={classes}>
        <Scroll>
          <VerticalMenu classes={classes} />
        </Scroll>
      </Body>

      <Footer>
        <GridRow justify="space-around">
          <h6 style={{ color: 'red' }}>Information 1</h6>
          <h6>Information 2</h6>
          <h6>Information 3</h6>
        </GridRow>
      </Footer>
    </div>
  );
}

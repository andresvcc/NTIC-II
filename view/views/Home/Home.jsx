import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
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
  const [stateRedux, dispatch] = redux();

  return (
    <div className={classes.root}>
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

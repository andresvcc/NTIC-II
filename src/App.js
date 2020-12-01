import 'babel-polyfill';
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from './sections/dialog';
import SearchBar from './sections/SearchBar';
import SearchBar2 from './sections/SearchBar2';
import PointerText from './sections/pointerText';
import {
  PigeonMap,
  AppBar,
  BottomBar,
  redux,
  Slider
} from './component';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: '#bfbfbf'
  },
}));

const App = () => {
  const classes = useStyles();
  const [stateRedux, dispatch] = redux();

  useEffect(() => {
    // console.log('dataMap', stateRedux.dataMap);
  }, [stateRedux.dataMap]);

  return (
    <>
      <Dialog />
      <AppBar>
        <Avatar alt="logo" src={`${__API__}/logo.svg`} style={{ width: '7vh', height: '7vh', margin: '1vw' }} />
        <Typography variant="h6" className={classes.title}>
          { window.innerWidth < 820 ? 'DS:the Achilleid' : 'Digital Statius : the Achilleid'}
        </Typography>
      </AppBar>
      <SearchBar2 />
      <PointerText />
      <PigeonMap />
    </>
  );
};

export default hot(App);

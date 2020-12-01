/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';
import Draggable from 'react-draggable';
import TimelineIcon from '@material-ui/icons/Timeline';
import cities from '../../database/cities';
import countries from '../../database/countries';

import {
  redux,
  Slider2,
  GridCenter,
  GridColon,
  GridRow,
  hookDeviceInfo,
  Button
} from '../component';

const styles = ({ device }) => ({
  paper: {
    position: 'absolute',
    top: '10vh',
    left: '1vw',
    zIndex: 99,
  },
});

export default function CustomizedInputBase() {
  const [stateRedux, dispatch] = redux();
  const device = hookDeviceInfo();
  const style = styles({ device });

  return (
    <Paper
      elevation={device.width < 500 ? 3 : 1}
      style={style.paper}
    >
      <GridCenter height={device.type === 'browser' ? 1 : 3} />
      <Slider2 />
    </Paper>
  );
}

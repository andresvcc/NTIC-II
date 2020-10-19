import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: -8,
    background: 'transparent',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  AppBar: {
    height: '4vh',
    width: '100vw',
    background: 'transparent',
  },
  Toolbar: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.9444152661064426) 20%, rgba(0,0,0,0.8491771708683473) 51%, rgba(0,0,0,0.23573179271708689) 100%)',
    height: '4vh'
  }
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar variant="dense" className={classes.Toolbar}>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

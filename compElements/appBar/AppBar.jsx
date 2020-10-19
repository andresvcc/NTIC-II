import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  AppBar: {
    height: '8vh'
  },
  Toolbar: {
    background: '#333233',
    height: '8vh'
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

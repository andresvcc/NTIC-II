import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuButton from './MenuButton';
import {
  Slider,
} from '../../component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: '1100',
    width: '100%',
    boxShadow:
      '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderElement(props) {
  const classes = useStyles();
  const {
    title,
    children,
    ...rest
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="logo" src={`${__API__}/logo.svg`} style={{ width: '60px', height: '60px' }} />
          {
            window.innerWidth < 560 ? (
              <span style={{ color: 'transparent' }}>CDM</span>
            ) : (
              <Typography variant="h6" className={classes.title}>
                Digital Statius : the Achilleid
              </Typography>
            )
          }
          <Slider />
          <MenuButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderElement.defaultProps = {
  classes: {},
  title: 'TITLE UNDEFINED'
};

HeaderElement.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  grid: {
    width: 'auto',
    height: '100%',
    border: 'none',
    verticalAlign: 'middle',
    textAlign: 'center',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  }
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const {
    children, className, ...rest
  } = props;
  return (
    <Grid item className={`${classes.grid} ${className}`} {...rest}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ''
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

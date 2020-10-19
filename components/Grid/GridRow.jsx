import React, { useEffect } from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import Grid from '@material-ui/core/Grid';

const verticalAsing = (value) => {
  if (value === 'top') return 'flex-start';
  if (value === 'bottom') return 'flex-end';
  return 'center';
};

const horizontalAsing = (value) => {
  if (value === 'left') return 'flex-start';
  if (value === 'right') return 'flex-end';
  if (value === 'around') return 'space-around';
  if (value === 'between') return 'space-between';
  return 'center';
};

export default function GridRow(props) {
  const {
    children, width, className, vertical, horizontal, dev, ...rest
  } = props;

  return (
    <Grid
      style={{ width, background: dev ? '#7aff006e' : 'transparent' }}
      container
      direction="row"
      justify={horizontalAsing(horizontal)}
      alignItems={verticalAsing(vertical)}
      className={className}
      spacing={0}
      {...rest}
    >
      {children}
    </Grid>
  );
}

GridRow.defaultProps = {
  className: '',
  vertical: 'center',
  horizontal: 'center',
  width: '100%'
};

GridRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.oneOf(['top', 'bottom', 'center']),
  horizontal: PropTypes.oneOf(['left', 'right', 'around', 'between', 'center']),
  width: PropTypes.any
};

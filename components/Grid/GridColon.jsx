import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import Grid from '@material-ui/core/Grid';

const root = ({ dev }) => ({
  background: dev ? '#e84bd55e' : 'transparent',
  // cursor: 'none',
  userSelect: 'none',
  outline: 'none',
});

const verticalAsing = (value) => {
  if (value === 'top') return 'flex-start';
  if (value === 'bottom') return 'flex-end';
  if (value === 'around') return 'space-around';
  return 'center';
};

const horizontalAsing = (value) => {
  if (value === 'left') return 'flex-start';
  if (value === 'right') return 'flex-end';
  return 'center';
};

export default function GridColon(props) {
  const {
    children, className, horizontal, vertical, spacing, dev, ...rest
  } = props;
  return (
    <Grid
      style={root({ dev })}
      container
      direction="column"
      justify={verticalAsing(vertical)}
      alignItems={horizontalAsing(horizontal)}
      className={className}
      spacing={spacing}
      {...rest}
    >
      {children}
    </Grid>
  );
}

GridColon.defaultProps = {
  className: '',
  spacing: 0,
};

GridColon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.number,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  dev: PropTypes.bool,
};

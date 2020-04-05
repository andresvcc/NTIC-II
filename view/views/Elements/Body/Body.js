import React from 'react';
import PropTypes from 'prop-types';

export default function BodyElement(props) {
  const {
    classes,
    children,
    ...rest
  } = props;

  return (
    <div className={classes.bodyDiv} {...rest}>
      {children}
    </div>
  );
}

BodyElement.defaultProps = {
  classes: {},
};

BodyElement.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any
};

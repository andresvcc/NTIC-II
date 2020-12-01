import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import GridCenter from './GridCenter';
import GridRow from './GridRow';

const styles = ({
  width, height, symmetrical, dev, unsel
}) => ({
  root: {
    width: typeof width === 'string' ? width : `${width}vw`,
    height: height < 0 ? 0 : height === 0 ? 'auto' : `${height}${symmetrical ? 'vw' : 'vh'}`,
    background: dev ? '#ff000045' : 'transparent',
    // cursor: 'none',
    // userSelect: 'none',
    // outline: 'none',
    ...(unsel ? {} : { cursor: 'none' }),
    ...(unsel ? {} : { userSelect: 'none' }),
    ...(unsel ? {} : { outline: 'none' }),
  },
});

export default function GridCenterCube(props) {
  const {
    children,
    className,
    vertical,
    horizontal,
    width,
    height,
    style,
    dev,
    unsel,
    symmetrical,
    ...rest
  } = props;

  const styleLocal = styles({
    width, height, symmetrical, dev, unsel: true
  });

  return (
    <div className={className || 'GridCenterCube'} style={{ ...styleLocal.root, ...style }}>
      <GridCenter vertical={vertical} horizontal={horizontal} unsel>
        {children}
      </GridCenter>
    </div>
  );
}

GridCenterCube.defaultProps = {
  vertical: 'center',
  horizontal: 'center',
  width: 5,
  height: 5,
  dev: false,
  symmetrical: false,
};

GridCenterCube.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.any,
  vertical: PropTypes.string,
  hotizontal: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.number,
  dev: PropTypes.bool,
  symmetrical: PropTypes.bool
};

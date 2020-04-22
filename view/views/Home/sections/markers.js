import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';

import {
  Button,
} from '../../component';

function Pointer(props) {
  const { data, classes, animated } = props;
  return (
    <Fade
      in={animated}
      style={{ transitionDelay: animated ? '100ms' : '0ms' }}
    >
      <img src={`${__API__}/placeholder.svg`} width={18} height={18} alt="" />
      {/* <Avatar style={{ background: 'gray', fontSize: '14px' }}>1</Avatar> */}
    </Fade>
  );
}

Pointer.defaultProps = {
  classes: {},
};

Pointer.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  animated: PropTypes.bool
};

function Polygon(props) {
  const {
    data, classes, size, animated
  } = props;

  const area = 20 + data.markers.length;

  return (
    <Fade
      in={animated}
      style={{ transitionDelay: animated ? '100ms' : '0ms' }}
    >
      <Avatar style={{
        background: 'gray',
        fontSize: '14px',
        width: area >= 40 ? 40 : area,
        height: area >= 40 ? 40 : area,
      }}
      >
        {data.markers.length}
      </Avatar>
    </Fade>
  );
}

Polygon.defaultProps = {
  classes: {},
};

Polygon.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  size: PropTypes.number,
  animated: PropTypes.bool
};

export default function Marker(props) {
  const {
    classes,
    data,
    size,
    animated
  } = props;

  if (data.type === 'polygon') { return (<Polygon data={data} size={size} classes={classes} animated={animated} />); }
  if (data.type === 'point') { return (<Pointer data={data} classes={classes} animated={animated} />); }
  return (<div />);
}

Marker.defaultProps = {
  classes: {},
};

Marker.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  size: PropTypes.number,
  animated: PropTypes.bool
};

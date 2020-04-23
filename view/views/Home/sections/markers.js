import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';
import RoomIcon from '@material-ui/icons/Room';

import {
  Button,
} from '../../component';

function Pointer(props) {
  const { data, classes, animated } = props;
  return (
    <Fade
      in
      style={{ transitionDelay: animated ? '300ms' : '0ms' }}
    >
      <span
        role="button"
        tabIndex="0"
        onClick={() => { console.log('click sur', data.id); }}
        onKeyUp={() => console.log('ass')}
      >
        <RoomIcon className={classes.markerPoint} />
      </span>
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
      in
      style={{ transitionDelay: animated ? '300ms' : '0ms' }}
    >
      <Avatar
        style={{
          width: area >= 40 ? 40 : area,
          height: area >= 40 ? 40 : area,
        }}
        className={classes.markerPolygon}
        onClick={() => { console.log('click sur', data.id); }}
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

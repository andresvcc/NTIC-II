import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import {
  Button,
} from '../../component';

function Pointer(props) {
  const { data, classes } = props;
  return (
    <div>
      <img src={`${__API__}/placeholder.svg`} width={18} height={18} alt="" />
      {/* <Avatar style={{ background: 'gray', fontSize: '14px' }}>1</Avatar> */}
    </div>
  );
}

Pointer.defaultProps = {
  classes: {},
};

Pointer.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object
};

function Polygon(props) {
  const { data, classes, size } = props;

  const area = 20 + data.markers.length;

  return (
    <div>
      <Avatar style={{
        background: 'gray',
        fontSize: '14px',
        width: area >= 40 ? 40 : area,
        height: area >= 40 ? 40 : area,
      }}
      >
        {data.markers.length}
      </Avatar>
    </div>
  );
}

Polygon.defaultProps = {
  classes: {},
};

Polygon.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  size: PropTypes.number
};

export default function Marker(props) {
  const {
    classes,
    data,
    size
  } = props;

  if (data.type === 'polygon') { return (<Polygon data={data} size={size} classes={classes} />); }
  if (data.type === 'point') { return (<Pointer data={data} classes={classes} />); }
  return (<div />);
}

Marker.defaultProps = {
  classes: {},
};

Marker.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  size: PropTypes.number
};

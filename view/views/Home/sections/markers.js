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
      <img src={`${__API__}/placeholder.svg`} width={20} height={20} alt="" />
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
  const { data, classes } = props;
  return (
    <div>
      <Avatar style={{ background: 'gray', fontSize: '14px' }}>{data.id}</Avatar>
    </div>
  );
}

Polygon.defaultProps = {
  classes: {},
};

Polygon.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object
};

export default function Marker(props) {
  const {
    classes,
    data
  } = props;

  if (data.type === 'polygon') { return (<Polygon data={data} classes={classes} />); }
  if (data.type === 'point') { return (<Pointer data={data} classes={classes} />); }
  return (<div />);
}

Marker.defaultProps = {
  classes: {},
};

Marker.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object
};

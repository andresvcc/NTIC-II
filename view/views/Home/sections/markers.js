import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';

import {
  Button,
} from '../../component';

export default function Marker(props) {
  const {
    classes,
    data
  } = props;

  return (
    <div>
      <img src={`${__API__}/placeholder.svg`} width={20} height={20} alt="" />
    </div>
  );
}

Marker.defaultProps = {
  classes: {},
};

Marker.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object
};

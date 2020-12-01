import React from 'react';
import PropTypes from 'prop-types';
import PointerMaker from './pointer';
import PointerMaker2 from './pointer2';
import GroupPointerMarker from './groupPointer';
import PinterAvatar from './pointerAvatar';

export default function Marker(props) {
  const {
    data,
  } = props;

  if (data.type === 'polygon') { return (<GroupPointerMarker data={data} />); }
  if (data.manuscrit.length > 0) { return (<PointerMaker data={data} />); }
  if (data.manuscrit.length <= 0) { return (<PointerMaker2 data={data} />); }
  return (<PinterAvatar data={data} />);
}

Marker.propTypes = {
  data: PropTypes.object,
};

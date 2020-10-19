import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import redux from '../redux/redux';
import action from './onClick';

async function selectMarker(data, reduxState, dispatch) {
  // console.log(data);
  // dispatch({ state: 'infoBar', value: data.id });
  // console.log('marker select', data);
}

export default function Polygon(props) {
  const {
    data
  } = props;

  const sizeL = 16;
  const sizeArea = 22;

  const [area, setArea] = useState(sizeArea);
  const [color, setColor] = useState('#AB0275');
  const [border, setBorder] = useState(0);
  const [limitSIze, setLimitSize] = useState(0);
  const [stateRedux, dispatch] = redux();
  const [manuscritsNumber, setNumber] = useState(0);

  useEffect(() => {
    let number = 0;
    data.markers.forEach((element) => {
      number += element.manuscrit.length;
    });

    setNumber(number);
  }, [data.markers]);

  const mouseEnter = () => {
    setTimeout(async () => {
      // await dispatch({ state: 'infoBar', value: `Cluster with ${data.markers.length} libraries` });
    }, 1);
    setBorder(sizeL / 4);
    setLimitSize(sizeL);
    setArea(area + sizeL);
  };

  const mouseLeave = () => {
    dispatch({ state: 'infoBar', value: '...' });
    setBorder(0);
    setLimitSize(0);
    setArea(sizeArea);
  };

  useEffect(() => {
    setBorder(0);
    setColor('#AB0275');
    setLimitSize(0);
    setArea(sizeArea);
  }, [data, stateRedux.animated]);

  const handleClick = () => {
    // dispatch({ state: 'greetingStatus', value: true });
    selectMarker(data, stateRedux, dispatch);
    action({ data, stateRedux, dispatch });
  };

  return (
    <Avatar
      style={{
        width: area,
        height: area,
        background: color,
        fontSize: '12px',
        border: `${border}px solid #F7E2F8`,
        position: 'absolute',
        top: `-${limitSIze / 2}px`,
        left: `-${limitSIze / 2}px`,
      }}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
      onClick={handleClick}
    >
      {manuscritsNumber}
    </Avatar>
  );
}

Polygon.propTypes = {
  data: PropTypes.object,
};

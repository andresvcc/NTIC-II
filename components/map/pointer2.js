import React, { useState } from 'react';
import PropTypes from 'prop-types';
import redux from '../redux/redux';
import action from './onClick';

function PointerMaker(props) {
  const {
    num,
    onClick,
    size,
    color,
  } = props;

  return (
    <svg
      width={`${23 + size}px`}
      height={`${30 + size}px`}
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      viewBox="0 0 1270 1693"
    >
      <defs>
        <style type="text/css">
          {`
            .marker {fill:#FEFEFE}
            .markerFil0 {fill:${color};stroke:#FEFEFE;stroke-width:33.86;}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1" onClick={() => { onClick(); }} style={{ cursor: 'pointer' }}>
        <metadata id="CorelCorpID_0Corel-Layer" />
        <path className="markerFil0" style={{ fill: color }} d="M1053 184l0 0c-229,-228 -599,-228 -827,0l0 0c-205,205 -229,593 -54,825l467 675 468 -675c174,-232 151,-620 -54,-825z" />
        <g id="_83897768">
          <path className="marker" d="M870 540l101 0 0 243 -101 0 0 -243zm0 0z" />
          <path className="marker" d="M678 540l101 0 0 243 -101 0 0 -243zm0 0z" />
          <path className="marker" d="M486 540l101 0 0 243 -101 0 0 -243zm0 0z" />
          <path className="marker" d="M294 540l101 0 0 243 -101 0 0 -243zm0 0z" />
          <path className="marker" d="M1005 464l0 -25 -745 0 0 25c0,14 12,25 26,25l694 0c14,0 25,-11 25,-25l0 0zm0 0z" />
          <path className="marker" d="M1040 834l-815 0c-14,0 -25,11 -25,25l0 67c0,14 11,26 25,26l815 0c14,0 25,-12 25,-26l0 -67c0,-14 -11,-25 -25,-25l0 0zm0 0z" />
          <path className="marker" d="M225 388l815 0c11,0 21,-7 24,-18 3,-11 -1,-23 -11,-29l-407 -251c-8,-5 -19,-5 -27,0l-407 251c-10,6 -14,18 -11,29 3,11 13,18 24,18l0 0zm390 -152l35 0c14,0 25,11 25,25 0,14 -11,25 -25,25l-35 0c-14,0 -25,-11 -25,-25 0,-14 11,-25 25,-25l0 0zm0 0z" />
        </g>
      </g>
    </svg>
  );
}

async function selectMarker(data, stateRedux, dispatch) {
  // console.log(data);
  // dispatch({ state: 'infoBar', value: data.id });
  // console.log('marker select', data);
}

export default function Pointer2(props) {
  const { data } = props;
  const [color, setColor] = useState('#E5097F');
  const [size, setSize] = useState(0);
  const [stateRedux, dispatch] = redux();

  const mouseEnter = async () => {
    setTimeout(() => {
      // dispatch({ state: 'infoBar', value: `${data.name}` });
    }, 1);
    setColor('#AD005D');
    setSize(5);
  };

  const mouseLeave = async () => {
    // dispatch({ state: 'infoBar', value: '...' });
    setColor('#E5097F');
    setSize(0);
  };

  const handleClick = () => {
    // dispatch({ state: 'greetingStatus', value: true });
    selectMarker(data, stateRedux, dispatch);
    action({ data, stateRedux, dispatch });
  };

  return (
    <span
      role="button"
      tabIndex="0"
      onMouseEnter={() => mouseEnter(5)}
      onMouseLeave={() => mouseLeave(0)}
      style={{
        width: 23 + size,
        height: 30 + size,
        position: 'absolute',
        top: -10 - size,
        left: -2 - size / 2
      }}
    >
      <PointerMaker
        onClick={handleClick}
        size={size}
        color={color}
      />
    </span>
  );
}

Pointer2.propTypes = {
  data: PropTypes.object,
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import redux from '../redux/redux';
import action from './onClick';
import GridColon from '../Grid/GridColon';
import GridCenter from '../Grid/GridCenterCube';

function PointerMaker(props) {
  const {
    num,
    onClick,
    size,
    color,
  } = props;

  return (
    <svg
      width={`${25 + size}px`}
      height={`${25 + size}px`}
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        transition: 'all .3s ease'
      }}
      viewBox="0 0 1693 1693"
    >
      <defs>
        <style type="text/css">
          {`
            .str0 {stroke:#FEFEFE;stroke-width:7.62}
            .fil0 {fill:${color}}
            .fnt0 {font-weight:bold;font-size:550px;}
            .fil1 {fill:#FEFEFE}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1" onClick={() => { onClick(); }} style={{ cursor: 'pointer' }}>
        <metadata id="CorelCorpID_0Corel-Layer" />
        <ellipse className="fil0 str0" style={{ fill: color }} cx="719" cy="981" rx="711" ry="700" />
        <g id="_82276720">
          <path className="fil1" d="M994 1189l76 0 0 182 -76 0 0 -182zm0 0z" />
          <path className="fil1" d="M849 1189l77 0 0 182 -77 0 0 -182zm0 0z" />
          <path className="fil1" d="M705 1189l76 0 0 182 -76 0 0 -182zm0 0z" />
          <path className="fil1" d="M561 1189l76 0 0 182 -76 0 0 -182zm0 0z" />
          <path className="fil1" d="M1096 1132l0 -19 -561 0 0 19c0,10 9,19 19,19l523 0c10,0 19,-9 19,-19l0 0zm0 0z" />
          <path className="fil1" d="M1122 1410l-613 0c-10,0 -19,8 -19,19l0 50c0,11 9,20 19,20l613 0c10,0 19,-9 19,-20l0 -50c0,-11 -9,-19 -19,-19l0 0zm0 0z" />
          <path className="fil1" d="M509 1074l613 0c8,0 16,-5 18,-13 2,-9 -1,-17 -8,-22l-307 -188c-6,-4 -13,-4 -20,0l-306 188c-7,5 -11,13 -8,22 2,8 9,13 18,13l0 0zm293 -114l26 0c11,0 19,8 19,19 0,10 -8,19 -19,19l-26 0c-10,0 -19,-9 -19,-19 0,-11 9,-19 19,-19l0 0zm0 0z" />
        </g>
        <ellipse className="fil0" style={{ fill: color }} cx="1160" cy="491" rx="493" ry="485" />
        <ellipse className="fil1" cx="1165" cy="493" rx="434" ry="427" />
        <path className="fil1" d="M617 697l-130 0 0 -126c0,-17 -15,-16 -33,-16 -18,0 -32,-1 -32,16l0 126 -130 0c-18,0 -15,12 -15,30 0,17 -3,33 15,33l130 0 0 126c0,17 15,16 33,16 18,0 32,1 32,-16l0 -126 130 0c18,0 18,-12 18,-29 0,-18 0,-34 -18,-34z" />
        <text x={num >= 10 ? 850 : 1000} y="701" style={{ fill: color }} className="fil1 fnt0">{num}</text>
      </g>
    </svg>
  );
}

export default function PointerGroup(props) {
  const { data } = props;
  const [color, setColor] = useState('#E5097F');
  const [size, setSize] = useState(0);
  const [stateRedux, dispatch] = redux();
  const [manuscritsNumber, setNumber] = useState(0);
  const [displayName, setDisplayName] = useState(false);

  useEffect(() => {
    let number = 0;
    data.markers.forEach((element) => {
      number += element.manuscrit.length;
    });

    setNumber(number);
  }, [data.markers]);

  const mouseEnter = (value) => {
    setColor('#AD005D');
    setSize(value);
    setDisplayName(true);
    dispatch({ state: 'markerSelect', value: data.id });
  };

  const mouseLeave = (value) => {
    setColor('#E5097F');
    setSize(value);
    setDisplayName(false);
  };

  const handleClick = () => {
    action({ data, stateRedux, dispatch });
  };

  const contains = data.markers.length < 10 ? data.markers.length : 9;

  return (
    <Fade
      in
      style={{ transitionDelay: stateRedux.animated ? '250ms' : '150ms' }}
    >
      <span
        role="button"
        tabIndex="0"
        onMouseEnter={() => mouseEnter(5)}
        onMouseLeave={() => mouseLeave(0)}
        style={{
          width: 25 + size + contains,
          height: 25 + size + contains,
          position: 'absolute',
          top: -6 + -(size / 2),
          left: -1 + -(size / 2),
          transition: 'all ease-in .3s'
        }}
      >
        <PointerMaker
          num={manuscritsNumber > 99 ? 99 : manuscritsNumber}
          onClick={handleClick}
          size={size + contains}
          color={color}
        />
        <span style={{
          color: '#e5097f',
          background: '#fbf8f3',
          position: 'absolute',
          visibility: displayName ? 'visible' : 'hidden',
          top: '100%',
          left: '-4vw',
          // border: 'solid 1px red',
          transition: displayName ? 'all 0s ease 0.3s' : 'none'
        }}
        >
          <GridCenter width="140px" height={8}>
            <GridCenter width="120px">
              <GridColon horizontal="left">
                <span>
                  Group:
                </span>
                <span
                  style={{ color: 'grey' }}
                >
                  {`⬩ ${manuscritsNumber} manuscripts`}
                </span>
                <span
                  style={{ color: 'grey' }}
                >
                  {`⬩ ${data.markers.length} libraries`}
                </span>
              </GridColon>
            </GridCenter>
          </GridCenter>
        </span>
      </span>
    </Fade>
  );
}

PointerGroup.propTypes = {
  data: PropTypes.object,
};

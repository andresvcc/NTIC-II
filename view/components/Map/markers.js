import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';

import redux from '../redux/redux';
import PointerMaker from './pointer';
import PointerMaker2 from './pointer2';
import GroupPointerMarker from './groupPointer';

function Pointer2(props) {
  const { data, classes, animated } = props;
  const [color, setColor] = useState('#E5097F');
  const [size, setSize] = useState(0);
  const [reduxState, dispatch] = redux();

  const mouseEnter = () => {
    setColor('#AD005D');
    setSize(5);
  };

  const mouseLeave = () => {
    setColor('#E5097F');
    setSize(0);
  };

  const handleClick = () => {
    // dispatch({ state: 'greetingStatus', value: true });
    console.log(data);
  };

  return (
    <Fade
      in
      style={{ transitionDelay: animated ? '500ms' : '250ms' }}
    >
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
        <PointerMaker2
          onClick={handleClick}
          size={size}
          color={color}
        />
      </span>
    </Fade>
  );
}

Pointer2.defaultProps = {
  classes: {},
};

Pointer2.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  animated: PropTypes.bool
};

//----

function Pointer(props) {
  const { data, classes, animated } = props;
  const [colord, setColor] = useState('#E5097F');
  const [size, setSize] = useState(0);
  const [reduxState, dispatch] = redux();

  const mouseEnter = () => {
    setColor('#AD005D');
    setSize(5);
  };

  const mouseLeave = () => {
    setColor('#E5097F');
    setSize(0);
  };

  const handleClick = () => {
    // dispatch({ state: 'greetingStatus', value: true });
    console.log(data);
  };

  return (
    <Fade
      in
      style={{ transitionDelay: animated ? '500ms' : '250ms' }}
    >
      <span
        role="button"
        tabIndex="0"
        onMouseEnter={() => mouseEnter(5)}
        onMouseLeave={() => mouseLeave(0)}
        style={{
          width: 29 + size,
          height: 36 + size,
          position: 'absolute',
          top: -16 - size,
          left: -2 - size / 2
        }}
      >
        <PointerMaker
          num={data.manuscrit.length}
          onClick={handleClick}
          size={size}
          color={colord}
        />
      </span>
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

//----

function PointerGroup(props) {
  const { data, classes, animated } = props;
  const [color, setColor] = useState('#E5097F');
  const [size, setSize] = useState(0);
  const [reduxState, dispatch] = redux();

  const mouseEnter = () => {
    setColor('#AD005D');
    setSize(5);
  };

  const mouseLeave = () => {
    setColor('#E5097F');
    setSize(0);
  };

  const handleClick = () => {
    // dispatch({ state: 'greetingStatus', value: true });
    console.log(data.id);
  };

  const contains = data.markers.length < 10 ? data.markers.length : 9;

  return (
    <Fade
      in
      style={{ transitionDelay: animated ? '500ms' : '250ms' }}
    >
      <span
        role="button"
        tabIndex="0"
        onMouseEnter={() => mouseEnter(5)}
        onMouseLeave={() => mouseLeave(0)}
        style={{
          width: 30 + size + contains,
          height: 30 + size + contains,
          position: 'absolute',
          top: -5 - size / 2,
          left: -5 - size / 2
        }}
      >
        <GroupPointerMarker
          num={data.markers.length}
          onClick={handleClick}
          size={size + contains}
          color={color}
        />
      </span>
    </Fade>
  );
}

PointerGroup.defaultProps = {
  classes: {},
};

PointerGroup.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.object,
  animated: PropTypes.bool
};


//----


function Polygon(props) {
  const {
    data, classes, animated
  } = props;

  const sizeL = 16;
  const sizeArea = 22;

  const [area, setArea] = useState(sizeArea);
  const [color, setColor] = useState('#AB0275');
  const [border, setBorder] = useState(0);
  const [limitSIze, setLimitSize] = useState(0);
  const [reduxState, dispatch] = redux();

  const mouseEnter = () => {
    setBorder(sizeL / 4);
    setLimitSize(sizeL);
    setArea(area + sizeL);
  };

  const mouseLeave = () => {
    setBorder(0);
    setLimitSize(0);
    setArea(sizeArea);
  };

  useEffect(() => {
    setBorder(0);
    setColor('#AB0275');
    setLimitSize(0);
    setArea(sizeArea);
  }, [data, animated]);

  const handleClick = () => {
    // dispatch({ state: 'greetingStatus', value: true });
    console.log(data.id);
  };

  return (
    <Fade
      in
      style={{ transitionDelay: animated ? '500ms' : '250ms' }}
    >
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
        {data.markers ? data.markers.length : 1}
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
  animated: PropTypes.bool
};


//----

export default function Marker(props) {
  const {
    classes,
    data,
    size,
    animated
  } = props;

  if (data.type === 'polygon') { return (<PointerGroup data={data} classes={classes} animated={animated} />); }
  if (data.manuscrit.length > 0) { return (<Pointer data={data} classes={classes} animated={animated} />); }
  if (data.manuscrit.length <= 0) { return (<Pointer2 data={data} classes={classes} animated={animated} />); }
  return (<Polygon data={data} classes={classes} animated={animated} />);
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

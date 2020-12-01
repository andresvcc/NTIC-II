import React, { useState, useEffect, useRef } from 'react';
import Fade from '@material-ui/core/Fade';
import redux from '../redux/redux';

function Line(props) {
  const { value } = props;
  // const [hover, setHover] = useState(false);
  const [stateRedux, dispatch] = redux();

  const enter = () => {
    dispatch({ state: 'hoverArrow', value: { visible: true, transfert: value.manuscrits, libraries: value.libraries } });
  };

  const leave = () => {
    dispatch({ state: 'hoverArrow', value: { visible: false, transfert: [] } });
  };

  // const ids = value.manuscrits.map((val) => `\n${val.anderson_id} - ${val.date}`);

  // console.log(ids);
  return (
    <line
      className={value.classMark}
      onMouseEnter={() => enter()}
      onMouseLeave={() => leave()}
      key={value.key}
      x1={value.x1}
      y1={value.y1}
      x2={value.x2}
      y2={value.y2}
    />
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const LineDraw = ({
  mapState: {
    center, zoom, bounds, width, height
  }, latLngToPixel, coordsArray, animated
}) => {
  const [stateRedux, dispatch] = redux();

  // console.log('coordsArray', coordsArray);

  const update = () => {
    const lines = [];
    // console.log('coordsArray', coordsArray);
    coordsArray.some((parcour, index) => {
      const value = parcour.arr;

      if (value.length < 2) {
        return false;
      }

      let pixel = latLngToPixel(value[0].pos);

      value.forEach((element, i) => {
        if (value[0].id !== element.id) {
          const pixel2 = latLngToPixel(element.pos);
          lines.push({
            key: `0h${i + 1}${index + 1}`,
            x1: pixel[0],
            y1: pixel[1],
            x2: pixel2[0],
            y2: pixel2[1],
            classMark: stateRedux.manuscritUniqueID === -1 ? 'bar' : 'barS',
            manuscrits: parcour.manuscrits,
            libraries: { 1: parcour.arr[0], 2: parcour.arr[1] },
          });

          pixel = pixel2;
        }
      });

      return false;
    });

    return lines;
  };

  const [fleches, setFleches] = useState([]);
  const [activity, setActivity] = useState(true);
  // useEffect(() => setFleches(update()), [bounds.ne]);

  const mis = () => {
    setActivity(false);
    const time = setTimeout(() => {
      setActivity(true);
    }, 350);
  };

  useEffect(() => {
    setFleches(update());
    // console.log('LineDraw');
  }, [bounds.ne]);

  useEffect(() => {
    mis();
  }, [zoom]);

  return (

    <svg
      width={width > 0 ? width : 1}
      height={height > 0 ? height : 1}
    >
      <style>
        {
        `
          .barS{
            stroke-width: 5;
            stroke-dasharray: 0;
            stroke-linecap: butt;
            stroke-linecap: round;
            stroke: #208080
          }
          .bar{
            stroke-width: 5;
            stroke-dasharray: 2.5 5.5;
            stroke-linecap: butt;
            stroke-linecap: round;
            stroke: #6d01b830
          }
          .bar:hover {
              stroke-dasharray: 0;
              stroke: #6d01b890
          }
        `
        }
      </style>
      {
       activity ? (
         fleches.map((value, i) => (
           <Line
             key={value.key}
             value={value}
           />
         ))
       ) : null
      }

    </svg>
  );
};

export default LineDraw;

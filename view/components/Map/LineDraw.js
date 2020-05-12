import React, { useState, useEffect } from 'react';

import redux from '../redux/redux';


const LineDraw = ({
  mapState: {
    center, zoom, bounds, width, height
  }, latLngToPixel, coordsArray, animated
}) => {
  const [reduxStates, dispatch] = redux();
  const update = () => {
    const lines = [];
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
            key: `0${i + 1}${index + 1}`,
            x1: pixel[0],
            y1: pixel[1],
            x2: pixel2[0],
            y2: pixel2[1],
            mark: element.type === 'polygon' ? '' : 2,
            style: {
              stroke: parcour.color || '#208080',
            }
          });

          pixel = pixel2;
        }
      });

      return false;
    });

    return lines;
  };

  const [fleches, setFleches] = useState([]);

  useEffect(() => {
    if (zoom < 6) {
      setFleches(update());
    } else if (zoom < 10) {
      setFleches([]);
      setFleches(update());
    } else if (zoom < 14) {
      setFleches([]);
      const timer = setTimeout(() => {
        setFleches(update());
      }, 100);
      return () => clearTimeout(timer);
    } else if (zoom <= 23) {
      setFleches([]);
      const timer = setTimeout(() => {
        setFleches(update());
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [bounds.ne, reduxStates.barreTemporelle]);

  return (
    <svg
      width={width}
      height={height}
      style={{ top: 0, left: 0 }}
    >
      <style>
        {`
          .bar{
            stroke-width: 4;
            stroke-dasharray: 5.5;
            stroke-linecap: butt;
            stroke-opacity: 0.5;
          }
          .bar:hover {
              stroke-dasharray: 0;
              stroke-opacity: 0.8;
          }`}
      </style>
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="22"
          refY="5"
          orient="auto-start-reverse"
          viewBox={`0 0 ${30 + zoom / 2} ${30 + zoom / 2}`}
        >
          <path
            className="bar"
            d="M 0 0 L 10 5 L 0 10 z"
            fill="#be61ff"
          />
        </marker>
        <marker
          id="arrow2"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto-start-reverse"
          viewBox="0 0 30 30"
        >
          <path
            className="bar"
            d="M 0 0 L 10 5 L 0 10 z"
            fill="#be61ff"
          />
        </marker>
      </defs>
      {fleches.map((value) => (
        <line className="bar" key={value.key} x1={value.x1} y1={value.y1} x2={value.x2} y2={value.y2} style={value.style} markerEnd={`url(#arrow${value.mark})`} />
      ))}
    </svg>
  );
};

export default LineDraw;

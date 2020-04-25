import React, { useState, useEffect } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import {
  Button,
} from '../../component';


export default function PointerMaker(props) {
  const {
    num,
    onClick,
    size,
    color,
  } = props;

  return (
    <svg
      width={`${26 + size}px`}
      height={`${33 + size}px`}
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
            @font-face { font-family:"Arial";src:url("#FontID0") format(svg)}
            .fil0 {fill:#FEFEFE}
            .fil1 {fill:${color}}
            .fnt0 {font-weight:bold;font-size:${num < 10 ? 490 : 440}px;}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1" onClick={() => { onClick(); }} style={{ cursor: 'pointer' }}>
        <metadata id="CorelCorpID_0Corel-Layer" />
        <ellipse className="fil0" cx="612" cy="962" rx="342" ry="336" />
        <path style={{ fill: color }} d="M896 590l0 0c-158,-167 -415,-167 -573,0l0 0c-142,151 -158,436 -38,606l324 496 324 -496c121,-170 105,-455 -37,-606zm-147 314l59 0 0 150 -59 0 0 -150zm-112 0l59 0 0 150 -59 0 0 -150zm-112 0l60 0 0 150 -60 0 0 -150zm-111 0l59 0 0 150 -59 0 0 -150zm414 -46l0 -16 -434 0 0 16c0,8 6,15 15,15l404 0c8,0 15,-7 15,-15l0 0zm20 228l-474 0c-9,0 -15,7 -15,15l0 42c0,9 6,16 15,16l474 0c9,0 15,-7 15,-16l0 -42c0,-8 -6,-15 -15,-15l0 0zm-474 -275l474 0c7,0 13,-5 15,-12 1,-7 -1,-14 -7,-17l-237 -155c-5,-3 -11,-3 -16,0l-237 155c-6,3 -8,10 -7,17 2,7 8,12 15,12l0 0zm227 -94l20 0c8,0 15,7 15,15 0,9 -7,16 -15,16l-20 0c-8,0 -15,-7 -15,-16 0,-8 7,-15 15,-15l0 0z" />
        <path className="fil1" d="M891 -8c207,0 375,165 375,369 0,204 -168,369 -375,369 -207,0 -375,-165 -375,-369 0,-204 168,-369 375,-369z" />
        <path className="fil0" d="M890 31c182,0 330,145 330,325 0,179 -148,325 -330,325 -182,0 -330,-146 -330,-325 0,-180 148,-325 330,-325z" />
        <text x={num < 10 ? 750 : 600} y="546" className="fil1 fnt0">{num || 10}</text>
      </g>
    </svg>
  );
}

import React, { useState, useEffect } from 'react';

export default function PointerMaker(props) {
  const {
    num,
    onClick,
    size,
    color,
  } = props;

  return (
    <svg
      width={`${30 + size}px`}
      height={`${30 + size}px`}
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
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

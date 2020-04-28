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
            .fil0 {fill:#FEFEFE}
            .fil1 {fill:${color}}
            .fnt0 {font-weight:bold;font-size:550px;}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1" onClick={() => { onClick(); }} style={{ cursor: 'pointer' }}>

        <metadata id="CorelCorpID_0Corel-Layer" />
        <ellipse className="fil0" cx="484" cy="499" rx="466" ry="458" />
        <ellipse className="fil1" style={{ fill: color }} cx="484" cy="499" rx="410" ry="403" />
        <g id="_506437896">
          <path className="fil0" d="M636 479l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M517 479l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M397 479l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M278 479l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M720 432l0 -16 -463 0 0 16c0,8 7,15 16,15l431 0c9,0 16,-7 16,-15l0 0zm0 0z" />
          <path className="fil0" d="M742 661l-507 0c-8,0 -15,8 -15,16l0 42c0,9 7,16 15,16l507 0c9,0 16,-7 16,-16l0 -42c0,-8 -7,-16 -16,-16l0 0zm0 0z" />
          <path className="fil0" d="M235 384l507 0c7,0 13,-4 15,-11 2,-7 -1,-14 -7,-18l-253 -156c-5,-3 -12,-3 -17,0l-253 156c-6,4 -9,11 -7,18 2,7 8,11 15,11l0 0zm243 -94l21 0c9,0 16,7 16,15 0,9 -7,16 -16,16l-21 0c-9,0 -16,-7 -16,-16 0,-8 7,-15 16,-15l0 0zm0 0z" />
        </g>
        <ellipse className="fil0" cx="1215" cy="494" rx="466" ry="458" />
        <ellipse className="fil1" style={{ fill: color }} cx="1215" cy="494" rx="410" ry="403" />
        <g id="_506437392">
          <path className="fil0" d="M1373 468l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M1254 468l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M1134 468l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M1015 468l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M1457 420l0 -15 -463 0 0 15c0,9 7,16 16,16l431 0c9,0 16,-7 16,-16l0 0zm0 0z" />
          <path className="fil0" d="M1479 650l-507 0c-9,0 -16,7 -16,16l0 42c0,9 7,16 16,16l507 0c8,0 15,-7 15,-16l0 -42c0,-9 -7,-16 -15,-16l0 0zm0 0z" />
          <path className="fil0" d="M972 373l507 0c7,0 13,-5 15,-11 2,-7 -1,-14 -7,-18l-253 -156c-5,-3 -12,-3 -17,0l-253 156c-6,4 -9,11 -7,18 2,6 8,11 15,11l0 0zm243 -95l21 0c9,0 16,7 16,16 0,9 -7,16 -16,16l-21 0c-9,0 -16,-7 -16,-16 0,-9 7,-16 16,-16l0 0zm0 0z" />
        </g>
        <ellipse className="fil0" cx="472" cy="1125" rx="466" ry="458" />
        <ellipse className="fil1" style={{ fill: color }} cx="472" cy="1125" rx="410" ry="403" />
        <g id="_506435352">
          <path className="fil0" d="M630 1098l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M510 1098l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M391 1098l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M272 1098l63 0 0 151 -63 0 0 -151zm0 0z" />
          <path className="fil0" d="M714 1051l0 -16 -463 0 0 16c0,9 7,16 15,16l432 0c9,0 16,-7 16,-16l0 0zm0 0z" />
          <path className="fil0" d="M735 1281l-506 0c-9,0 -16,7 -16,15l0 42c0,9 7,16 16,16l506 0c9,0 16,-7 16,-16l0 -42c0,-8 -7,-15 -16,-15l0 0zm0 0z" />
          <path className="fil0" d="M229 1004l506 0c8,0 14,-5 16,-12 2,-7 -1,-14 -7,-18l-254 -156c-5,-3 -11,-3 -16,0l-253 156c-6,4 -9,11 -7,18 2,7 8,12 15,12l0 0zm243 -95l21 0c9,0 16,7 16,16 0,8 -7,15 -16,15l-21 0c-9,0 -16,-7 -16,-15 0,-9 7,-16 16,-16l0 0zm0 0z" />
        </g>
        <ellipse className="fil1" style={{ fill: color }} cx="1143" cy="1148" rx="544" ry="535" />
        <ellipse className="fil1" style={{ fill: color }} cx="1137" cy="1065" rx="349" ry="343" />
        <ellipse className="fil0" cx="1143" cy="1148" rx="483" ry="475" />
        <text x={num >= 10 ? 800 : 1000} y="1350" style={{ fill: color }} className="fil1 fnt0">{num}</text>
      </g>
    </svg>
  );
}

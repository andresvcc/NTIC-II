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
      width={`${29 + size}px`}
      height={`${36 + size}px`}
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      viewBox="0 0 1693 2117"
    >
      <defs>
        <style type="text/css">
          {`
            @font-face { font-family:"Arial";src:url("#FontID0") format(svg)}
            .pointer1Fil1 {fill:#FEFEFE}
            .pointer1Fil0 {fill:#E5097F}
            .pointer1Fnt0 {font-weight:bold;font-size:580px;}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1" onClick={() => { onClick(); }} style={{ cursor: 'pointer' }}>
        <metadata id="CorelCorpID_0Corel-Layer" />

        <path style={{ fill: color }} d="M1151 612l0 0c-228,-228 -598,-228 -827,0l0 0c-205,206 -228,593 -54,826l468 675 467 -675c175,-233 151,-620 -54,-826z" />
        <g id="_80108840">
          <path className="pointer1Fil1" d="M968 969l101 0 0 242 -101 0 0 -242zm0 0z" />
          <path className="pointer1Fil1" d="M776 969l101 0 0 242 -101 0 0 -242zm0 0z" />
          <path className="pointer1Fil1" d="M584 969l101 0 0 242 -101 0 0 -242zm0 0z" />
          <path className="pointer1Fil1" d="M392 969l102 0 0 242 -102 0 0 -242zm0 0z" />
          <path className="pointer1Fil1" d="M1103 892l0 -25 -745 0 0 25c0,14 12,26 26,26l694 0c14,0 25,-12 25,-26l0 0zm0 0z" />
          <path className="pointer1Fil1" d="M1138 1262l-814 0c-14,0 -26,11 -26,25l0 68c0,14 12,25 26,25l814 0c14,0 25,-11 25,-25l0 -68c0,-14 -11,-25 -25,-25l0 0zm0 0z" />
          <path className="pointer1Fil1" d="M324 816l814 0c11,0 21,-7 24,-18 3,-11 -1,-23 -11,-28l-407 -251c-8,-5 -18,-5 -26,0l-408 251c-9,5 -14,17 -11,28 3,11 13,18 25,18l0 0zm390 -152l34 0c14,0 25,12 25,26 0,14 -11,25 -25,25l-34 0c-14,0 -26,-11 -26,-25 0,-14 12,-26 26,-26l0 0zm0 0z" />
        </g>
        <ellipse style={{ fill: color }} cx="1225" cy="469" rx="464" ry="456" />
        <ellipse className="pointer1Fil1" cx="1225" cy="469" rx="408" ry="402" />
        <text x={num < 10 ? 1050 : 862} y="680" className="pointer1Fil0 pointer1Fnt0">{num || 10}</text>
      </g>
    </svg>
  );
}
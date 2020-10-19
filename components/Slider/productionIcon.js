import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import hookDeviceInfo from '../hookDeviceInfo/hookDeviceInfo';
import Button from '../CustomButtons/Button';
import redux from '../redux/redux';
import GridColon from '../Grid/GridColon';

const styles = ({ size, config }) => ({
  root: {
    width: size.type === 'mobile' ? 5 + (size.hypt * 0.04) : 5 + (size.hypt * 0.015),
    height: size.type === 'mobile' ? 5 + (size.hypt * 0.05) : 5 + (size.hypt * 0.015),
    viewBox: size.type === 'mobile' ? '0 0 3033 5033' : '0 0 3833 3833',
    xmlns: 'http://www.w3.org/2000/svg'
  },
});

const currentYear = new Date().getFullYear();

export default function Header(props) {
  const {
    config,
    setValue,
    commit,
    value
  } = props;
  const [stateRedux, dispatch] = redux();
  const size = hookDeviceInfo();
  const action = styles({ size, config });
  const [selected, setSelected] = useState(false);

  const finalColor = selected ? '#166969' : '#aaaaaa';

  const handleCLick = async () => {
    if (selected === true) {
      setValue([800, currentYear]);
      await commit([800, currentYear]);
      await dispatch({ state: 'barreTemporelleDisable', value: false });
    } else {
      setValue(['', '']);
      await commit(['', '']);
      await dispatch({ state: 'barreTemporelleDisable', value: true });
    }
  };

  // barreTemporelleDisable

  useEffect(() => {
    if (value[0] === '' && selected === false && stateRedux.barreTemporelleDisable) setSelected(true);
    else if (selected === true && stateRedux.barreTemporelleDisable === false) setSelected(false);
  }, [stateRedux.barreTemporelleDisable]);

  return (
    <GridColon>
      <Button onClick={handleCLick}>
        <svg {...action.root}>

          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <path style={{ fill: finalColor }} d="M1523 1176c-19,83 9,151 34,244 -96,-47 -153,-105 -300,-138 -189,-42 -309,-56 -496,-10 -116,29 -215,77 -313,139 -93,58 -182,155 -250,239 -179,221 -236,550 -179,827 4,22 4,32 12,55 41,122 53,167 122,276 119,189 279,316 490,398 105,40 257,86 295,-82 12,-55 -19,-114 -53,-139 -64,-48 -425,-64 -574,-511 -46,-139 -36,-260 -2,-410 39,-170 151,-307 276,-396 59,-43 111,-72 184,-96 92,-30 167,-40 264,-35 100,5 208,35 295,85 27,16 55,32 77,50 20,16 48,43 71,55l-3 12c-109,1 -225,8 -253,134 -16,69 35,148 103,164 45,10 326,-28 394,-35 132,-13 268,-26 217,-232l-110 -456c-8,-31 -12,-59 -20,-92 -20,-82 -59,-124 -100,-139l-31 -7c-69,-6 -138,46 -150,100z" />
            <g id="_2009696729408">
              <g>
                <g>
                  <path style={{ fill: finalColor }} d="M3681 2450l-567 0c-22,0 -41,18 -41,40l0 121 -99 0 -94 -140c-39,-59 -87,-112 -141,-159 -29,-24 -60,-47 -92,-67l260 -260c60,-60 61,-158 1,-219 -60,-61 -158,-61 -219,-1 -1,0 -1,1 -2,1l-87 88 -122 122 -157 157c-4,-2 -9,-3 -13,-4 -24,-2 -49,-3 -73,-3l-457 0c-11,0 -21,4 -29,12l-371 371c-61,60 -61,158 -1,219 60,61 158,61 219,1 0,0 1,-1 1,-1l40 -40 12 39c6,19 13,38 21,57l-163 163 -81 81c-5,5 -8,10 -10,16l-81 243c-7,21 4,44 25,51 5,1 9,2 13,2 5,0 9,-1 13,-2l243 -81c6,-2 11,-5 16,-10l81 -81 138 -138c98,71 216,110 337,110l346 0c2,-1 4,-1 5,-1 31,34 68,62 109,82 52,26 109,40 168,40l244 0 0 41c0,22 19,40 41,40l567 0c22,0 40,-18 40,-40l0 -810c0,-22 -18,-40 -40,-40zm-936 -627c29,-28 75,-28 104,1 14,13 22,32 22,52 0,20 -8,38 -22,52l-59 59 -105 -104 60 -60zm-117 117l105 105 -64 64 -105 -105 64 -64zm-1088 731c-29,29 -76,29 -105,0 -13,-14 -21,-33 -21,-53 0,-19 7,-38 21,-52l360 -359 440 0c4,0 8,0 12,0l-162 162 -226 0c-11,0 -21,4 -29,11l-290 291zm464 -221l-271 271c-2,-6 -5,-12 -6,-18l-25 -80 174 -173 128 0zm-410 733l-157 53 53 -157 60 -61c55,7 98,50 105,105l-61 60zm127 -126c-21,-47 -58,-84 -105,-105l514 -514 377 -377 104 105 -404 405 -55 0c-89,0 -161,72 -161,161 0,16 2,33 7,49 -2,1 -4,3 -6,4l-271 272zm480 0c-99,0 -197,-30 -279,-87l120 -120c29,29 69,45 110,45l250 0 93 162 -294 0zm872 121l-244 0c-106,0 -204,-57 -257,-149l-111 -195c-7,-12 -21,-20 -35,-20l-274 0c-45,0 -81,-36 -81,-81 0,-45 36,-81 81,-81l395 0c23,0 41,-18 41,-41 0,-22 -18,-40 -41,-40l-226 0 267 -267c90,52 167,125 225,212l105 158c8,12 20,18 34,18l121 0 0 486zm567 81l-486 0 0 -729 486 0 0 729z" />
                </g>
              </g>
              <g>
                <g>
                  <circle style={{ fill: finalColor }} cx="3397" cy="3097" r="81" />
                </g>
              </g>
              <g>
                <g>
                  <path style={{ fill: finalColor }} d="M2183 3421l-850 0c-23,0 -41,18 -41,41 0,22 18,40 41,40l850 0c22,0 40,-18 40,-40 0,-23 -18,-41 -40,-41z" />
                </g>
              </g>
              <g>
                <g>
                  <path style={{ fill: finalColor }} d="M2385 3421l-40 0c-23,0 -41,18 -41,41 0,22 18,40 41,40l40 0c23,0 41,-18 41,-40 0,-23 -18,-41 -41,-41z" />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </g>
          </g>
        </svg>
      </Button>
      {
       size.type === 'browser' ? (
         <span
           style={{
             color: '#237171ab',
             fontSize: '0.8em'
           }}
         >
           production
         </span>
       ) : null
     }
    </GridColon>
  );
}

Header.defaultProps = {
  config: {}
};

Header.propTypes = {
  config: PropTypes.object,
  setValue: PropTypes.any,
  commit: PropTypes.any,
  value: PropTypes.any
};

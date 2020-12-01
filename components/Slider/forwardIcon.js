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
    if (stateRedux.barreTemporelleDisable === true) await dispatch({ state: 'barreTemporelleDisable', value: false });

    if (selected === true) {
      setValue([800, currentYear]);
      await commit([800, currentYear]);
    } else {
      setValue([currentYear, currentYear]);
      await commit([currentYear, currentYear]);
    }
  };

  useEffect(() => {
    if (value[0] === currentYear && value[1] === currentYear) setSelected(true);
    else if (selected === true) setSelected(false);
  }, [stateRedux.barreTemporelle]);

  return (
    <GridColon>
      <Button onClick={handleCLick}>
        <svg {...action.root}>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <text x="1056" y="3394" style={{ fontSize: '90em', fill: finalColor }}>{currentYear}</text>
            <path style={{ fill: finalColor }} d="M1523 1176c-19,83 9,151 34,244 -96,-47 -153,-105 -300,-138 -189,-42 -309,-56 -496,-10 -116,29 -215,77 -313,139 -93,58 -182,155 -250,239 -179,221 -236,550 -179,827 4,22 4,32 12,55 41,122 53,167 122,276 119,189 279,316 490,398 105,40 257,86 295,-82 12,-55 -19,-114 -53,-139 -64,-48 -425,-64 -574,-511 -46,-139 -36,-260 -2,-410 39,-170 151,-307 276,-396 59,-43 111,-72 184,-96 92,-30 167,-40 264,-35 100,5 208,35 295,85 27,16 55,32 77,50 20,16 48,43 71,55l-3 12c-109,1 -225,8 -253,134 -16,69 35,148 103,164 45,10 326,-28 394,-35 132,-13 268,-26 217,-232l-110 -456c-8,-31 -12,-59 -20,-92 -20,-82 -59,-124 -100,-139l-31 -7c-69,-6 -138,46 -150,100z" />
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
           today
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

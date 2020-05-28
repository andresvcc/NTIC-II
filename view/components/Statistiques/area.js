
import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const data = {
  labels: [
    'long time',
    'short time',
  ],
  datasets: [{
    data: [20, 80],
    backgroundColor: [
      '#1196CC',
      '#115ECC',
      '#6011CC'
    ],
    hoverBackgroundColor: [
      '#1196CC',
      '#115ECC',
      '#6011CC'
    ]
  }]
};

const option = {
  display: false,
  position: 'bottom',
  fullWidth: true,
  reverse: false,
  labels: {
    fontColor: 'white'
  }
};

export default function Test(props) {
  const {
    className,
    ...rest
  } = props;

  defaults.global.defaultFontColor = 'white';

  return (
    <div className={className} {...rest}>
      <div style={{
        position: 'absolute', width: '50px', top: '-8px'
      }}
      >
        <p style={{
          textAlign: 'center',
          color: 'white',
          background: '#00000080',
          fontSize: '12px'
        }}
        >
          Duration
        </p>
      </div>
      <div style={{
        position: 'absolute', width: '150px', left: '-30px', top: '25px'
      }}
      >
        <Doughnut data={data} legend={option} elements={{ point: { pointStyle: 'triangle' } }} reverse />
      </div>
    </div>
  );
}

Test.propTypes = {
  className: PropTypes.string
};

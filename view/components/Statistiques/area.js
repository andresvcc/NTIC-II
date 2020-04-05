
import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const data = {
  labels: [
    'Style',
    'Parts',
    'Moto'
  ],
  datasets: [{
    data: [20, 50, 30],
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
      <p style={{
        margin: '2px',
        textAlign: 'center',
        color: 'white',
        fontFamily: '"Black Ops One", cursive',
        background: '#00000080',
        fontSize: '2rem'
      }}
      >
        Categories
      </p>
      <Doughnut data={data} legend={option} elements={{ point: { pointStyle: 'triangle' } }} reverse />
    </div>
  );
}

Test.propTypes = {
  className: PropTypes.string
};


import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Parts',
      fill: false,
      lineTension: 0.1,
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 5,
      data: [45, 48, 52, 48, 56, 60],
    }
  ]
};

const option = {
  display: false,
  position: 'top',
  fullWidth: true,
  reverse: false,
  labels: {
    fontColor: 'white'
  },
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
        Ventes
      </p>
      <Line
        data={data}
        legend={option}
        options={{
          aspectRatio: 2,
          responsive: true
        }}
      />
    </div>
  );
}

Test.propTypes = {
  className: PropTypes.string
};

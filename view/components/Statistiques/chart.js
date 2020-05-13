
import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const data = {
  labels: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
  datasets: [
    {
      label: 'Century',
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
      data: [8, 15, 15, 20, 20, 25, 12, 7, 15, 11, 8, 4, 1],
    }
  ]
};

const option = {
  display: false,
  position: 'top',
  fullWidth: true,
  reverse: false,
  labels: {
    fontColor: 'black'
  },
};


export default function Test(props) {
  const {
    className,
    ...rest
  } = props;

  defaults.global.defaultFontColor = 'black';

  return (
    <div className={className} {...rest}>
      <div style={{
        position: 'absolute', width: '100px', left: '150px', top: '-8px'
      }}
      >
        <p style={{
          textAlign: 'center',
          color: 'white',
          background: '#00000080',
          fontSize: '12px'
        }}
        >
          Temp
        </p>
      </div>
      <div style={{
        position: 'absolute', width: '180px', left: '110px', top: '25px'
      }}
      >

        <Line
          data={data}
          legend={option}
          options={{
            aspectRatio: 2,
            responsive: true
          }}
        />
      </div>
    </div>
  );
}


Test.propTypes = {
  className: PropTypes.string
};

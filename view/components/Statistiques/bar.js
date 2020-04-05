import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const option = {
  display: false,
  position: 'top',
  fullWidth: true,
  reverse: false,
  labels: {
    fontColor: 'rgb(255, 99, 132)'
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
        Visiteurs
      </p>
      <Bar
        data={data}
        legend={option}
        options={{ responsive: true }}
      />
    </div>
  );
}

Test.propTypes = {
  className: PropTypes.string
};

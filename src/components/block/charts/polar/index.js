import React from 'react';
import PropTypes from 'prop-types';
import Randomcolor from 'randomcolor';
import { Polar } from 'react-chartjs-2';

const PolarChart = ({
  labels, data, hue, alpha,
}) => (
  <Polar
    data={{
      animation: {
        easing: 'easeOutQuart',
      },
      datasets: [
        {
          data,
          backgroundColor: data.map(() => Randomcolor({
            format: 'rgba',
            alpha,
            hue,
          })),
        },
      ],

      labels,
    }}
    options={{
      animation: {
        easing: 'easeOutQuart',
        duration: 1000,
      },

      legend: {
        labels: {
          fontColor: '#000',
        },
      },
    }}
  />
);

PolarChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  hue: PropTypes.string,
  alpha: PropTypes.number,
};

PolarChart.defaultProps = {
  hue: 'random',
  alpha: 0.6,
};

export default PolarChart;

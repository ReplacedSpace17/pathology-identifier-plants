import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = () => {
  const chartData = [
    ['Fecha', 'Nivel de Confianza'],
    ['2023-01-01', 10],
    ['2023-01-02', 15],
    ['2023-01-03', 12],
    ['2023-01-04', 25],
    ['2023-01-05', 30],
    ['2023-01-06', 18],
    ['2023-01-07', 35],
    ['2023-01-08', 42],
    ['2023-01-09', 28],
    ['2023-01-10', 22],
    ['2023-01-11', 18],
    ['2023-01-12', 25],
    ['2023-01-13', 30],
    ['2023-01-14', 40],
    ['2023-01-15', 38],
    ['2023-01-16', 50],
    ['2023-01-17', 45],
    ['2023-01-18', 55],
    ['2023-01-19', 60],
    ['2023-01-20', 58],
    ['2023-01-21', 65],
    ['2023-01-22', 62],
    ['2023-01-23', 58],
    ['2023-01-24', 70],
    ['2023-01-25', 68],
    ['2023-01-26', 73],
    ['2023-01-27', 75],
    ['2023-01-28', 72],
    ['2023-01-29', 69],
    ['2023-01-30', 65],
    // Continúa con más datos aquí...
  ];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={chartData}
      options={{
        title: 'Nivel de Confianza en el Tiempo',
        hAxis: {
          title: 'Fecha',
        },
        vAxis: {
          title: 'Nivel de Confianza',
          minValue: 0,
          maxValue: 100,
        },
      }}
    />
  );
};

export default LineChart;

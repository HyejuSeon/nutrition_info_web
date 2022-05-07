import React, { Component } from 'react';
import Chart from 'react-apexcharts'

const Donut = (state) => {

    let obj = state.data[0];
    let temp = [obj.carbs, obj.fiber, obj.fat, obj.protein, obj.satFat]

    state = {
      options: {
      labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                },
                total: {
                  showAlways: true
                },

              }
            }
          }
        }
      },
      series: temp,
      labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],

  }

    return (
      <div className="donut">
        <Chart options={state.options} series={state.series} type="donut" width="380" />
      </div>
    );
}

export default Donut;
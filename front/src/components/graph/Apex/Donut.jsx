import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
      series: [44, 55, 41, 17, 15],
      labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat']

    }
  }
  // polarArea or donut
  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;
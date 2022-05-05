import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
      xaxis: {
categories: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],
labels: {
  show: true,
  style: {
    colors: ["#a8a8a8"],
    fontSize: "20px",
    fontFamily: 'Arial'
  }
}
}

      },
      series: [
    {
      name: "IceCream",
      data: [45, 52, 38, 24, 33]
    },
    {
      name: "Pie",
      data: [26, 21, 20, 6, 8]
    }
  ],
      labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],

    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="radar" width="700" />
      </div>
    );
  }
}

export default Donut;
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Sample1 extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {


      // upBAR
      optionsUpBar: {
        chart: {

          toolbar: {
            show: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "100%",

          }
        },
    
        xaxis: {
        //   categories: ['비스킷', '크래커', '채썬밀비스킷', '와플', '초콜릿크림','스폰지케이크','체리파이','타파오카크림푸딩']
            categories: ['x축라벨']
            },

        legend: {
          position: "bottom",
          horizontalAlign: "center"
        }
        },      
      
      seriesUpBar: [
        {
          name: "비스킷",
          data: [32]
        },
        {
          name: "크래커",
          data: [41]
        },
        {
          name: "채썬밀비스킷",
          data: [45]
        },
        {
          name: "와플",
          data: [49]
          },
        {
          name: "초콜릿크림",
          data: [55]
          },
                {
          name: "스폰지케이크",
          data: [65]
          },
                        {
          name: "체리파이",
          data: [70]
          },
                                {
          name: "타파오카크림푸딩",
          data: [91]
        }
        ],      
    };
  }

    
    
  updateCharts() {
    const max = 90;
    const min = 30;
    const newUpBarSeries = [];


    this.state.seriesUpBar.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min;
      });
      newUpBarSeries.push({ data, name: s.name });
    });      

    this.setState({

        seriesUpBar: newUpBarSeries,
      seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
    });
  }

  render() {
    return (
        <div className="app">
            <div className="row">
                <div className="upBarChrat">
                    <Chart
                    options={this.state.optionsUpBar}
                    // height={140}
                    series={this.state.seriesUpBar}
                    type="bar"
                    width={500}
                    />
                </div>
             </div>

            <div className="row">
                <p className="col">
                    <button onClick={this.updateCharts}>UpdateSampel1!</button>
                </p>
            </div>
      </div>
    );
  }
}

export default Sample1;

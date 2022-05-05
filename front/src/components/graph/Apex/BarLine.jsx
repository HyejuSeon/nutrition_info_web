import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['비스킷', '크래커', '채썬밀비스킷', '와플', '초콜릿크림','스폰지케이크','체리파이','타파오카크림푸딩']
        },
          plotOptions: {
         bar: {
          distributed: true
        }
        } 
        },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
        chart: {
    events: {
      zoomed: function(chartContext, { xaxis, yaxis }) {
      }
    }
  }
    };
  }
  // series : y축
  // 줌 이벤트 바 차트의 경우 안됨

// type bar 와 line 으로 변경 테스트 가능
  render() {
    return (
      <div className="barline">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar" 
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarLine;
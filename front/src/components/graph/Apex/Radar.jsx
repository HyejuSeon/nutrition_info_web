import React, { Component } from 'react';
import Chart from 'react-apexcharts'


const Radar = (state) =>{

  // constructor(props) 
    let obj = state.data[0]
  //   super(props);
    let temp = [obj.carbs, obj.fiber, obj.fat, obj.protein, obj.satFat]

    state = {
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
    // {
    //   name: "IceCream",
    //   data: [45, 52, 38, 24, 33]
    // },
    // {
    //   name: "Pie",
    //   data: [26, 21, 20, 6, 8]
    //     },
    { name: obj.foodKorName,
      data: temp}
    
  ],
      labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],

    
  }

  
    return (
      <div className="donut">
        <Chart options={state.options} series={state.series} type="radar" width="700" />
      </div>
    );
  
}


// class Radar extends Component {

//   constructor(props) {
//     super(props);
//     console.log('레이다 그래프!!!11')
//     // console.log(porps.data)
//         console.log('레이다 그래프!!!22')

//     this.state = {
//       options: {
//       xaxis: {
//       categories: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],
//       labels: {
//         show: true,
//         style: {
//           colors: ["#a8a8a8"],
//           fontSize: "20px",
//           fontFamily: 'Arial'
//           }
//         }
//         }

//       },
//       series: [
//     {
//       name: "IceCream",
//       data: [45, 52, 38, 24, 33]
//     },
//     {
//       name: "Pie",
//       data: [26, 21, 20, 6, 8]
//         },
    
//   ],
//       labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],

//     }
//   }

//   render() {

//     return (
//       <div className="donut">
//         <Chart options={this.state.options} series={this.state.series} type="radar" width="700" />
//       </div>
//     );
//   }
// }

export default Radar;
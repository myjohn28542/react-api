// import React from 'react'
// import { Bar } from 'react-chartjs-2'
// const BarChart = () => {
//   return (
//     <div>
//       {/* <Bar
//         data={{
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
//         }}
//         height={400}
//         width={600}
//       /> */}
//       55555

//     </div>
//   );
// };

// export default BarChart;


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import React, { useState, useEffect } from "react";
   
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
   
  function App() {
    const [chartData, setChartData] = useState({
      datasets: [],
    });
   
    const [chartOptions, setChartOptions] = useState({});
   
    useEffect(() => {
      setChartData({
        labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
        datasets: [
          {
            label: "Whom'st let the dogs out",
            data: [12, 55, 34, 120, 720],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.4)",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Whom'st let the dogs out",
          },
        },
      });
    }, []);
   
    return (
      <div className="App">
        <Bar options={chartOptions} data={chartData} />
      </div>
    );
  }
   
  export default App;
   
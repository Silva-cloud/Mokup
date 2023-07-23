import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
//   Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartLegend from './ChartLegend';


import './ContributionsOverTime.css'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    // Legend
  );

  //to control bars thickness:
  ChartJS.defaults.datasets.bar.barPercentage = 0.4;

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
            color: '#b0b0b0',
            
        }
      },
      y: {
        max:400,
        //to hide the last tick
        afterTickToLabelConversion: function( scaleInstance ){
            scaleInstance.ticks.pop();
        },
        border:{dash: [4, 4]}, // for the grid lines
        ticks: {
            color: '#b0b0b0',
            stepSize: 100,
            // Include a dollar sign in the ticks
            callback: function(value) {
                return '$' + value.toFixed(0);
            }
        }
    },

    }
  };
  
  const labels = ["20", "35", "40", "45", "50", "55", "60"];

  const data = {
    labels,
    datasets: [
      {
        label: "Employer",
        data: [25, 30, 45, 50 ,65 , 80, 95],
        // data: [25, 50, 75],
        backgroundColor: "rgb(8 0 163)"
      },
      {
        label: "Employee",
        data: [55, 70,80, 110, 150, 180, 190],
        backgroundColor: "rgb(73 53 255)"
      },
      {
        label: "Total Interest",
        data: [85, 110, 150, 200, 250, 300, 325],
        backgroundColor: "rgb(133 175 255)"
      },
    ]
  };

const ContributionsOverTime = () => {
  return (
    <div className='ContributionsOverTime'>
        <h4 className=' fontBitter mg0 '>Contributions Overtime</h4>
        <ChartLegend />
        <Bar options={options} data={data} />
      </div>
      
  )
}

export default ContributionsOverTime
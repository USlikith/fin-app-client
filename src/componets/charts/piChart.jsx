// import * as React from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useState } from 'react';
import { useEffect } from 'react';
import dashboardAPI from '../../APIFiles/dashboardAPI';
import { useRef } from 'react';



const pieChartColors = [
  '#FF6384',  // Red
  '#36A2EB',  // Blue
  '#FFCE56',  // Yellow
  '#4BC0C0',  // Teal
  '#9966FF',  // Purple
  '#FF9F40',  // Orange
  '#C9CBCF',  // Gray
  '#FF5252',  // Coral Red
  '#5C6BC0',  // Indigo
  '#8BC34A',  // Light Green
  '#FFEB3B',  // Bright Yellow
  '#03A9F4',  // Sky Blue
  '#E91E63',  // Pink
  '#009688',  // Turquoise
  '#795548'   // Brown
];


export default function PieChartWithCustomizedLabel() {
    const [data, setdata] = useState([]);
    const colorCnt = useRef(1)

    useEffect(() => {
        const fetchPopulations = async () => {
            const countries = [ "india", "Ireland", "russia", "australia", "japan","china"];
            const popCountPromises = countries.map(async (country) => {
                const retData = await dashboardAPI.popFinder(country);
                colorCnt.current +=1;
                return { label: country, value: retData ,color: pieChartColors[colorCnt.current]};
            });
            const popCount = await Promise.all(popCountPromises);
            console.log("the popcount",popCount)
            setdata(popCount);
        };


        fetchPopulations();
    }, []);

    const sizing = {
      margin: { right: 5 },
      width: ((window.innerWidth-15)/2),
      height: 500,
      legend: { hidden: true },
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
    
    const getArcLabel = (params) => {
      const percent = params.value / TOTAL;
      return `${(percent * 100).toFixed(0)}%`;
    };


// ********** for reference to be removed *********
    useEffect(() => {
        console.log("The piChart component has been updated with new data.");
    }, [data]);


  return (
    data.length > 0 ? (
      <PieChart
      series={[
        {
          outerRadius: 210,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
    ) : null
);
}
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import dashboardAPI from "../../APIFiles/dashboardAPI"

const chartSetting = {
    xAxis: [
        {
            label: 'Population',
        },
    ],
    width: ((window.innerWidth-15)/2),
    height: 500,
};

const valueFormatter = (value) => `${value}`;

export default function HorizontalBars() {
    const [popArr, setPopArr] = useState([]);

    useEffect(() => {
        const fetchPopulations = async () => {
            const countries = [ "india", "Ireland", "russia", "australia", "japan","china"];
            const popCountPromises = countries.map(async (country) => {
                const retData = await dashboardAPI.popFinder(country);
                return { name: country, population: retData };
            });
            const popCount = await Promise.all(popCountPromises);
            setPopArr(popCount);
        };


        fetchPopulations();
    }, []);
// ********** for reference to be removed *********
    useEffect(() => {
        console.log("The barGraph component has been updated with new data.");
    }, [popArr]);

    return (
        popArr.length > 0 ? (
            <BarChart
                sx={{padding:"15px"}}
                dataset={popArr}
                yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={[{ dataKey: 'population', label: 'Population', valueFormatter }]}
                layout="horizontal"
                {...chartSetting}
            />
        ) : null
    );
}

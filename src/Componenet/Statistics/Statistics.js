import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Statistics = () => {
    const [charts, setchart] = useState([]);
    useEffect( () =>{

        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const chartLoaded = data.data.data;
            const chartData = chartLoaded.map(chart =>{
                const singleChart = {
                    id: chart.id,
                    name: chart.name,
                    questions: chart.total
                }
                return singleChart
            })
            console.log(chartData);
            setchart(chartData);
        });
    }, [])

    return (
        <div className='container'>
            <h3>This is statistics Chart Quiz Questions</h3>
            <div>
            <ResponsiveContainer width="100%" height="100%">
                 <BarChart width={500} height={200} data={charts}>
                     <Bar dataKey="id" fill="#8884d8" />
                     <YAxis></YAxis>
                     <Tooltip></Tooltip>
                 </BarChart>
            </ResponsiveContainer>
            </div>
           
        </div>
    );
};

export default Statistics;
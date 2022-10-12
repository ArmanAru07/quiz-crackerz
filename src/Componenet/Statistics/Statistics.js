import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, CartesianGrid, Legend, Bar } from 'recharts';



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
            <ResponsiveContainer width={500} height={250}>
                    <LineChart width={500} height={400} data={charts}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Line type="monotone" dataKey="questions" stroke="#82ca9d" />
                        <Tooltip />

                    </LineChart>

                </ResponsiveContainer>
            </div>
           
        </div>
    );
};

export default Statistics;
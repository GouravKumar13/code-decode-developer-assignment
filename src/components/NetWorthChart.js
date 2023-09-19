import React from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data01 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
];
const data02 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
];
const data = [
    {
        name: 'Current',
        Account_Receivable: 2450000,
        Account_Payable: 1340000,


    },
    {
        name: '1-30',
        Account_Receivable: 2020000,
        Account_Payable: 81150,

    },
    {
        name: '31-60',
        Account_Receivable: 801000,
        Account_Payable: 86560,

    },
    {
        name: '61-90',
        Account_Receivable: 670000,
        Account_Payable: 79630,

    },
    {
        name: '91+',
        Account_Receivable: 360000,
        Account_Payable: 66920,

    },

];
const NetWorthChart = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={ 400 }>
                <ScatterChart
                    data={ data }
                    margin={ {
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    } }
                >
                    <CartesianGrid />
                    <XAxis type="name" dataKey="name" name="stature" />
                    <YAxis type="number" dataKey="number" name="weight" unit="kg" />
                    <ZAxis type="number" range={ [100] } />
                    <Tooltip cursor={ { strokeDasharray: '3 3' } } />
                    <Legend />
                    <Scatter name="Net_Working_Capital" data={ data01 } fill="#8884d8" line />
                    <Scatter name="Cross_working_capital" data={ data02 } fill="#82ca9d" line />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default NetWorthChart

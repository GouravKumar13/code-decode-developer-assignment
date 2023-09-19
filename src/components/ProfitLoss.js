import React from 'react'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 490000,
        pv: 1000000,
        zv: 1200000,

    },
    {
        name: 'Feb',
        uv: 600000,
        pv: 1400000,
        zv: 160000,
    },
    {
        name: 'Mar',
        uv: 500000,
        pv: 1200000,
        zv: 1400000,
    },
    {
        name: 'Apr',
        uv: 750000,
        pv: 1200000,
        zv: 1600000,
    },
    {
        name: 'May',
        uv: 800000,
        pv: 180000,
        zv: 2000000,
    },
    {
        name: 'Jun',
        uv: 80000,
        pv: 170000,
        zv: 2200000,
    },
    {
        name: 'jul',
        uv: 1000000,
        pv: 1800000,
        zv: 2300000,
    },
    {
        name: 'Aug',
        uv: 1000000,
        pv: 1800000,
        zv: 2300000,
    },
    {
        name: 'Sep',
        uv: 700000,
        pv: 2300000,
        zv: 2700000,
    },
    {
        name: 'Oct',
        uv: 140000,
        pv: 2400000,
        zv: 2500000,
    },
    {
        name: 'Nov',
        uv: 150000,
        pv: 2500000,
        zv: 2600000,
    },
    {
        name: 'Dev',
        uv: 140000,
        pv: 2500000,
        zv: 3000000,
    },
];

function formatYaxisLable (value) {

    if (value === 0) return "0"
    if (value % 1000000 !== 0 && value > 1000000) return `${value / 1000000}0M`
    if (value % 1000000 === 0) return `${value / 1000000}M`
    else return `${value / 1000}K`


}

const ProfitLoss = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={ 380 } >
                <BarChart
                    width={ 500 }
                    height={ 300 }
                    data={ data }
                    stackOffset="sign"
                    margin={ {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    } }
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type='number' domain={ [0, 3000000] } tickCount={ 7 } tickFormatter={ (value) => formatYaxisLable(value) } />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={ 0 } stroke="#000" />
                    <Bar dataKey="pv" fill="#4B0082" stackId="stack" />
                    <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
                    <Bar dataKey="zv" fill="#6A5ACD" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProfitLoss

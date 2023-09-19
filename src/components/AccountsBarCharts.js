import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
function formatYaxisLable (value) {

    if (value === 0) return "0"
    if (value % 1000000 !== 0 && value > 1000000) return `${value / 1000000}0M`
    if (value % 1000000 === 0) return `${value / 1000000}M`
    else return `${value / 1000}K`


}

const AccountsBarCharts = () => {
    return (
        <div className=''>
            <ResponsiveContainer width="100%" height={ 300 }>
                <BarChart
                    width={ 500 }
                    height={ 300 }
                    data={ data }
                    margin={ {
                        top: 25,
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
                    <Bar dataKey="Account_Receivable" fill="#8884d8" />
                    <Bar dataKey="Account_Payable" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default AccountsBarCharts

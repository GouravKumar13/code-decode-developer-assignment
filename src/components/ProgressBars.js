import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
    { name: 'A', value: 76, color: 'blue' }, // Change the value to 1.86
    { name: 'B', value: 42, color: 'grey' }, // Change the value to 0.14

];
const cx = 100;
const cy = 140;
const iR = 50;
const oR = 100;
const total = 100; // Total value (100%)

const needle = (value, cx, cy, iR, oR, color) => {
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 4;
    const x0 = cx + 2;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={ x0 } cy={ y0 } r={ r } fill={ color } stroke="none" />,
        <path
            d={ `M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}` }
            stroke="none"
            fill={ color }
        />,
    ];
};

const ProgressBars = () => {
    return (
        <div>
            <PieChart width={ 300 } height={ 300 }>
                <Pie
                    dataKey="value"
                    startAngle={ 250 }
                    endAngle={ -70 }
                    data={ data }
                    cx={ cx }
                    cy={ cy }
                    innerRadius={ iR }
                    outerRadius={ oR }
                    fill="#8884d8"
                    stroke="none"

                >
                    { data.map((entry, index) => (
                        <Cell key={ `cell-${index}` } fill={ entry.color } />
                    )) }
                </Pie>
                { needle(data[0].value, cx, cy, iR, oR, '#d0d000') }
            </PieChart>
        </div>
    );
};

export default ProgressBars;

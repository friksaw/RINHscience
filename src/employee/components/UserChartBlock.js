import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 1.1,  "Кол-во баллов": 60.0,
    },
    {
        name: 2.2,  "Кол-во баллов": 150.0,
    },
    {
        name: 4,  "Кол-во баллов": 30.0,
    },
    {
        name: 8, "Кол-во баллов": 30.0,
    },
    {
        name: 9,  "Кол-во баллов": 6.0,
    },
    {
        name: 12, "Кол-во баллов": 200.0,
    },
    {
        name: 13.1, "Кол-во баллов": 8.0,
    },
    {
        name: 21.1, "Кол-во баллов": 70.0,
    },
    {
        name: 21.2, "Кол-во баллов": 14.0,
    },
    {
        name: 22,  "Кол-во баллов": 10.0,
    },
    {
        name: 33.1,  "Кол-во баллов": 33.0,
    },
    {
        name: 33.2, "Кол-во баллов": 15.0,
    },
    {
        name: 33.3, "Кол-во баллов": 10.0,
    },
    {
        name: 34.1,  "Кол-во баллов": 15.0,
    },
    {
        name: 34.2,  "Кол-во баллов": 1.0,
    },
    {
        name: 34.3, "Кол-во баллов": 10.0,
    },
    {
        name: 36,  "Кол-во баллов": 40.0,
    },
    {
        name: 37, "Кол-во баллов": 1.0,
    },
    {
        name: 71.5,  "Кол-во баллов": 20.0,
    },
    {
        name: 71.3,  "Кол-во баллов": 3.0,
    },
];

export default class UserChartBlock extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

    render() {
        return (
            <BarChart
                style={{marginTop: 40, marginBottom: 20}}
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Кол-во баллов" fill="#CCDDFB" background={{ fill: '#eee' }} />
            </BarChart>
        );
    }
}
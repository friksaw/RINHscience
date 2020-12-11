import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: '01.05.20',  "Кол-во цитирований": 12,
    },
    {
        name: '01.06.20',  "Кол-во цитирований": 42,
    },
    {
        name: '01.07.20',  "Кол-во цитирований": 32,
    },
    {
        name: '01.08.20',  "Кол-во цитирований": 21,
    },
    {
        name: '01.09.20',  "Кол-во цитирований": 2,
    },
    {
        name: '01.10.20',  "Кол-во цитирований": 2,
    },
    {
        name: '01.11.20', "Кол-во цитирований": 10,
    },
];

export default class ProjectVhart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />

                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Кол-во цитирований" fill="#CCDDFB" background={{ fill: '#eee' }} />
            </BarChart>
        );
    }
}
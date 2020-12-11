import React, { PureComponent } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Образовательная деятельность', "Показатели вуза": 61.3, "Медианные значения показателей государственных и муниципальных вузов" : 60,
    },
    {
        name: 'Научно-исследовательская деятельность', "Показатели вуза": 101.04, "Медианные значения показателей государственных и муниципальных вузов" : 51.28,
    },
    {
        name: 'Международная деятельность', "Показатели вуза": 4.98, "Медианные значения показателей государственных и муниципальных вузов" : 1,
    },
    {
        name: 'Финансово-экономическая деятельность', "Показатели вуза": 100, "Медианные значения показателей государственных и муниципальных вузов" : 30,
    },
    {
        name: 'Дополнительный показатель', "Показатели вуза": 3.48, "Медианные значения показателей государственных и муниципальных вузов" : 2.78,
    },
];

export default class Chart2Block extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

    render() {
        return (
            <ComposedChart
                width={560}
                height={250}
                data={data}
                style={{display: "flex"}}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Показатели вуза" barSize={20} fill="#515899" />
                <Line type="monotone" dataKey="Медианные значения показателей государственных и муниципальных вузов" stroke="#FFB504" />
            </ComposedChart>
        );
    }
}

import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const data = [
    { name: 'Group A', value: 30 },
    { name: 'Group B', value: 70 },
];
const COLORS = ['#CCDDFB', '#A6B3DD', '#5E8CDC', '#515696'];


export default class UserBal extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

    render() {
        return (
            <div>
                <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={data}
                        cx={190}
                        cy={120}
                        innerRadius={60}
                        outerRadius={95}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>

                </PieChart>
                <div style={{marginTop: -55, marginLeft: 20, marginRight: 20}}>
                    <Typography variant="subtitle1" color="textSecondary">
                        <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>
                            Кол-во баллов в системе
                        </Link>: 30
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>
                            Наиболее весомый вклад
                        </Link>: Кол-во цитирований (443)
                    </Typography>
                </div>
            </div>
        );
    }
}
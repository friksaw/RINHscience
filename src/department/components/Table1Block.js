import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import filial from "../../images/filiali.png";
import CardMedia from "@material-ui/core/CardMedia";
import {Typography} from "@material-ui/core";


// Generate Order Data
function createData(id, name, count, porog, last) {
    return { id, name, count, porog, last };
}

const rows = [
    createData(1, 'Образовательная деятельность', 61.3, 60, "-0.2%"),
    createData(2, 'Научно-исследовательская деятельность', 101.04, 51.28, "+80.8%"),
    createData(3, 'ГМеждународная деятельность', 4.98, 1, "-24.0%"),
    createData(4, 'Финансово-экономическая деятельность', 2011.15, 1327.57, "+9.2%"),
    createData(5, 'Заработная плата ППС', 203.15, "-", "+11.6%"),
    createData(6, 'Дополнительный показатель', 3.48, 2.78, "+1.5%"),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: '100%',
    },
    row: {
        flexDirection: "column",
        display: "flex",
        width: "100%",
        height: '100%',
    }
}));

export default function Table1Block() {
    const classes = useStyles();
    return (
        <React.Fragment style={{width: "100%", display: "flex",height: '100%',}}>
            <Table size="small" style={{display: "flex",width: "100%",height: '100%',}}><div style={{width: "100%",height: '100%',}}>
                <TableHead style={{width: "100%",height: '100%',}}>
                    <TableRow style={{width: "100%",height: '100%',}}>
                        <TableCell><Link style={{color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>№</Link></TableCell>
                        <TableCell style={{width: "100%"}}><Link style={{ width: "100%", color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Наименование показателя</Link></TableCell>
                        <TableCell style={{width: "100%"}}><Link style={{ width: "100%", color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Значение показателя</Link></TableCell>
                        <TableCell style={{width: "100%"}}><Link style={{ width: "100%", color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Пороговое значение</Link></TableCell>
                        <TableCell style={{width: "100%"}}><Link style={{ width: "100%", color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Сравнение</Link></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{width: "100%",height: '100%',}}>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell><Typography variant="subtitle1" color="textSecondary">{row.name}</Typography></TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.porog}</TableCell>
                            <TableCell style={{color: "green"}}>{row.last}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </div></Table>

        </React.Fragment>
    );
}
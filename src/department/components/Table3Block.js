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


// Generate Order Data
function createData(id, filial) {
    return { id, filial };
}

const rows = [
    createData(0, 'Филиал РГЭУ (РИНХ) в г. Черкесске'),
    createData(1, 'Филиал РГЭУ (РИНХ) в г. Ейске'),
    createData(2, 'Гуковский институт экономики и права - филиал РГЭУ (РИНХ)',),
    createData(3, 'Филиал РГЭУ (РИНХ) в г. Кисловодске'),
    createData(4, 'Филиал РГЭУ (РИНХ) в г. Махачкала'),
    createData(5, 'Филиал РГЭУ (РИНХ) в г. Миллерово'),
    createData(6, 'Таганрогский институт имени А.П. Чехова (филиал) Ростовского государственного экономического университета (РИНХ)'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%"
    },
    row: {
        flexDirection: "column",
        display: "flex",
        width: "100%"
    }
}));

export default function Table3Block() {
    const classes = useStyles();
    return (
        <React.Fragment className={ classes.row}>
            <Table size="small" className={ classes.row}>
                <TableHead className={ classes.row}>
                    <TableRow>
                        <TableCell className={ classes.row}>
                            <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>
                                Наименование филиалов организации
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.filial}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </React.Fragment>
    );
}
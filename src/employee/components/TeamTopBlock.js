import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Имя', minWidth: 170 },
    { id: 'code', label: 'Учебное\u00a0заведение', minWidth: 100 },
    {
        id: 'population',
        label: 'Баллы',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Кол-во проектов',
        minWidth: 1,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('Команда#098509', 'СПБГи/МГУ', 1324171354, 8),
    createData('Команда#124578', 'МГУ', 1403500365, 6),
    createData('Команда#874578', 'РИНХ', 60483973, 4),
    createData('Команда#548509', 'СПБГи', 327167434, 8),
    createData('Команда#658509', 'СПБГи', 37602103, 15),
    createData('Команда#128509', 'РИНХ', 25475400, 1),
    createData('Команда#138509', 'СПБГи', 83019200, 4),
    createData('Команда#238509', 'СПБГи', 4857000, 5),
    createData('Команда#348509', 'СПБГи', 126577691, 7),
    createData('Команда#098509', 'СПБГи', 126317000, 377973),
    createData('Команда#098509', 'СПБГи', 67022000, 640679),
    createData('Команда#098509', 'СПБГи', 67545757, 242495),
    createData('Команда#098509', 'СПБГи', 146793744, 17098246),
    createData('Команда#098509', 'СПБГи', 200962417, 923768),
    createData('Команда#098509', 'СПБГи', 210147125, 8515767),
    createData('Команда#140009', 'СПБГи', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        height: "100%",
    },
});

export default function TeamTopBlock() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
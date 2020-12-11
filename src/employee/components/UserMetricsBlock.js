
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography} from "@material-ui/core";
import {burgerBarData} from "../data/defaultUI";
import {userMetrics} from "../data/userExample";



function createData(id, pp, name, count, date, sum) {
    return { id, pp, name, count, date, sum };
}

const rows = [
    createData(1, 1.1,  "Печатные, не менее 500 экземпляров, не менее 10 п.л., не менее 1 п.л. на соавтора, изданные издательствами (центральными)", 1, '1 с 01.01.2020 по 31.08.2020', 60.0),
    createData(2, 2.2, "Публикации в изданиях, индексируемых в информационно-аналитических системах ( Web of Science, квартиль 3-4, в т.ч. нулелевойм)", 8, "-", 150.0 ),
    createData(3, 4, "Публикации в российских научных журналах, включенных в перечень ВАК", 1, "с 01.01.2020 по 31.08.2020", 30.0 ),
    createData(4, 6, "Публикации в изданиях, включенных в Российский индекс научного цитирования (РИНЦ) (не указанных в п. 2, п. 4 и п. 5)", 2, "с 01.01.2020 по 31.08.2020", 15.0 ),
    createData(5, 8, "Научные статьи, опубликованные в российских изданиях (кроме указанных в пп. 2-6)", 1, "с 01.01.2020 по 31.08.2020", 6.0 ),
    createData(6, 9, "Патенты России (правообладатель – Университет, автор - разработчик)", 2, "с 01.01.2020 по 31.08.2020", 100.0 ),
    createData(7, 12, "Рецензирование статей в журналах, включенных в Перечень ВАК", 2, "с 01.01.2020 по 31.08.2020", 4.0 ),
    createData(8, 13.1, "Организация научных конференций, форумов, круглых столов, семинаров, вебинаров, выставок, фестивалей (международных)", 7, "с 01.01.2020 по 31.08.2020", 10.0 ),
    createData(9, 13.2, "Организация научных конференций, форумов, круглых столов, семинаров, вебинаров, выставок, фестивалей (всероссийских)", 2, "с 01.01.2020 по 31.08.2020", 5.0 ),
    createData(10, 13.3, "Организация научных конференций, форумов, круглых столов, семинаров, вебинаров, выставок, фестивалей (региональных)", 11, "с 01.01.2020 по 31.08.2020", 3.0 ),
    createData(11, 21.1, "Выполнение хоз. договорных НИР не менее критерия, установленного в Положении об эффективном контракте РГЭУ (РИНХ) для соответствующей должности пропорционально выполненному объему средств (руководство)", 1, "с 01.01.2020 по 31.08.2020", 15.0 ),
    createData(12, 21.2, "Выполнение хоз. договорных НИР не менее критерия, установленного в Положении об эффективном контракте РГЭУ (РИНХ) для соответствующей должности пропорционально выполненному объему средств (участие)", 1, "с 01.01.2020 по 31.08.2020", 10.0 ),
    createData(13, 22, "Выполнение R&D проектов Южного НОЦ «Цифровая трансформация агропромышленного и индустриального комплекса» (участие)", 1, "с 01.01.2020 по 31.08.2020", 15.0 ),
    createData(14, 33.1, "Значение индекса Хирша преподавателя, ед (РИНЦ)", 1, "с 01.01.2020 по 31.08.2020", 1.0 ),
    createData(15, 33.2, "Значение индекса Хирша преподавателя, ед ( Web of Science)", 1, "с 01.01.2020 по 31.08.2020", 10.0 ),
    createData(16, 33.3, "Значение индекса Хирша преподавателя, ед (Scopus)", 1, "с 01.01.2020 по 31.08.2020", 10.0 ),
    createData(17, 34.1, "Цитирование статей, опубликованных в журналах, индексируемых в информационно-аналитических системах, ед (РИНЦ)", 1, "1 год", 0.3 ),
    createData(18, 34.2, "Цитирование статей, опубликованных в журналах, индексируемых в информационно-аналитических системах, ед (Web of Science)", 1, "5 лет", 1.0 ),
    createData(19, 34.3, "Цитирование статей, опубликованных в журналах, индексируемых в информационно-аналитических системах, ед (Scopus)", 1, "5 лет", 1.0 ),
    createData(20, 36, "Учебное пособие, опубликованное в отчетном году в центральных изданиях по профилю преподаваемых дисциплин", 1, "с 01.01.2020 по 31.08.2020", 40.0 ),
    createData(21, 37, "Учебник или учебное пособие по профилю преподаваемых дисциплин, кроме указанных в пп. 34-35", 1, "с 01.01.2020 по 31.08.2020", 1.0 ),
    createData(22, 71.5, "Премии, награды, дипломы (диплом, медаль, грамота, благодарственное письмо других организаций (индивидуальные достижения))", 4, "с 01.01.2020 по 31.08.2020", 5.0 ),
    createData(23, 73.3, "Повышение квалификации (в ведущих организациях России в области образования и науки)", 1, "с 01.01.2020 по 31.08.2020", 3.0 ),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
}));


// <Typography style={{marginTop: 16, marginBottom: 10, textAlign: "center"}} component="h5" variant="h5">Научно-исследовательская деятельность</Typography>
export default function UserMetricsBlock() {
    const classes = useStyles();
    return (
        <React.Fragment className={classes.root}>
            <Table size="small" style={{display: 'flex', width: '100%', height: '100%',}}>
                <div>
                <TableHead>
                    <TableRow>
                        <TableCell><Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>№ п/п</Link></TableCell>
                        <TableCell><Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Наименование показателя</Link></TableCell>
                        <TableCell><Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Единица измерения факт</Link></TableCell>
                        <TableCell><Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Переодичность измерения</Link></TableCell>
                        <TableCell><Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Весомость показателя</Link></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.pp}</TableCell>
                            <TableCell><Typography variant="subtitle1" color="textSecondary">{row.name}</Typography></TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.sum}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </div>
            </Table>
        </React.Fragment>
    );
}
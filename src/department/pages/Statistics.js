import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart1Block from "../components/Chart1Block";
import Title1 from "../components/Title1";
import Title3 from "../components/Title3";
import Title2 from "../components/Title2";
import Chart2Block from "../components/Chart2Block";
import Chart3Block from "../components/Chart3Block";
import Table1Block from "../components/Table1Block";
import Table2Block from "../components/Table2Block";
import Title4 from "../components/Title4";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: "100%",
    },
}));

export default function Statistics() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Title1 />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Chart1Block />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Table1Block />
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Title2 />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={fixedHeightPaper}>
                    <Chart2Block />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={fixedHeightPaper}>
                    <Chart3Block />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Table2Block />
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Title3 />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={fixedHeightPaper}>
                    <Chart2Block />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={fixedHeightPaper}>
                    <Chart3Block />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Table2Block />
                </Paper>
            </Grid>


            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Title4 />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Chart1Block />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Table1Block />
                </Paper>
            </Grid>


        </Grid>
    );
}
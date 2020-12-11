import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Newsa1 from "../components/Newsa1";
import Newsa2 from "../components/Newsa2";


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

export default function News() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Newsa1 />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Newsa2 />
                </Paper>
            </Grid>

        </Grid>
    );
}
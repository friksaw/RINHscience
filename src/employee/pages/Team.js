import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UserInfoBlock from '../components/UserInfoBlock';
import UserPhotoBlock from '../components/UserPhotoBlock';
import Orders from '../components/Orders';
import AgreeCreateComandBlock from "../components/AgreeCreateTeamBlock";
import AgreeGoToTeamBlock from "../components/AgreeGoToTeamBlock";
import TeamTopBlock from "../components/TeamTopBlock";


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

export default function Team() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <AgreeCreateComandBlock />
                </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <AgreeGoToTeamBlock />
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <TeamTopBlock />
                </Paper>
            </Grid>
        </Grid>
    );
}
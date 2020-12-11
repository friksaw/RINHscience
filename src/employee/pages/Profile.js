import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UserInfoBlock from '../components/UserInfoBlock';
import UserPhotoBlock from '../components/UserPhotoBlock';
import UserInterestsBlock from "../components/UserInterestsBlock";
import UserMetricsBlock from "../components/UserMetricsBlock";
import UserChartBlock from "../components/UserChartBlock";
import UserBal from "../components/UserBal";


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

export default function Profile() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper className={fixedHeightPaper}>
                    <UserPhotoBlock />
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper className={fixedHeightPaper}>
                    <UserInfoBlock />
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={fixedHeightPaper}>
                    <UserInterestsBlock />
                </Paper>
            </Grid>


            <Grid item xs={8}>
                <Paper className={fixedHeightPaper}>
                    <UserChartBlock />
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={fixedHeightPaper}>
                    <UserBal />
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <UserMetricsBlock />
                </Paper>
            </Grid>
        </Grid>
    );
}
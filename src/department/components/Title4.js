import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {userInfo} from "../data/userExample";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: theme.spacing(1),
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {

    },

}));

export default function Title4() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Typography style={{color: "#515696"}} component="h5" variant="h5">
                Междунорадная деятельность
            </Typography>
        </div>
    );
}
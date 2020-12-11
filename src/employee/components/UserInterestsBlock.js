import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import {userInfo, userInterests} from "../data/userExample";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    content: {
        flex: '1 0 auto',
        width: "100%",
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
}));

export default function UserInterestsBlock() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>

            <div className={classes.row}>
                <CardContent className={classes.content}>
                    {
                        userInterests.map((data) =>
                            <Typography variant="subtitle1" color="textSecondary">
                                <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>{data.name}</Link>: {data.description}
                            </Typography>
                        )
                    }
                </CardContent>
            </div>
        </div>
    );
}
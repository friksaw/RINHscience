import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "100%",
        height: "100%",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        textAlign: "left",
    },
}));

export default function AgreeGoToTeam() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Вступай в топовую команду
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Здесь тоже помогут умные алгоритмы! Посмотри топ, чтобы попасть к лучшим.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Подать заявку
                    </Button>
                </CardActions>
            </div>
        </div>
    );
}



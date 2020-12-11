import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import team from '../../images/team.png';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


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
    image: {
        width: 1000,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));







export default function AgreeCreateTeamBlock() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Создай команду с лучшими специалистами!
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        В подборе участников помогут алгоритмы машинного обучения,
                        которые обеспечат совместимость темы и задач проекта и компетенций кандидата.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary">
                        Создать
                    </Button>
                    <Button size="small" color="primary">
                        О командах
                    </Button>
                </CardActions>
            </div>
            <CardMedia
                className={classes.image}
                image={team}
            />






        </div>
    );
}
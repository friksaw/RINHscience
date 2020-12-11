import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    paper: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    div: {
        margin: theme.spacing(2),
        display: 'flex',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        justifyItems: "center",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "linear-gradient(to right, #515696, #5E8DDD);"
    },
}));

export default function Settings() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <div className={classes.div}>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="ФИО"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Идентификатор"
                                        name="lastName"
                                        autoComplete="lname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Логин"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Повторите пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Аккаунт доступен для просмотра всем пользователям сети (а не только по месту работы), включая все публикации, их оценки и любая статистика"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Сохранить
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Появилась проблема? Обратитесь в поддержку help@nauka.ru
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}
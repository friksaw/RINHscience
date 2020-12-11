import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {userProjects} from "../data/userExample";
import IconButton from "@material-ui/core/IconButton";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ProjectVhart from "../components/ProjectVhart";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },

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
    paper1: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
    },
    fixedHeight: {
        height: "100%",
    },
    chip: {
        background: "linear-gradient(to right, #515696, #5E8DDD);",
    }
}));

export default function Projects() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper1}>
                    <IconButton style={{ margin: 5}}>
                        <AddIcon style={{color: "#515696"}} />
                    </IconButton>
                    <Typography style={{margin: 5, alignItems: "center", display: "flex", color: "#515696"}}>
                        Загрузить новую публикацию
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>

                    {
                        userProjects.map((data) =>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <div className={classes.column}>
                                            <Typography className={classes.heading}>
                                                {data.name}
                                            </Typography>
                                        </div>
                                        <div style={{marginLeft: 60}} className={classes.column}>
                                            <Typography className={classes.secondaryHeading}>
                                                {data.creator}
                                            </Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.details}>
                                        <Typography style={{marginRight: 30}} variant="subtitle1" color="textSecondary">
                                            С развитием нынешнего экономического кризиса и приближением пика спроса на нефть в 2030 году для Казахстана становится еще более острым вопрос о дальнейшем направлении развития экономики. Проблема может усугубиться в ближайшие несколько лет на фоне решения правительства снижать дефицит республиканского бюджета.
                                        </Typography>
                                        <div className={classes.column} style={{textAlign: "right", alignItems: "right"}}>
                                            <Chip className={classes.chip} label="Экономика" style={{background: "linear-gradient(to right, #515696, #5E8DDD);", color: "white", marginRight: 20}}/>
                                        </div>
                                        <div className={clsx(classes.column, classes.helper)}>
                                            <Typography variant="caption">
                                                Кол-во цитирований: 493
                                                <br />
                                                <a onClick={handleClickOpen} className={classes.link}>
                                                    Подробная информация
                                                </a>
                                            </Typography>
                                        </div>
                                    </AccordionDetails>
                                    <Divider />
                                    <AccordionActions>
                                        <Button size="small" style={{color: "#515696"}}>
                                            Изменить
                                        </Button>
                                        <Button size="small" color="secondary">
                                            Удалить
                                        </Button>
                                    </AccordionActions>
                                </Accordion>



                        )
                    }






                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Остаточный принцип в экономике
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography variant="subtitle1" color="textSecondary">
                                <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Дата публикации</Link>: 21.10.19
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Кол-во цитирований</Link>: 493
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Попадания в печать</Link>: 21
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <Link style={{ color: "linear-gradient(to right, #515696, #5E8DDD);", textDecoration: 'none' }}>Попадания в международную печать</Link>: 7
                            </Typography>



                            <div style={{marginTop: 40, marginLeft: -15}}><ProjectVhart/></div>

                        </DialogContent>




                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Закрыть
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Grid>
        </Grid>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import {burgerBarData, HelpAccordions} from "../data/defaultUI";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Help() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>

                    {
                        HelpAccordions.map((data) =>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>
                                        {data.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {data.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <CardContent style={{textAlign: "center"}}>
                        <Typography className={classes.heading} >
                            Здесь нет ответа на ваш вопрос?
                        </Typography>
                        <Typography className={classes.heading}>
                            Свяжитесь с нами по электронной почте: <Link>help@nauka.ru</Link>
                        </Typography>
                    </CardContent>
                </Paper>
            </Grid>
        </Grid>
    );
}
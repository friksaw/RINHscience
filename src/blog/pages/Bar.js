import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FunctionsIcon from '@material-ui/icons/Functions';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Divider} from "@material-ui/core";
import GavelIcon from '@material-ui/icons/Gavel';
import EcoIcon from '@material-ui/icons/Eco';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';import EqualizerIcon from '@material-ui/icons/Equalizer';
import HealingIcon from '@material-ui/icons/Healing';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BuildIcon from '@material-ui/icons/Build';
import FlareIcon from '@material-ui/icons/Flare';
import StarBorderIcon from '@material-ui/icons/StarBorder';


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

export default function Bar() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={10}>
                <Paper className={fixedHeightPaper}>
                    <ListItem button>
                        <ListItemIcon>
                            <FunctionsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Математика" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <GraphicEqIcon />
                        </ListItemIcon>
                        <ListItemText primary="Физика" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <FingerprintIcon />
                        </ListItemIcon>
                        <ListItemText primary="Биология" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <GavelIcon />
                        </ListItemIcon>
                        <ListItemText primary="Политология" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <FunctionsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Экономика" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <FavoriteBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Медицина" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Социология" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <HealingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Психология" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <EcoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ботаника" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <TouchAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="IT" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Инженерия" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <EcoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Робототехника" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <StarBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Космология" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <FlareIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ракетостроение" />
                    </ListItem>
                    <Divider/>
                </Paper>
            </Grid>

        </Grid>
    );
}
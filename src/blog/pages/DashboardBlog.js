import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import News from "./News";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/logo1.PNG";
import Bar from "./Bar";


const drawerWidth = 240;

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
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(24),
        paddingRight: theme.spacing(0),
        width: "250%"
    },
    container1: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(10),
    },
    container2: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(0),
        paddingLeft: theme.spacing(9),
        paddingRight: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        minHeight: 40,
        paddingTop: 4,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        height: 55,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "linear-gradient(to right, #515696, #5E8DDD);",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        justifyContent: "center",

    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    customBadge: {
        backgroundColor: "orange",
        color: "white"
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export default function DashboardBlog() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar className={classes.toolbar} style={{marginTop: -3}}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <img src={logo} style={{width: 120, marginTop: 6}} alt="logo"/>
                    </Typography>
                </Toolbar>
            </AppBar>




            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Container maxWidth="lg" className={classes.container} style={{marginTop: -25}}>
                        <News/>
                    </Container>

                    <Container maxWidth="lg" className={classes.container1} style={{marginTop: -25}}>
                        <Bar/>
                    </Container>
                </div>
            </main>



        </div>
    );
}
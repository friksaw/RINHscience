import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Profile from "./Profile";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/logo1.PNG";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {burgerBarData} from "../data/defaultUI";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Team from "./Team";
import Help from "./Help";
import Settings from "./Settings";
import Projects from "./Projects";


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


export default function DashboardEmployee() {
    const classes = useStyles();
    const [openDrawer, setDrawerOpen] = React.useState(true);
    const [openProjects, setOpenProjects] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(null);

    const handleProjectsClick = () => {
        setOpenProjects(!openProjects);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setSelectedProjectIndex(null);
    };

    const handleProjectItemClick = (event, index) => {
        setSelectedProjectIndex(index);
        setSelectedIndex(null);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };



    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, openDrawer && classes.appBarShift)}>
                <Toolbar className={classes.toolbar} style={{marginTop: -3}}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, openDrawer && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <img src={logo} style={{width: 120, marginTop: 6}} alt="logo"/>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !openDrawer && classes.drawerPaperClose),
                }}
                open={openDrawer}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>

                    {
                        burgerBarData.map((data) =>
                            <div>
                                <ListItem
                                    button
                                    selected={selectedIndex === data.id}
                                    onClick={(event) => handleListItemClick(event, data.id)}
                                >
                                    <ListItemIcon>
                                        {data.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={data.name} />
                                </ListItem>
                                {
                                    data.id === 2 &&
                                    <Divider style={{marginTop: 8, marginBottom: 8}}/>
                                }
                            </div>
                        )
                    }
                </List>
            </Drawer>



            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {
                        selectedIndex === 0 &&
                            <Profile/>
                    }{
                        selectedIndex === 1 &&
                            <Team/>
                    }{
                        selectedIndex === 2 &&
                            <Projects/>
                    }{
                        selectedIndex === 3 &&
                            <Settings/>
                    }{
                        selectedIndex === 4 &&
                            <Help/>
                    }

                </Container>
            </main>


        </div>
    );
}
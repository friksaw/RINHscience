import React from 'react';
import filial from "../../images/filiali.png";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    image: {
        width: "85%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
    },
    container: {
        padding: theme.spacing(0),
        paddingLeft: "15%",
        paddingTop: "10%",
    },
}));

export default function FilialMapBlock() {
    const classes = useStyles();
    return (
        <React.Fragment className={ classes.container}>
            <div className={ classes.container}>
                <img src={filial} className={ classes.image}/>
            </div>
        </React.Fragment>
    );
}
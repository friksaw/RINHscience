import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import rinhCount from "../../images/rinhCount.PNG";


const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%"
    },
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
    }
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment className={ classes.container}>

            <div className={ classes.container}>
                <img src={rinhCount} className={ classes.image}/>
            </div>
        </React.Fragment>
    );
}
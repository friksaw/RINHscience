import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import rinh from "../../images/rinh.jpg"



const useStyles = makeStyles({
    image: {
        minHeight: "100%",
        minWidth: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
    },
});

export default function UserPhotoBlock() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CardMedia
                className={classes.image}
                image={rinh}
            />
        </React.Fragment>
    );
}
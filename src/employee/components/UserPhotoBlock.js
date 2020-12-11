import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import userAvatar from "../../images/userAvatar.jpg"



const useStyles = makeStyles({
    image: {
        height: "100%",
        width: "100%",
    },
});

export default function UserPhotoBlock() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CardMedia
                className={classes.image}
                image={userAvatar}
            />
        </React.Fragment>
    );
}
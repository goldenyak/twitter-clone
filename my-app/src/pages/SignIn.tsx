import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from "../theme";
import {Typography} from "@mui/material";

const useStyles = makeStyles ((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: '#1da1f2',
        flex: '50%',
        listStyleType: 'none',
        color: 'white',
        fontSize: '34px'

    },
    loginSide: {
        flex: '50%',
    },

}));


function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <ul>
                    <li>
                        <Typography>Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li>
                        <Typography>Узнайте то, о чем говорят в мире.</Typography>
                    </li>
                    <li>
                        <Typography>Присоединяйтесь к общению.</Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                world
            </div>
        </div>
    );
}

export default SignIn;
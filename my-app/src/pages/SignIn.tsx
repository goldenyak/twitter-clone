
import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import theme from '../theme';
import {Twitter} from "@material-ui/icons";

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
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 50%',

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
                <div>
                    <Twitter />
                    <Typography> Узнайте, что происходит в мире прямо сейчас! </Typography>
                    <Typography> Присоединяйтесь к нам прямо сейчас! </Typography>
                    <Button variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Войти</Button>
                </div>

            </div>
        </div>
    );
}

export default SignIn;
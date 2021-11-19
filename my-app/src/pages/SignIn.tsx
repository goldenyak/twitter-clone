import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from "../theme";

const useStyles = makeStyles ((theme) => ({

}));


function SignIn() {

    const classes = useStyles();
    return (
        <div style={{display: 'flex'}}>
            <div style={{backgroundColor: 'red', height: '300px', flex: '50%'}}>
                hello
            </div>
            <div style={{backgroundColor: 'blue', height: '500px', flex: '50%'}}>
                world
            </div>
        </div>
    );
}

export default SignIn;
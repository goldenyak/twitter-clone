import React from 'react';
import {makeStyles, Button, Typography} from '@material-ui/core';
import theme from "../theme";
import {Twitter} from "@material-ui/icons";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },

    blueSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74cafe',
        flex: '0 0 50%',
        fontSize: '34px',
        position: 'relative',
        overflow: 'hidden',
    },

    blueSideInfo: {
        width: '380px',
        listStyle: 'none',
        margin: '0',
        padding: '0',
        position: 'relative',

        '& h6': {
            display: 'flex',
            alignItems: 'start',
            fontWeight: '700',
            fontSize: '20px',
            color: 'white',
            marginBottom: '40px',
        },
    },

    blueSideIcons: {
        marginRight: '20px',
        fontSize: 32,
    },

    blueSideBigIcon: {
        position: 'absolute',
        left: '-50',
        top: '-100',
        width: '200%',
        height: '200%',
    },

    loginSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },

    loginSideWrapper: {
        width: '380px',
    },

    loginSideTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '60px',
        marginTop: '10px',
    },

    loginSideButton: {
        marginBottom: '15px',
    },

    loginSideTwitterIcon: {
        fontSize: '50px',
    },

    modalIconClose: {
        width: '250px',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },


}));


function SignIn() {
    const classes = useStyles();



    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <Twitter className={classes.blueSideBigIcon} color="primary"/>
                <ul className={classes.blueSideInfo}>
                    <li>
                        <Typography variant='h6'>
                            <SearchOutlinedIcon className={classes.blueSideIcons}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            <PeopleOutlineIcon className={classes.blueSideIcons}/>
                            Узнайте то, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            <ModeCommentOutlinedIcon className={classes.blueSideIcons}/>
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <Twitter className={classes.loginSideTwitterIcon} color="primary"/>
                    <Typography className={classes.loginSideTitle}> Узнайте, что происходит в мире прямо
                        сейчас! </Typography>
                    <Typography> <b>Присоединяйтесь к нам прямо сейчас!</b> </Typography>
                    <br/>
                    <Button className={classes.loginSideButton} variant="contained" color="primary"
                            fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={handleClickOpen} className={classes.loginSideButton} variant="outlined"
                            color="primary"
                            fullWidth>
                        Войти
                    </Button>



                </div>
            </div>
        </div>
    );
}

export default SignIn;






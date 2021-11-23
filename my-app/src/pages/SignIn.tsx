import React from 'react';
import {makeStyles, Button, Typography} from '@material-ui/core';
import theme from "../theme";
import {Twitter} from "@material-ui/icons";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ModalBlock from "../components/ModalBlock";
import RegistrationBlock from '../components/RegistrationBlock';



export const useStylesSignIn = makeStyles((theme) => ({
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
        width: '450px',
        listStyle: 'none',
        margin: '0',
        padding: '0',
        position: 'relative',

        '& h6': {
            display: 'flex',
            alignItems: 'center',
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
        position: 'relative',
        left: '-10px',
        width: '250px',
        display: 'flex',
        alignItems: 'center',
    },


}));


function SignIn() {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signOut'>(); // Стейт для отображения модального окна при входе

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    }; // Показываем модальное окно ВХОДА В АККАУНТ при клике

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signOut');
    }; // Показываем модальное окно РЕГИСТРАЦИИ при клике

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    }; // Скрываем модальное окно при клике


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
                    <Button onClick={handleClickOpenSignUp}
                            className={classes.loginSideButton}
                            variant="contained" color="primary"
                            fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={handleClickOpenSignIn}
                            className={classes.loginSideButton}
                            variant="outlined"
                            color="primary"
                            fullWidth>
                        Войти
                    </Button>
                    {/*// Наше модальное окно для входа в аккаунт*/}
                    <ModalBlock visible={visibleModal === 'signIn'} title="Вход в аккаунт" classes={classes}
                                onClose={handleCloseModal}/>
                    <RegistrationBlock visible={visibleModal === 'signOut'} title="Регистрация"
                                classes={classes} onClose={handleCloseModal}/>
                </div>
            </div>
        </div>
    );
}

export default SignIn;






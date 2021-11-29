import React, {ReactElement} from 'react';
import {makeStyles, Button, Typography} from '@material-ui/core';
import {Twitter} from "@material-ui/icons";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ModalBlock from "../components/ModalBlock";
import RegistrationBlock from '../components/RegistrationBlock';
import {useStylesSignIn} from "../theme/SignInTheme";




export const SignIn: React.FC = (): React.ReactElement =>  {
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
                    {/*// Наше модальное окно для входа в аккаунт и регистрации*/}
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






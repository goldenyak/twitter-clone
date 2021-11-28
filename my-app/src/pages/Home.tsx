import React from 'react';
import {makeStyles, Button, Typography, IconButton} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {Container, Grid} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Tweet} from "../components/Tweet/Tweet";
import {SideMenu} from "../components/SideMenu/SideMenu";
import theme from "../theme";
import {AddTweetForm} from "../components/AddTweetForm/AddTweetForm";

export const useStylesHome = makeStyles((theme) => ({
    body: {
        paddingLeft: '200px',
        paddingRight: '200px',
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'space-around',
    },

    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '250px',
        padding: '10px 10px 10px 25px',
    },

    sideBarItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        marginBottom: '10px',
        height: '45px',
        borderRadius: '30px',
        transition: 'background-color 0.15s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(15, 20, 25, 0.1)',
            '& h6': {
                color: '#1b76d2', // Добавляем цвет тексту в меню при hover
            },
            '& svg path': {
                fill: "#1b76d2", // Добавляем цвет иконке в меню при hover
            },
        },
    },

    sideBarText: {
        fontWeight: 550,
        fontSize: '18px',
        letterSpacing: '0.5px',
        marginLeft: '15px',
    },

    contentBlocksCenter: {
        width: '600px',
        height: '100vh',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderBottom: '0',
            borderTop: '0',
        },
    },

    tweetsWrapper: {
        height: '100%',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderTop: '0 ',
            borderLeft: '0',
            borderRight: '0',
            borderBottom: '1px solid rgb(239, 243, 244)',
        },
    },

    tweetsHeader: {
        padding: '20px 15px 10px 15px',
    },

    tweetsHeaderText: {
        fontWeight: 800,
        letterSpacing: '1px',
    },

    tweetBlock: {
        padding: '20px 15px',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
            cursor: 'pointer',
        },
    },

    tweetAvatar: {
        width: '40px',
        height: '40px',
        // marginLeft: '17px',
        marginRight: '10px',

    },

    addFormBody: {
        display: 'flex',
        width: '80%',
        margin: '0 auto',
        padding: '20px',
        borderBottom: '1px solid rgb(239, 243, 244)',
    },

    addFormTextarea: {
        width: '80%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },

    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid rgb(239, 243, 244)',
    },

    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,

    },

    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -25,
        justifyContent: 'space-between',
        maxWidth: 450,
    },

    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },

    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },

    tweetUserName: {
        color: grey[400],
    },

    tweetIconGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px',
        position: 'relative',
        left: '-10px',
    },

    contentBlocksRight: {
        padding: '10px 50px',
    },



    searchFieldInput: {
        border: '0',
        '& .MuiOutlinedInput-root': {
            height: '35px',
            backgroundColor: '#e1e0e0',
            borderRadius: '30px',
            outline: 'none',
            border: '1px solid black',
            '&:hover': {
                backgroundColor: 'white',
                outline: 'none',
                border: '0',
            },
        },
    },

    tweetBlockIcon1: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'blue',
            },
            '& .MuiTouchRipple-root': {
                color: 'blue',
            },
        },
    },

    tweetBlockIcon2: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'green',
            },
            '& .MuiTouchRipple-root': {
                color: 'green',
            },
        },
    },

    tweetBlockIcon3: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'red',
            },
            '& .MuiTouchRipple-root': {
                color: 'red',
            },
        },
    },

    tweetBlockIcon4: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'blue',
            },
            '& .MuiTouchRipple-root': {
                color: 'blue',
            },
        },
    },
}));

export const Home = () => {
    const classes = useStylesHome();

    return (
        <Container maxWidth="lg">
            <div className={classes.wrapper}>
                <SideMenu classes={classes}/>
                <div className={classes.contentBlocksCenter}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography className={classes.tweetsHeaderText} variant="h6">Главная</Typography>
                        </Paper>
                        <AddTweetForm classes={classes}/>
                        <Tweet classes={classes}
                               text="Впереди выходные: как насчет Комаровки? Узнали, что и по каким ценам там сейчас."
                               user={{
                                   fullName: "Ivan",
                                   userName: "vanya",
                                   avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                               }}/>
                        <Tweet classes={classes}
                               text="Впереди выходные: как насчет Комаровки? Узнали, что и по каким ценам там сейчас."
                               user={{
                                   fullName: "Ivan",
                                   userName: "vanya",
                                   avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                               }}/>
                        <Tweet classes={classes}
                               text="Впереди выходные: как насчет Комаровки? Узнали, что и по каким ценам там сейчас."
                               user={{
                                   fullName: "Ivan",
                                   userName: "vanya",
                                   avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                               }}/>
                    </Paper>
                </div>

                <div className={classes.contentBlocksRight}>
                    <TextField className={classes.searchFieldInput} placeholder="Поиск" variant="standard" fullWidth/>
                </div>
            </div>

        </Container>


    );
};

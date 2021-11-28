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
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import {SearchTextField} from "../components/SearchTextField/SearchTextField";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import InputAdornment from '@mui/material/InputAdornment';


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
        margin: '0 auto',
        padding: '20px',
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

    contentBlocksRight: {
        padding: '10px 50px',
    },


    // searchFieldInput: {
    //     border: '0',
    //     '& .MuiOutlinedInput-root': {
    //         height: '35px',
    //         backgroundColor: '#e1e0e0',
    //         borderRadius: '30px',
    //         outline: 'none',
    //         border: '1px solid black',
    //         '&:hover': {
    //             backgroundColor: 'white',
    //             outline: 'none',
    //             border: '0',
    //         },
    //     },
    // },

    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },


    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },

}));

export const Home = () => {
    const classes = useStylesHome();

    return (
        <Container maxWidth="lg">
            <div className={classes.wrapper}>
                {/*Навигация/меню*/}
                <SideMenu classes={classes}/>
                {/*Центральный блок твитов*/}
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
                {/*Блок с поиском*/}
                <div className={classes.contentBlocksRight}>
                    <SearchTextField
                        fullWidth
                        variant="outlined"
                        placeholder="Поиск"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Paper className={classes.rightSideBlock}>
                        <Paper className={classes.rightSideBlockHeader} variant="outlined">
                            <b>Актуальные темы</b>
                        </Paper>
                        <List>
                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemText
                                    primary="Санкт-Петербург"
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Твитов: 3 331
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider component="li"/>
                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemText
                                    primary="#коронавирус"
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Твитов: 163 122
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider component="li"/>
                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemText
                                    primary="Беларусь"
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Твитов: 13 554
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider component="li"/>
                        </List>
                    </Paper>
                    <Paper className={classes.rightSideBlock}>
                        <Paper className={classes.rightSideBlockHeader} variant="outlined">
                            <b>Кого читать</b>
                        </Paper>
                        <List>
                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Dock Of Shame"
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            @FavDockOfShame
                                        </Typography>
                                    }
                                />
                                <Button color="primary">
                                    <PersonAddIcon/>
                                </Button>
                            </ListItem>
                            <Divider component="li"/>
                        </List>
                    </Paper>
                </div>
            </div>
        </Container>


    );
};

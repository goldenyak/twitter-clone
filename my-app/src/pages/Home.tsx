import React from 'react';
import {makeStyles, Button, Typography, IconButton} from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ProfileIcon from '@mui/icons-material/PermIdentityOutlined';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

export const useStylesHome = makeStyles(() => ({
    body: {
        paddingLeft: '250px',
        paddingRight: '250px',
    },

    wrapper: {
        display: 'flex',
    },

    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '15%',
        padding: '10px 10px 10px 25px',
    },

    sideBarText: {
        fontWeight: 650,
        fontSize: '18px',
        letterSpacing: '0.5px',
        marginLeft: '15px',
    },

    contentBlocksCenter: {
        flex: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderBottom: '0',
            borderTop: '0',
        },
    },

    contentBlocksRight: {
        width: '20%',
        padding: '10px 50px',
    },

    tweetsWrapper: {
        height: '100%',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderTop: '0',
            borderLeft: '0',
            borderRight: '0',
        },
        '& .makeStyles-tweetsHeader-8': {
            borderBottom: '1px solid #e1e0e0',
        },
        '& .makeStyles-tweetBlock-10': {
            borderBottom: '1px solid #e1e0e0',
        },
    },

    tweetsHeader: {
        padding: '10px 15px',
    },

    tweetsHeaderText: {
        fontWeight: 800,
        letterSpacing: '1px',
    },

    tweetBlock: {
      padding: '10px',
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
}));

export const Home = () => {
    const classes = useStylesHome();

    return (
        <div className={classes.body}>
            <div className={classes.wrapper}>
                <div className={classes.sideBar}>
                    <IconButton>
                        <TwitterIcon color="primary" fontSize='large'/>
                    </IconButton>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <HomeIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Главная</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <TagIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Поиск</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <NotificationsIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Уведомления</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <EmailIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Сообщения</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <BookmarkIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Закладки</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <ListIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Список</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <ProfileIcon sx={{ color: '#263238' }}/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Пользователи</Typography>
                    </div>
                </div>


                <div className={classes.contentBlocksCenter}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography className={classes.tweetsHeaderText} variant="h6">Главная</Typography>
                        </Paper>
                        <Paper className={classes.tweetBlock} variant="outlined">
                            <Avatar alt="Cat" src="https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=" />
                        </Paper>
                    </Paper>
                </div>
                <div className={classes.contentBlocksRight}>
                    <TextField className={classes.searchFieldInput} placeholder="Поиск" variant="standard" fullWidth/>
                </div>
            </div>
        </div>

    );
};

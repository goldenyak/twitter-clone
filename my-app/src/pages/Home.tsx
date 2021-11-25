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

export const useStylesHome = makeStyles(() => ({
    body: {
        paddingLeft: '200px',
        paddingRight: '200px',
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
        letterSpacing: '1px',
        color: '#757575',
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
        }
    },

    contentBlocksRight: {
        width: '25%',
    },

    tweetsWrapper: {
        height: '100%',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderTop: '0',
            borderLeft: '0',
            borderRight: '0',
            borderBottom: '1px solid #e1e0e0 ',
        }

    },

    tweetsHeader: {
        padding: '10px',





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
                            <HomeIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Главная</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <TagIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Поиск</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <NotificationsIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Уведомления</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <EmailIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Сообщения</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <BookmarkIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Закладки</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <ListIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Список</Typography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton>
                            <ProfileIcon/>
                        </IconButton>
                        <Typography className={classes.sideBarText} variant="h6">Пользователи</Typography>
                    </div>
                </div>


                <div className={classes.contentBlocksCenter}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                    </Paper>
                </div>
                <div className={classes.contentBlocksRight}>3</div>
            </div>
        </div>

    );
};

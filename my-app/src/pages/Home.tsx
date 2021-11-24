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

export const useStylesHome = makeStyles(() => ({
    wrapper: {
        display: 'flex',

    },

    contentBlocksLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '20%',
        padding: '10px 10px 10px 20px',
    },

    contentBlocksCenter: {
        flex: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'grey',
    },

    contentBlocksRight: {
        width: '10%',
        backgroundColor: 'green',
    }

}));

export const Home = () => {
    const classes = useStylesHome();

    return (
        <div className={classes.wrapper}>
            <div className={classes.contentBlocksLeft}>
                <IconButton>
                    <TwitterIcon color="primary"/>
                </IconButton>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <HomeIcon/>
                    </IconButton>
                    <Typography variant="h6">Домой</Typography>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <TagIcon/>
                    </IconButton>
                    <Typography variant="h6">Поиск</Typography>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                    <Typography variant="h6">Уведомления</Typography>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <Typography variant="h6">Сообщения</Typography>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <BookmarkIcon/>
                    </IconButton>
                    <Typography variant="h6">Закладки</Typography>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <ListIcon/>
                    </IconButton>
                    <Typography variant="h6">Список</Typography>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                        <ProfileIcon/>
                    </IconButton>
                    <Typography variant="h6">Профиль</Typography>
                </div>
            </div>
            <div className={classes.contentBlocksCenter}></div>
            <div className={classes.contentBlocksRight}>3</div>
        </div>
    );
};

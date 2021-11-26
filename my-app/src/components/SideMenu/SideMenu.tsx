import React from "react";
import {IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ProfileIcon from "@mui/icons-material/PermIdentityOutlined";
import {useStylesHome} from "../../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <div className={classes.sideBar}>
            <IconButton>
                <TwitterIcon color="primary" fontSize='large'/>
            </IconButton>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <HomeIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Главная</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <TagIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Поиск</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <NotificationsIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Уведомления</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <EmailIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Сообщения</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <BookmarkIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Закладки</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <ListIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Список</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                    <ProfileIcon sx={{color: '#263238'}}/>
                </IconButton>
                <Typography className={classes.sideBarText} variant="h6">Пользователи</Typography>
            </div>
        </div>
    );
};
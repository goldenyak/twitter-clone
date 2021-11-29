import React from "react";
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ProfileIcon from "@mui/icons-material/PermIdentityOutlined";
import {useStylesHome} from "../../theme/HomeTheme";
import ModalBlock from "../ModalBlock";
import {AddTweetModalBlock} from "../AddTweetModalBlock/AddTweetModalBlock";
import {AddTweetForm} from "../AddTweetForm/AddTweetForm";


interface SideMenuProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes,}: SideMenuProps): React.ReactElement => {

    const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false); // Модальное окно для твита

    const handleOpenAddTweetModal = () => {
        setVisibleAddTweet(true)
    } // Открываем модальное окно для твита

    const onCloseAddTweetModal = () => {
        setVisibleAddTweet(false)
    } // Закрываем модальное окно для твита

    return (
        <div className={classes.sideBar}>
            <IconButton>
                <TwitterIcon color="primary" fontSize='large'/>
            </IconButton>
            <div className={classes.sideBarItem}>
                <HomeIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Главная</Typography>
            </div>
            <div className={classes.sideBarItem}>
                <TagIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Поиск</Typography>
            </div>
            <div className={classes.sideBarItem}>
                <NotificationsIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Уведомления</Typography>
            </div>
            <div className={classes.sideBarItem}>
                <EmailIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Сообщения</Typography>
            </div>
            <div className={classes.sideBarItem}>
                <BookmarkIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Закладки</Typography>
            </div>
            <div className={classes.sideBarItem}>
                <ListIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Список</Typography>
            </div>
            <div className={classes.sideBarItem}>
                <ProfileIcon sx={{color: '#263238'}}/>
                <Typography className={classes.sideBarText} variant="h6">Пользователи</Typography>
            </div>
            <Button onClick={handleOpenAddTweetModal}
                    style={{marginTop: '15px'}}
                    variant="contained" color="primary"
                    fullWidth>
                Отправить
            </Button>
            <AddTweetModalBlock onClose={onCloseAddTweetModal}
                                title=""
                                visible={visibleAddTweet}
                                classes={classes}
            >
            </AddTweetModalBlock>
        </div>
    );
};
import React from 'react';
import {makeStyles, Button, Typography, IconButton} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import {Container} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Tweet} from "../components/Tweet/Tweet";
import {SideMenu} from "../components/SideMenu/SideMenu";
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
import {useStylesHome} from "../theme/HomeTheme";

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
                        </List>
                    </Paper>
                </div>
            </div>
        </Container>


    );
};

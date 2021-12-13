import React from 'react';
import {makeStyles, Button, Typography, IconButton} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import {Container} from "@mui/material";
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
import CircularProgress from '@mui/material/CircularProgress';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import {useStylesHome} from "../theme/HomeTheme";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../store/ducks/tweets/selectors";
import {fetchTags} from "../store/tags/tags/actionCreators";
import {Tags} from "../components/Tags/Tags";

export const Home = () => {
    const classes = useStylesHome();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [dispatch]);

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
                        <Divider/>
                        {isLoading ?
                            <div className={classes.tweetsCentered}><CircularProgress/></div>
                            : tweets.map((tweet =>
                                    <Tweet classes={classes} key={tweet._id} text={tweet.text} user={tweet.user}/>
                            ))}
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
                    <Tags classes={classes}/>
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

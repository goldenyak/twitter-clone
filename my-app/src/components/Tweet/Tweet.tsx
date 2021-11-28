import React from 'react';
import Paper from "@mui/material/Paper";
import {Grid} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {IconButton, Typography} from "@material-ui/core";
import ReplyIcon from "@mui/icons-material/MapsUgcOutlined";
import RepeatIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/IosShareOutlined";
import {useStylesHome} from "../../pages/Home";

interface TweetProps {
    classes: ReturnType<typeof useStylesHome>;
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string,
    };
    text: string,
}

export const Tweet: React.FC<TweetProps> = ({classes, user, text}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classes.tweetBlock} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar alt={`Аватарка пользователя ${user.fullName}`}
                            src={user.avatarUrl}/>
                </Grid>
                <Grid item xs={11}>
                    <div style={{marginLeft: '15px'}}>
                        <Typography><b>{user.fullName}</b> <span className={classes.tweetUserName}>@{user.userName}</span>
                            <Typography style={{marginTop: '10px'}}>
                                {text}
                            </Typography>
                        </Typography>
                    </div>

                        <div className={classes.tweetIconGroup}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <IconButton className={classes.tweetBlockIcon1}>
                                    <ReplyIcon fontSize="small"/>
                                </IconButton>
                                <span style={{fontSize: '12px'}}>1</span>
                            </div>

                            <IconButton className={classes.tweetBlockIcon2}>
                                <RepeatIcon fontSize="small"/>
                            </IconButton>
                            <IconButton className={classes.tweetBlockIcon3}>
                                <LikeIcon fontSize="small"/>
                            </IconButton>
                            <IconButton className={classes.tweetBlockIcon4}>
                                <ShareIcon fontSize="small"/>
                            </IconButton>
                        </div>

                </Grid>
            </Grid>
        </Paper>
    );
};



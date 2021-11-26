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
    user?: {
        fullName: string,
        userName: string,

    }
}

export const Tweet: React.FC<TweetProps> = ({classes}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classes.tweetBlock} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar alt="Cat"
                            src="https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA="/>
                </Grid>
                <Grid item xs={11}>
                    <Typography><b>Apple Pro</b> <span className={classes.tweetUserName}>@aaplpro</span>
                        <Typography style={{marginTop: '10px'}}>
                            Стив Возняк подписал редкий образец материнской платы Apple Computer I 1976
                            года на встрече в Дубае
                            Ждем теперь новый лот на аукционе Улыбающееся лицо с открытым ртом и в
                            холодном поту
                        </Typography>
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
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};



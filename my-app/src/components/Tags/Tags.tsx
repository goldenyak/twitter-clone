import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import {IconButton, Typography} from "@material-ui/core";
import {useStylesHome} from "../../theme/HomeTheme";
import {TagsState} from "../../store/tags/tags/contracts/state";
import {useSelector} from "react-redux";
import {selectIsTagsLoaded, selectTagsItems} from "../../store/tags/tags/selectors";
import {Link} from "react-router-dom";


interface TagsProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const Tags: React.FC<TagsProps> = ({classes}: TagsProps): React.ReactElement | null => {

    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded)

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    items.map(obj => (
                        <React.Fragment key={obj._id}>
                            <ListItem className={classes.rightSideBlockItem}>
                                <Link to={`/home/search?q=${obj.name}`}>
                                    <ListItemText
                                        primary={obj.name}
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: {obj.count}
                                            </Typography>
                                        }
                                    />
                                </Link>
                            </ListItem>
                            <Divider component="li"/>

                        </React.Fragment>
                    ))
                }
            </List>
        </Paper>
    );
};


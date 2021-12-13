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
import {selectTagsItems} from "../../store/tags/tags/selectors";


interface TagsProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const Tags: React.FC<TagsProps> = ({classes}: TagsProps): React.ReactElement => {

    const items = useSelector(selectTagsItems);

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    items.map(obj => <>
                        <ListItem key={obj._id} className={classes.rightSideBlockItem}>
                            <ListItemText
                                primary={obj.name}
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        Твитов: {obj.count}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider component="li"/>
                    </>)
                }
            </List>
        </Paper>
    );
};


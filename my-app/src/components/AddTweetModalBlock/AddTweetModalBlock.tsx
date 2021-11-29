import React from 'react';
import {DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Typography} from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import {useStylesHome} from "../../theme/HomeTheme";
import {AddTweetForm} from "../AddTweetForm/AddTweetForm";


interface AddTweetModalBlockProps {
    classes: ReturnType<typeof useStylesHome>;
    onClose: () => void;
    title: string;
    visible: boolean;
}


export const AddTweetModalBlock: React.FC<AddTweetModalBlockProps> = ({
                                                                          onClose,
                                                                          title,
                                                                          visible,
                                                                          classes,
                                                                      }): React.ReactElement => {

    return (
        <Dialog open={visible}>
            <DialogTitle>
                <div>
                    <IconButton onClick={onClose}>
                        <CloseIcon color="primary"/>
                    </IconButton>
                    <Typography variant="h5">{title}</Typography>
                </div>
                <AddTweetForm classes={classes}/>
            </DialogTitle>
        </Dialog>
    );
}

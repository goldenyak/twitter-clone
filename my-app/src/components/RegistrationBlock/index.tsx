import React from 'react';
import {DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Button, Typography} from "@material-ui/core";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {useStylesSignIn} from "../../theme/SignInTheme";

interface RegistrationBlockProps {
    title: string;
    classes: ReturnType<typeof useStylesSignIn>;
    visible: boolean;
    onClose: () => void;
}

const RegistrationBlock: React.FC<RegistrationBlockProps> = ({
                                                                 title,
                                                                 classes,
                                                                 onClose,
                                                                 visible,
                                                             }): React.ReactElement => {

    return (
        <Dialog open={visible} onClose={onClose}>
            <DialogTitle>
                <div className={classes.modalIconClose}>
                    <IconButton onClick={onClose}>
                        <CloseIcon color="primary"/>
                    </IconButton>
                    <Typography variant="h5">{title}</Typography>
                </div>
            </DialogTitle>
            <DialogContent>
                <Typography style={{marginBottom: '10px'}}>
                    Пройдите простую и быструю регистрацию :)
                </Typography>
                <TextField style={{marginBottom: '15px'}}
                           margin="dense"
                           id="name"
                           label="Ваше имя"
                           type="name"
                           fullWidth
                           variant="standard"
                />
                <TextField style={{marginBottom: '15px'}}
                           margin="dense"
                           id="email"
                           label="Ваш e-mail"
                           type="email"
                           fullWidth
                           variant="standard"
                />
                <TextField
                    margin="dense"
                    id="outlined-password-input"
                    label="Ваш пароль"
                    type="password"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button className={classes.loginSideButton}
                        variant="contained"
                        color="primary"
                        fullWidth>
                    Далее
                </Button>
            </DialogActions>


        </Dialog>
    );
}

export default RegistrationBlock;
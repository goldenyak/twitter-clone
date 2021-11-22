import React, {ComponentProps} from 'react';
import {DialogTitle, FormGroup, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Button, Typography} from "@material-ui/core";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

interface ModalBlockProps {
    title: string;
    children: React.ReactNode;

}


const ModalBlock: React.FC<ModalBlockProps> = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <div className={classes.modalIconClose}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon color="primary"/>
                    </IconButton>
                    <Typography variant="h5">Вход в аккаунт</Typography>
                </div>
            </DialogTitle>
            <DialogContent>
                <Typography style={{marginBottom: '10px'}}>
                    Если вы не зарегистрированы, то это лучше сделать прямо сейчас)
                </Typography>
                <TextField style={{marginBottom: '15px'}}
                           margin="dense"
                           id="email"
                           label="Ваш e-mail"
                           type="email"
                           fullWidth
                           variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="outlined-password-input"
                    label="Ваш пароль"
                    type="password"
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}
                        variant="contained"
                        color="primary">
                    Войти
                </Button>
            </DialogActions>


        </Dialog>
    );
}

export default ModalBlock;
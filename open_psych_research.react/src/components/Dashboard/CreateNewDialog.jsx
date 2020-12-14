import React from 'react'
import { Paper, Dialog, DialogContent, DialogActions, Button, DialogTitle, TextField } from '@material-ui/core';
import Draggable from 'react-draggable';


const PaperComponent = (props) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}


const CreateNewDialog = ({ name, open, handleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Create new "{name}" survey
            </DialogTitle>
            <DialogContent>
                <TextField id="standard-basic" label="Enter survey name" />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateNewDialog;
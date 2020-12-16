import React from 'react'
import { Dialog, DialogContent, DialogActions, Button, DialogTitle, TextField } from '@material-ui/core';
import Draggable from 'react-draggable';
import {DesignedPaper} from './../DesignedComponents/Paper';


const PaperComponent = (props) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <DesignedPaper {...props} />
        </Draggable>
    );
}


const RunSurveyDialog = ({ name, open, handleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Run "{name}" survey
            </DialogTitle>
            <DialogContent>
                <TextField id="standard-basic" label="Enter survey name" />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default RunSurveyDialog;
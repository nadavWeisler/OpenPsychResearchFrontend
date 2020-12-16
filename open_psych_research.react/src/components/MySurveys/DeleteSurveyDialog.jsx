import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle } from '@material-ui/core';
import Draggable from 'react-draggable';
import { DesignedPaper } from './../DesignedComponents/Paper';


const PaperComponent = (props) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <DesignedPaper {...props} />
        </Draggable>
    );
}


const DeleteSurveyDialog = ({ name, open, handleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Delete Survey
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete new "{name}" survey?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    delete
          </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteSurveyDialog;
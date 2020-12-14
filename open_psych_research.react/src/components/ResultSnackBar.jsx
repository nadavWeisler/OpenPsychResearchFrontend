import React from 'react'
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


const ResultSnackBar = ({ open, handleClose, message, success = true, autoHideDuration = 6000 }) => {
    let severity;
    let msg;
    if (success) {
        severity = "success";
        msg = "Success: " + message;
    } else {
        severity = "error"
        msg = "Error: " + message;
    }

    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {msg}
            </Alert>
        </Snackbar>
    );
}

export default ResultSnackBar;
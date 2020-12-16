import React, { useState } from 'react'
import { Divider, AccordionActions, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RunSurveyDialog from './RunSurveyDialog'
import ResultSnackBar from '../ResultSnackBar';
import {Accordion, AccordionSummary, AccordionDetails} from '../DesignedComponents/Accordion'
import AddCircleIcon from '@material-ui/icons/AddCircle';


const Option = ({ name, content }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        handleClickOpenSnackBar();
    };

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleClickOpenSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {name}

                </AccordionSummary>
                <AccordionDetails
                    expandIcon={<ExpandMoreIcon />}
                >
                    {content}
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <IconButton size="large" color="primary" onClick={handleClickOpenDialog}>
                        <AddCircleIcon />
                    </IconButton>
                </AccordionActions>
            </Accordion>
            <RunSurveyDialog name={name} open={openDialog} handleClose={handleCloseDialog} />
            <ResultSnackBar open={openSnackBar} message="Start Survey" handleClose={handleCloseSnackBar} />
        </>
    );
}

export default Option;
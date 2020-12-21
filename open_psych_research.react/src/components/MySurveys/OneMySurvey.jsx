
import React, { useState } from 'react';
import { AccordionActions, IconButton } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '../DesignedComponents/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteSurveyDialog from './DeleteSurveyDialog'
import ResultSnackBar from '../ResultSnackBar';
import DeleteIcon from '@material-ui/icons/Delete'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import LinkIcon from '@material-ui/icons/Link';

const OneMySurvey = ({ name, count, id }) => {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                <AccordionSummary expandIcon={<ExpandMoreIcon />}                 >
                    {name}
                </AccordionSummary>
                <AccordionDetails expandIcon={<ExpandMoreIcon />}                 >
                    {count}
                </AccordionDetails>
                <AccordionActions>
                    <IconButton size="medium" variant="outlined" color="secondary" onClick={handleClickOpen}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton size="medium" variant="outlined" color="inherit" href={"analytics"} surveyId={id}>
                        <AssessmentOutlinedIcon />
                    </IconButton>
                    <IconButton size="medium" variant="outlined" color="primary" href="survey" surveyId={id}>
                        <LinkIcon />
                    </IconButton>
                </AccordionActions>
            </Accordion>
            <DeleteSurveyDialog name={name} open={open} handleClose={handleClose} handleCancel={() => { setOpen(false) }} />
            <ResultSnackBar open={openSnackBar} message="Survey Deleted" handleClose={handleCloseSnackBar} />
        </>
    );
}

export default OneMySurvey;
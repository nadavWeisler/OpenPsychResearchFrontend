
import React from 'react';
import { AccordionActions, IconButton } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '../DesignedComponents/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteSurveyDialog from './DeleteSurveyDialog'
import DeleteIcon from '@material-ui/icons/Delete'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import LinkIcon from '@material-ui/icons/Link';

const OneMySurvey = ({ name, count }) => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    {count}
                </AccordionDetails>
                <AccordionActions>
                    <IconButton size="large" variant="outlined" color="secondary" onClick={handleClickOpen}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton size="large" variant="outlined" color="inherit" onClick={() => { }}>
                        <AssessmentOutlinedIcon />
                    </IconButton>
                    <IconButton size="large" variant="outlined" color="primary" onClick={() => { }}>
                        <LinkIcon />
                    </IconButton>
                </AccordionActions>
            </Accordion>
            <DeleteSurveyDialog name={name} open={open} handleClose={handleClose} />
        </>
    );
}

export default OneMySurvey;
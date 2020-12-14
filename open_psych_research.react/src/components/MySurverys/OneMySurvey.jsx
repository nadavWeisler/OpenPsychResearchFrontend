
import React from 'react';
import { AccordionActions, Button } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '../DesignedComponents/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteSurveyDialog from './DeleteSurveyDialog'

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
                    <Button size="large" color="primary" onClick={handleClickOpen}>
                        Delete
                    </Button>
                    <Button size="large" color="primary" onClick={() => { }}>
                        Analytics
                    </Button>
                    <Button size="large" color="primary" onClick={() => { }}>
                        Link
                    </Button>
                </AccordionActions>
            </Accordion>
            <DeleteSurveyDialog name={name} open={open} handleClose={handleClose} />
        </>
    );
}

export default OneMySurvey;
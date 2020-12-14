
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const OneMySurvey = ({name, count }) => {
    return (
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
        </Accordion>
    );
}

export default OneMySurvey;
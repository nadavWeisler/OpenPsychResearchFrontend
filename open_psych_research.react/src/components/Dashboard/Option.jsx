import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Option = ({ name, content }) => {
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
                {content}
            </AccordionDetails>
        </Accordion>
    );
}

export default Option;
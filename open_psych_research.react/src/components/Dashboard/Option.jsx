import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Divider, AccordionActions, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateNewDialog from './CreateNew'

const Option = ({ name, content }) => {
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
                    {content}
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button size="small" color="primary" onClick={handleClickOpen}>
                        Create New
                    </Button>
                </AccordionActions>
            </Accordion>
            <CreateNewDialog name={name} open={open} handleClose={handleClose} />
        </>
    );
}

export default Option;
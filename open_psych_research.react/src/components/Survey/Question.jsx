import React from 'react';
import { FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { DesignedFormControl } from './../DesignedComponents/FormControls'


const Question = ({ key, prompt, options, required }) => {
    const listItem = options.map((option) => (
        <FormControlLabel key={key} value={option} control={<Radio />} label={option} />
    ));

    return (
        <DesignedFormControl required={required}>
            <FormLabel>
                {prompt}
            </FormLabel>
            <RadioGroup>
                {listItem}
            </RadioGroup>
        </DesignedFormControl>
    );
}

export default Question;


import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';


const Question = ({ prompt, options, required }) => {
    const listItem = options.map((option) => (
        <FormControlLabel key value={option} control={<Radio />} label={option} />
    ));

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{prompt}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
                {listItem}
            </RadioGroup>
        </FormControl>
    );
}

export default Question;


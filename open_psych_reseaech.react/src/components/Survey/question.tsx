import React, { Component } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface QuestionProps {
    prompt: string;
    options: Array<string>
    required: boolean;
}


export default class Question extends Component<QuestionProps, any> {
    listItem = this.props.options.map((option) => (
        <FormControlLabel value={option} control={<Radio />} label={option} />)
    );

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">{this.props.prompt}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                    {
                        this.listItem
                    }
                </RadioGroup>
            </FormControl>
        );
    }
}



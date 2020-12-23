import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const getQuestionOption = (question) => {
    return <MenuItem value={question.id}> {question.name} </MenuItem>
}

export const QuestionDropdown = ({ questions, handleChange }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
                Question
        </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={questions}
                onChange={handleChange}
            >
                {
                    questions?.map((item) => {
                        return getQuestionOption(item);
                    })
                }
            </Select>
        </FormControl>
    );
}

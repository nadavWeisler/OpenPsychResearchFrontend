import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export const SearchBox = ({ onInputChange }) => {
    const classes = useStyles();
    const valueRef = useRef('')

    return (
        <>
            <Divider />
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Filter Surveys"
                    onChange={() => onInputChange(valueRef.current.value)}
                    inputRef={valueRef}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="filter">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Divider />
        </>
    );
}

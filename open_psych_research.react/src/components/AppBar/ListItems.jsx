import React from 'react';
import { ListItemIcon, ListItemText, ListItem, Link } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <>
        <ListItem button component={Link} href="dashboard" >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="mySurveys">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="My Surveys" />
        </ListItem>
    </>
);
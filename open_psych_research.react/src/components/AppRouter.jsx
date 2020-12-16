import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard/Dashboard'
import MySurveys from './MySurveys/MySurveys'
import SurveyAnalytics from './Analytics/SurveyAnalytics'
import PageNotFound from './PageNotFound'
import Survey from './Survey/Survey'
import SearchAppBar from './AppBar/SearchAppBar';
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DesignedPaper } from "./DesignedComponents/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    }
}));

export const AppRouter = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <SearchAppBar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <DesignedPaper>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/mySurveys" component={MySurveys} />
                                <Route path="/survey" component={Survey} />
                                <Route path="/analytics" component={SurveyAnalytics} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </BrowserRouter>
                    </DesignedPaper>
                </Container>
            </main>
        </div>
    )
}


import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Catalog from './Catalog/Catalog'
import Dashboard from './Dashboard/Dashboard'
import PageNotFound from './PageNotFound'
import Survey from './Survey/Survey'
import SearchAppBar from './AppBar/SearchAppBar';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

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

const AppRouter = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <SearchAppBar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <BrowserRouter>
                        <div dir="rtl">
                            <Switch>
                                <Route path="/" component={Home} exact={true}/>
                                <Route path="/catalog" component={Catalog} exact={true}/>
                                <Route path="/dashboard" component={Dashboard} exact={true}/>
                                <Route path="/survey/:surveyId" component={Survey} exact={true}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    )
}

export default AppRouter;
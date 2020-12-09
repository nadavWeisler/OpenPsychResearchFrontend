import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Catalog from './Catalog/Catalog'
import Dashboard from './Dashboard/Dashboard'
import PageNotFound from './PageNotFound'
import Survey from './Survey/Survey'


class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div dir="rtl">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/catalog" component={Catalog} exact={true} />
                        <Route path="/dashboard" component={Dashboard} exact={true} />
                        <Route path="/survey/:surveyId" component={Survey} exact={true} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    };
}

export default AppRouter;
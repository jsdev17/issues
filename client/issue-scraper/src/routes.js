import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import ReposPage from './components/ReposPage';
import IssuesPage from './components/IssuesPage';
import OpenIssues from './components/OpenIssues';
import ClosedIssues from './components/ClosedIssues';
import AssignedIssues from './components/AssignedIssues';

const routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={ReposPage}/>
            <Route path='/:user/:repo/issues' component={IssuesPage}/>
            <Route path='/open-issues' component={OpenIssues}/>
            <Route path='/closed-issues' component={ClosedIssues}/>
            <Route path='/assigned-issues' component={AssignedIssues}/>
        </Switch>
    </Router>
);

export default routes;
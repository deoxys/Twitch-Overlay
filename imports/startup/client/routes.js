import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

// route components
import { TrackList } from '/imports/ui/TrackList';
import { RequestList } from '/imports/ui/RequestList';
import {TwitchView} from "../../ui/TwitchView";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={TrackList} />
            <Route exact path="/requests" component={RequestList} />
            <Route exact path="/twitch" component={TwitchView} />
        </Switch>
    </Router>
);
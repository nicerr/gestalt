import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App';
import {Home, NewPost, NotFound, Post, UserProfile} from './components/scenes';
import {node, session, nodeAndSession} from './queries';

export default (
  <Route
    path="/"
    component={App}
    queries={session}
  >
    <IndexRoute
      component={Home}
      queries={session}
    />
    <Route
      path="users/:id"
      component={UserProfile}
      queries={nodeAndSession}
    />
    <Route
      path="posts/new"
      component={NewPost}
      queries={session}
    />
    <Route
      path="posts/:id"
      component={Post}
      queries={node}
    />
    <Route
      path="*"
      component={NotFound}
    />
  </Route>
);

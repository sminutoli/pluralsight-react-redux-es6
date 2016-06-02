import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, HomePage, AboutPage, CoursesPage } from './components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
  </Route>
)
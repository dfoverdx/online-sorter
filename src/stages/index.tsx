import React, { FC } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import AlgorithmSelect from './algorithm-select';
import DataEntry from './data-entry';
import Sort from './sort';

const Stages: FC = () =>
  <HashRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/data-entry" /></Route>
      <Route path="/data-entry"><DataEntry /></Route>
      <Route path="/algorithm"><AlgorithmSelect /></Route>
      <Route path="/sort"><Sort /></Route>
      <Route path="*"><Redirect to="/" /></Route>
    </Switch>
  </HashRouter>;

export default Stages;
import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AlgorithmSelect from './algorithm-select';
import DataEntry from './data-entry';
import Sort from './sort';

const Stages: FC = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/data-entry" /></Route>
      <Route path="/data-entry"><DataEntry /></Route>
      <Route path="/algorithm"><AlgorithmSelect /></Route>
      <Route path="/sort"><Sort /></Route>
      <Route path="*"><Redirect to="/" /></Route>
    </Switch>
  </BrowserRouter>;

export default Stages;
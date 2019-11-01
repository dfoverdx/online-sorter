import React, { FC } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import AlgorithmSelect from './algorithm-select';
import Home from './home';
import ItemEntry from './item-entry';
import Sort from './sort';

const Stages: FC = () =>
  <HashRouter>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/home"><Home /></Route>
      <Route path="/item-entry"><ItemEntry /></Route>
      <Route path="/algorithm"><AlgorithmSelect /></Route>
      <Route path="/sort"><Sort /></Route>
      <Route path="*"><Redirect to="/item-entry" /></Route>
    </Switch>
  </HashRouter>;

export default Stages;
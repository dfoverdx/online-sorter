import React, { PureComponent } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Context from '../context';
import AlgorithmSelect from './algorithm-select';
import DataEntry from './data-entry';

interface Props { }

export default class Stages extends PureComponent<Props> {
  context!: CT;

  render() {
    return <HashRouter>
      <Switch>
        <Route exact path="/"><Redirect to="/data-entry" /></Route>
        <Route path="/data-entry"><DataEntry /></Route>
        <Route path="/algorithm"><AlgorithmSelect /></Route>
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
    </HashRouter>;
  }

  static contextType = Context;
}
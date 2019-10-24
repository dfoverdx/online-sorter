import React, { PureComponent } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Context from '../context';
import AlgorithmSelect from './algorithm-select';
import DataEntry from './data-entry';

interface Props { }

export default class Stages extends PureComponent<Props> {
  context!: CT;

  render() {
    return <HashRouter>
      <Switch>
        <Route path="/algorithm"><AlgorithmSelect /></Route>
        <Route path="/"><DataEntry /></Route>
      </Switch>
    </HashRouter>;
  }

  static contextType = Context;
}
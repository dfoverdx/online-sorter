import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import Context from '../context';
import RedirectIfNoItems from './redirect-if-no-items';

export default class Sort extends PureComponent {
  context!: CT;

  render() {
    if (!this.context.algorithm) {
      return <Redirect to="/algorithm" />;
    }

    return <RedirectIfNoItems>

    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
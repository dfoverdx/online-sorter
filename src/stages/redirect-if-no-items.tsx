import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context';

export default class RedirectIfNoItems extends PureComponent {
  context!: CT;

  render() {
    if (this.context.items.length < 3) {
      return <Redirect to="/data-entry" />
    }

    return <>{this.props.children}</>;
  }

  static contextType = Context;
}
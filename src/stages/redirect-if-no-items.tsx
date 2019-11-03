import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context';

interface Props {
  redirectIfNoAlg?: boolean;
}

export default class RedirectIfNoItems extends PureComponent<Props> {
  context!: CT;

  render() {
    if (this.context.items.length < 3) {
      return <Redirect to="/data-entry" />;
    }

    if (this.props.redirectIfNoAlg && !this.context.algorithm) {
      return <Redirect to="/algorithm" />;
    }

    return <>{this.props.children}</>;
  }

  static contextType = Context;
}
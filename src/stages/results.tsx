import React, { ContextType, PureComponent } from 'react';
import Context from '../context';

export default class Results extends PureComponent {
  context!: ContextType<typeof Context>;

  render() {
    return <pre>
      {this.context.items.map(i => i.text).join('\n')}
    </pre>;
  }

  static contextType = Context;
}
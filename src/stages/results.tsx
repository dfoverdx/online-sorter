import React, { ContextType, PureComponent } from 'react';
import BackToItemEntry from '../components/back-to-item-entry';
import Context from '../context';
import RedirectIfNoItems from './redirect-if-no-items';

export default class Results extends PureComponent {
  context!: ContextType<typeof Context>;

  render() {
    return <RedirectIfNoItems>
      <h1 className="display-1">Results</h1>
      <pre>
        {this.context.items.map(i => i.text).join('\n')}
      </pre>
      <BackToItemEntry />
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
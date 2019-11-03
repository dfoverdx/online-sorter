import React, { ContextType, PureComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import BackToItemEntry from '../components/back-to-item-entry';
import Context from '../context';
import RedirectIfNoItems from './redirect-if-no-items';

export default class Results extends PureComponent {
  context!: ContextType<typeof Context>;

  render() {
    return <RedirectIfNoItems redirectIfNoAlg>
      <h1 className="display-1">Results</h1>
      <ListGroup>
        {this.context.items.map((item, i) =>
          <ListGroupItem key={item.text}>{item.text}</ListGroupItem>)
        }
      </ListGroup>
      <BackToItemEntry className="mt-3" />
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
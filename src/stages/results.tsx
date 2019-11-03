import React, { ContextType, PureComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';
import BackToItemEntry from '../components/back-to-item-entry';
import Context from '../context';
import RedirectIfNoItems from './redirect-if-no-items';

export default class Results extends PureComponent {
  context!: ContextType<typeof Context>;

  render() {
    const maxWeight = this.context.maxWeight;
    let curWeight = 0;

    return <RedirectIfNoItems redirectIfNoAlg>
      <h1 className="display-1">Results</h1>
      <ListGroup>
        {this.context.items.map((item) => {
          curWeight += item.weight || 1;
          return (
            <ListGroupItem key={item.text} className={classnames(curWeight <= maxWeight && 'bg-success text-white')}>
              {item.text}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <BackToItemEntry className="mt-3" />
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
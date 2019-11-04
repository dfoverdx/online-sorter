import React, { ContextType, PureComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';
import BackToItemEntry from '../components/back-to-item-entry';
import Context, { Algorithm } from '../context';
import RedirectIfNoItems from './redirect-if-no-items';

export default class Results extends PureComponent {
  context!: ContextType<typeof Context>;

  render() {
    const maxWeight = this.context.maxWeight;
    let curWeight = 0;

    return <RedirectIfNoItems redirectIfNoAlg>
      <h1 className="display-1">Results</h1>
      <ListGroup className="mb-2">
        {this.context.items.map((item) => {
          curWeight += item.weight || 1;
          return (
            <ListGroupItem key={item.text} className={classnames(curWeight <= maxWeight && 'bg-success text-white')}>
              {item.text}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      {
        this.context.maxWeight !== false && this.context.algorithm !== Algorithm.binaryInsertion &&
        <p>
          <b>Note:</b> Becuase a maximum number of items was specified, only items marked in green are guaranteed to be
          in order.
        </p>
      }
      <BackToItemEntry className="mt-1" />
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
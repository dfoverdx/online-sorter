import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactifyMarkdown from 'reactify-markdown';
import { Button, Card, CardBody, CardDeck, CardHeader, CardTitle } from 'reactstrap';
import Context from '../context';
import RedirectIfNoItems from './redirect-if-no-items';

export default class AlgorithmSelect extends PureComponent {
  context!: CT;

  render() {
    return <RedirectIfNoItems>
      <ReactifyMarkdown>{`
        Select Algorithm
        ================

        Here you select which method we'll use for sorting your list.  Ultimately, all three methods will produce the
        same results.  The difference is only in how long the "quiz" will be.
      `}</ReactifyMarkdown>
      <CardDeck>
        <Card color="light">
          <CardHeader><CardTitle className="mb-0"><h4 className="mb-0">Quicksort</h4></CardTitle></CardHeader>
          <CardBody>
            Pros:
            <ul>
              <li>Fewer context switches / questions are faster to answer</li>
              <li>Shows progress bar</li>
            </ul>
            Cons:
            <ul>
              <li>Slightly more questions than Binary Search Tree</li>
              <li><b>VERY</b> long quiz if list is already mostly sorted</li>
            </ul>

            <div className="text-center">
              <Link to="/sort/quicksort">
                <Button color="primary">Select</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </CardDeck>
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
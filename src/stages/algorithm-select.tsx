import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactifyMarkdown from 'reactify-markdown';
import { Button, Card, CardBody, CardDeck, CardHeader, CardTitle } from 'reactstrap';
import Context, { Algorithm } from '../context';
import './algorithm-select.scss';
import RedirectIfNoItems from './redirect-if-no-items';

export default class AlgorithmSelect extends PureComponent {
  context!: CT;

  onSelection(algorithm: Algorithm) {
    this.context.setAlgorithm(algorithm);
  }

  render() {
    return <RedirectIfNoItems>
      <ReactifyMarkdown>{`
        Select Algorithm
        ================

        Here you select which method we'll use for sorting your list.  Ultimately, all three methods will produce the
        same results.  The difference is only in how long the "quiz" will be.
      `}</ReactifyMarkdown>
      <CardDeck className="my-auto">
        <Card color="light">
          <CardHeader><CardTitle><h4>Quicksort</h4></CardTitle></CardHeader>
          <CardBody className="d-flex flex-column">
            Pros:
            <ul>
              <li>Fewer context switches / questions are faster to answer</li>
              {/* <li>Can stop early if you specify a maximum number of items</li> */}
            </ul>
            Cons:
            <ul>
              <li>Slightly more questions than Binary Search Tree</li>
              <li><b>Longest possible</b> quiz if list is already mostly sorted</li>
            </ul>

            <div className="text-center mt-auto">
              <Link to="/sort/quicksort">
                <Button color="primary" onClick={this.onSelection.bind(this, Algorithm.quicksort)}>Select</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
        <div className="w-100 d-lg-none" />
        <Card color="light">
          <CardHeader><CardTitle><h4>Binary Insertion Sort</h4></CardTitle></CardHeader>
          <CardBody className="d-flex flex-column">
            Pros:
            <ul>
              <li>Fewest questions for well-shuffled lists</li>
            </ul>
            Cons:
            <ul>
              <li>More context switches / questions are a little slower to answer</li>
            </ul>

            <div className="text-center mt-auto">
              <Link to="/sort/binary-insertion-sort">
                <Button color="primary" onClick={this.onSelection.bind(this, Algorithm.binaryInsertion)}>
                  Select
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
        <div className="w-100 d-xl-none" />
        <div className="w-100 d-lg-none" />
        <Card color="light">
          <CardHeader><CardTitle><h4>Insertion Sort</h4></CardTitle></CardHeader>
          <CardBody className="d-flex flex-column">
            Pros:
            <ul>
              <li>Fewest questions by far for mostly-ordered lists</li>
              <li>Fewer context-switches than Binary Search Tree / questions are quicker to answer</li>
            </ul>
            Cons:
            <ul>
              <li>More context switches than Quicksort / questions are slower to answer</li>
              <li>
                <b>Significantly</b> more questions than Binary Search Tree or Quicksort if list is not already mostly
                ordered
              </li>
            </ul>

            <div className="text-center mt-auto">
              <Link to="/sort/insertion-sort">
                <Button color="primary" onClick={this.onSelection.bind(this, Algorithm.insertionSort)}>Select</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
        <div className="w-50 d-none d-lg-flex d-xl-none" />
      </CardDeck>

      <Link to="/data-entry">
        <Button className="mb-3">&lt; Back to Item Entry</Button>
      </Link>

      <ReactifyMarkdown>{`
        #### Information ####

        If your list is more or less ordered already, such as when you sort it and then go back to add a couple items,
        select Insertion Sort.  If the list is already completely sorted, [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
        will have the absolute minimum number of questions (number of items - 1).

        If your list is not sorted, choose either Quicksort or Binary Insertion Sort.  Both sorting methods take about
        the same amount of time.  If you're good at switching contexts in your head, choose [Binary Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort#Variants),
        otherwise, choose [Quicksort](https://en.wikipedia.org/wiki/Quicksort).
      `}</ReactifyMarkdown>
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
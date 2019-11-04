import React, { FC, PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ReactifyMarkdown from 'reactify-markdown';
import { Card, CardBody, CardDeck, CardHeader, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import BackToItemEntry from '../components/back-to-item-entry';
import Context, { Algorithm } from '../context';
import './algorithm-select.scss';
import RedirectIfNoItems from './redirect-if-no-items';

export default class AlgorithmSelect extends PureComponent {
  context!: CT;

  onSelection(algorithm: Algorithm) {
    this.context.setAlgorithm(algorithm);
  }

  render() {
    const AlgCard: FC<{
      algorithm: Algorithm,
      url: string,
      name: string,
      pros: ReactNode[],
      cons: ReactNode[],
      color?: string,
      inverse?: boolean,
    }> =
      ({ algorithm: alg, url, name, pros, cons, color, inverse }) =>
        <Card color={color || 'light'} inverse={inverse}>
          <CardHeader><CardTitle><h4>{name}</h4></CardTitle></CardHeader>
          <CardBody className="d-flex flex-column">
            Pros:
            <ul>
              {pros.map((text, i) => <li key={i}>{text}</li>)}
            </ul>
            Cons:
            <ul>
              {cons.map((text, i) => <li key={i}>{text}</li>)}
            </ul>
            <div className="text-center mt-auto">
              <Link to={`/sort/${url}`} onClick={this.onSelection.bind(this, alg)} className="btn btn-primary btn-lg">
                Select <FontAwesomeIcon icon={faAngleRight} size="lg" />
              </Link>
            </div>
          </CardBody>
        </Card>;

    return <RedirectIfNoItems>
      <ReactifyMarkdown>{`
        Select Algorithm
        ================

        Here you select which method we'll use for sorting your list.  Ultimately, all three methods will produce the
        same results.  The difference is only in how long the "quiz" will be.
      `}</ReactifyMarkdown>
      <CardDeck className="my-auto">
        <AlgCard
          algorithm={Algorithm.quicksort}
          url="quicksort"
          name="Quicksort"
          pros={[
            'Fewer context switches--questions are faster to answer',
            'Can stop early if you specify a maximum number of items',
          ]}
          cons={[
            'Slightly more questions than Binary Insertion Sort',
            <><b>Longest possible</b> quiz if list is already mostly sorted</>,
          ]}
         />
        <div className="w-100 d-lg-none" />
        <AlgCard
          algorithm={Algorithm.binaryInsertion}
          url="binary-insertion-sort"
          name="Binary Insertion Sort"
          pros={[
            'Fewest questions for well-shuffled lists',
            'Roughly the same number of questions no matter how sorted or unsorted the list is',
          ]}
          cons={[
            'More context switches--questions are a little slower to answer',
            <><b>Cannot</b> stop early if you specify a maximum number of items</>,
          ]}
         />
        <div className="w-100 d-xl-none" />
        <div className="w-100 d-lg-none" />
        <AlgCard
          algorithm={Algorithm.insertionSort}
          url="insertion-sort"
          name="Insertion Sort"
          color="secondary"
          inverse
          pros={[
            <><b>Fewest questions by far</b> for mostly-ordered lists</>,
            'Fewer context switches than Binary Insertion Sort--questions are quicker to answer',
            // 'Has fewer questions if you specify a maximum number of items',
          ]}
          cons={[
            'More context switches than Quicksort--questions are slower to answer',
            <>
              <b>Significantly</b> more questions than Binary Insertion Sort or Quicksort if list is not already mostly
              ordered
            </>,
            <><b>Does not</b> currently reduce the number of questions if you specify a maximum number of items</>
          ]}
         />
        <div className="w-50 d-none d-lg-flex d-xl-none" />
      </CardDeck>

      <BackToItemEntry className="mb-3" />

      <ReactifyMarkdown>{`
        #### Information ####

        If your list is more or less ordered already, such as when you sort it and then go back to add a couple items,
        select *Insertion Sort*.  If the list is already completely sorted, [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
        will have the absolute minimum number of questions (\`number of items - 1\`).

        If your list is not sorted, choose either *Quicksort* or *Binary Insertion Sort*.  Both sorting methods take
        about the same amount of time.  If you're good at switching contexts in your head, choose
        [Binary Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort#Variants), otherwise, choose [Quicksort](https://en.wikipedia.org/wiki/Quicksort).

        Your list will be reordered as you answer questions, so if you need to return to item entry in the middle of the
        quiz, you will not lose your progress.
      `}</ReactifyMarkdown>
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
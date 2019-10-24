import React, { PureComponent } from 'react';
import ReactifyMarkdown from 'reactify-markdown';
import { CardDeck } from 'reactstrap';
import Context from '../context';

export default class AlgorithmSelect extends PureComponent {
  context!: CT;

  render() {
    return <>
      <ReactifyMarkdown>{`
        Select Algorithm
        ================
      `}</ReactifyMarkdown>
      <CardDeck>

      </CardDeck>
    </>;
  }

  static contextType = Context;
}
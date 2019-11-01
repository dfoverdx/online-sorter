import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import BackToItemEntry from '../components/back-to-item-entry';
import OptionPromptButtons from '../components/option-prompt-buttons';
import Context, { Algorithm } from '../context';
import BinaryInsertionSort from '../sorters/binary-insertion-sort';
import InsertionSort from '../sorters/insertion-sort';
import Quicksort from '../sorters/quicksort';
import Sorter from '../sorters/sorter';
import { Prompt } from '../types';
import RedirectIfNoItems from './redirect-if-no-items';

interface State {
  prompt?: Prompt;
  finished: boolean;
}

export default class Sort extends PureComponent<{}, State> {
  context!: CT;

  state: State = {
    finished: false,
  };

  sorter!: Sorter<any>;

  async componentDidMount() {
    const {
      algorithm,
      items
    } = this.context;

    switch (algorithm) {
      case Algorithm.quicksort:
        this.sorter = new Quicksort(items, this.triggerPromptUser.bind(this));
        break;

      case Algorithm.binaryInsertion:
        this.sorter = new BinaryInsertionSort(items, this.triggerPromptUser.bind(this));
        break;

      case Algorithm.insertionSort:
        this.sorter = new InsertionSort(items, this.triggerPromptUser.bind(this));
        break;
    }

    if (this.sorter) {
      this.sorter.run().then(() => this.setState({ finished: true, prompt: undefined }));
    }
  }

  private triggerPromptUser(prompt: Prompt) {
    this.setState({ prompt });
  }

  render() {
    if (!this.context.algorithm) {
      return <Redirect to="/algorithm" />;
    }

    if (this.state.finished) {
      return <Redirect to="/results" />;
    }

    if (!this.state.prompt) {
      return <div />;
    }

    return <RedirectIfNoItems>
      <div className="d-flex flex-column">
        <BackToItemEntry className="align-self-start" />
        <OptionPromptButtons prompt={this.state.prompt} />
      </div>
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
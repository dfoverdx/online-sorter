import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import AlgorithmBase from '../algorithms/base';
import InsertionSort from '../algorithms/insertion-sort';
import Quicksort from '../algorithms/quicksort';
import BackToItemEntry from '../components/back-to-item-entry';
import OptionPromptButtons from '../components/option-prompt-buttons';
import Context, { Algorithm } from '../context';
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

  sorter!: AlgorithmBase;

  async componentDidMount() {
    const {
      algorithm,
      items
    } = this.context;

    switch (algorithm) {
      case Algorithm.quicksort:
        this.sorter = new Quicksort(items, this.triggerPromptUser.bind(this));
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
      <OptionPromptButtons prompt={this.state.prompt} />
      <BackToItemEntry />
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
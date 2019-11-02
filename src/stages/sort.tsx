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
  promptCount: number;
}

export default class Sort extends PureComponent<{}, State> {
  context!: CT;

  state: State = {
    finished: false,
    promptCount: 0
  };

  sorter!: Sorter<any>;
  algorithmName!: string;

  async componentDidMount() {
    const {
      algorithm,
      items
    } = this.context;

    switch (algorithm) {
      case Algorithm.quicksort:
        this.sorter = new Quicksort(items, this.triggerPromptUser.bind(this));
        this.algorithmName = 'Quicksort';
        break;

      case Algorithm.binaryInsertion:
        this.sorter = new BinaryInsertionSort(items, this.triggerPromptUser.bind(this));
        this.algorithmName = 'Binary Insertion Sort';
        break;

      case Algorithm.insertionSort:
        this.sorter = new InsertionSort(items, this.triggerPromptUser.bind(this));
        this.algorithmName = 'Insertion Sort';
        break;
    }

    if (this.sorter) {
      this.sorter.run().then(() => this.setState({ finished: true, prompt: undefined }));
    }
  }

  private triggerPromptUser(prompt: Prompt) {
    this.setState({
      prompt,
      promptCount: this.state.promptCount + 1,
    });
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

    const i3 = this.state.prompt.item3;

    return <RedirectIfNoItems>
      <h1>Sort</h1>
      <h4>{this.algorithmName}</h4>
      <div className="d-flex flex-column">
        <h2 className="text-center mb-3 mt-4">
          {
            i3 ?
              <>Which item is the <b><i>second</i></b> most important?</> :
              'Which item is more important?'
          }
        </h2>
        <h4>Question #{this.state.promptCount}</h4>
        <OptionPromptButtons prompt={this.state.prompt} />
        {
          i3 && <span className="text-info">
            This question has no bearing on the final result, but answering it correctly can reduce the length of the
            quiz by up to 15% or more on your car insurance.  For real, though, it'll cut out a good 5-15% of the
            questions.
          </span>
        }
        <BackToItemEntry className="align-self-start mt-3" onClick={() => this.sorter.cancel()} />
      </div>
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
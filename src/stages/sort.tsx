import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import BackToItemEntry from '../components/back-to-item-entry';
import OptionPromptButtons from '../components/option-prompt-buttons';
import ProgressBar from '../components/progress-bar';
import Context, { Algorithm } from '../context';
import BinaryInsertionSort from '../sorters/binary-insertion-sort';
import InsertionSort from '../sorters/insertion-sort';
import Quicksort from '../sorters/quicksort';
import Sorter, { Progress } from '../sorters/sorter';
import { Item, Prompt } from '../types';
import RedirectIfNoItems from './redirect-if-no-items';

interface State {
  prompt?: Prompt;
  finished: boolean;
  promptCount: number;
  progress: Progress<Item | number>;
  lastLeftItem?: Item;
}

export default class Sort extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.triggerPromptUser = this.triggerPromptUser.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  context!: CT;

  state: State = {
    finished: false,
    promptCount: 0,
    progress: 0,
  };

  sorter!: Sorter<any>;
  algorithmName!: string;
  readonly bodyElement = document.getElementsByTagName('body')[0];

  async componentDidMount() {
    const {
      algorithm,
      items
    } = this.context;

    switch (algorithm) {
      case Algorithm.quicksort:
        this.sorter = new Quicksort(items, this.triggerPromptUser, this.updateProgress);
        this.algorithmName = 'Quicksort';
        break;

      case Algorithm.binaryInsertion:
        this.sorter = new BinaryInsertionSort(items, this.triggerPromptUser, this.updateProgress);
        this.algorithmName = 'Binary Insertion Sort';
        break;

      case Algorithm.insertionSort:
        this.sorter = new InsertionSort(items, this.triggerPromptUser, this.updateProgress);
        this.algorithmName = 'Insertion Sort';
        break;
    }

    if (this.sorter) {
      this.sorter.run().then(() => this.setState({ finished: true, prompt: undefined }));
    }

    window.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  }

  private flash() {
    this.bodyElement.classList.remove('flash');
    setImmediate(() => this.bodyElement.classList.add('flash'));
  }

  private updateProgress(progress: Progress<number | Item>): void {
    if (Array.isArray(progress)) {
      this.setState({ progress: progress.slice() });
    } else {
      this.setState({ progress });
    }
  }

  private triggerPromptUser(prompt: Prompt) {
    if (this.state.lastLeftItem && this.state.lastLeftItem !== prompt.item1) {
      this.flash();
    }

    this.setState({
      lastLeftItem: prompt.item3 ? undefined : prompt.item1,
      prompt,
      promptCount: this.state.promptCount + 1,
    });

    this.context.updateItems(this.context.items);
  }

  private onKeyPress(e: KeyboardEvent) {
    const prompt = this.state.prompt;
    if (!prompt) {
      return;
    }

    switch (e.key) {
      case 'a':
        prompt.resolve(prompt.item1);
        break;

      case 'h':
        if (!prompt.item3) {
          break;
        }

        prompt.resolve(prompt.item2);
        break;

      case 'l':
        if (prompt.item3) {
          prompt.resolve(prompt.item3);
          break;
        }

        prompt.resolve(prompt.item2);
        break;
    }
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
      <h1 className="display-1">Sort</h1>
      <h4>{this.algorithmName}</h4>
      <div className="d-flex flex-column">
        <h2 className="text-center mb-3 mt-4">
          {
            i3 ?
              <>Which item is the <b className="text-primary"><i>second</i></b> most important?</> :
              this.context.question || <>Which item is <span className="text-primary">more important</span>?</>
          }
        </h2>
        <h4>Question #{this.state.promptCount}</h4>
        <OptionPromptButtons prompt={this.state.prompt} />
        {
          this.sorter instanceof Quicksort ?
            <ProgressBar progress={this.state.progress as Progress<Item>} /> :
            <ProgressBar progress={this.state.progress as number} max={this.context.items.length} />
        }
        {
          i3 && <span className="text-info mt-2">
            This question has no bearing on the final result, but answering it correctly can reduce the length of the
            quiz by up to 15% or more on your car insurance.  For real, though, it'll cut out a good 5-15% of the
            questions.
          </span>
        }
        <p className="mt-2 mb-1 d-none d-sm-inline">
          <b>Tip:</b>{' '}
          {
            i3 ?
              <>
                You can press <kbd>a</kbd> to select the left item, <kbd>h</kbd> to select the middle item, and{' '}
                <kbd>l</kbd> to select the right item.
              </> :
              <>
                You can press <kbd>a</kbd> to select the left item and <kbd>l</kbd> to select the right item.
              </>
          }
        </p>
        <p><b>Tip:</b> The screen will flash <span className="text-success">green</span> when the left item changes.</p>
        <BackToItemEntry className="align-self-start mt-2" onClick={() => this.sorter.cancel()} />
      </div>
    </RedirectIfNoItems>;
  }

  static contextType = Context;
}
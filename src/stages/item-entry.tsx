import React, { ChangeEvent, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactifyMarkdown from 'reactify-markdown';
import { Button, Card, CardBody, CardDeck, CardHeader, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ItemInput from '../components/item-input';
import MaxItems from '../components/max-items';
import QuestionInput from '../components/question-input';
import Context from '../context';
import './item-entry.scss';

interface State {
  hasItems: boolean;
  maxItems: number;
}

export default class DataEntry extends PureComponent<{}, State> {
  context!: CT;
  state = {
    hasItems: false,
    maxItems: 0,
  };

  componentDidMount() {
    this.context.setAlgorithm(null);
    this.setState({
      hasItems: this.context.items.length > 2,
      maxItems: this.getMaxItems(),
    });
  }

  onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      hasItems: e.target.value.split('\n').filter(l => l.trim().length).length > 2,
    });
  }

  onInputSaved() {
    // for some reason when blur calls ItemInput.updateItems(), the context doesn't update immediately
    setImmediate(() => {
      const maxItems = this.getMaxItems(),
        shouldChangeVal =
          this.context.maxItems !== false && this.state.maxItems <= this.context.maxItems ||
          maxItems < this.state.maxItems;

      if (shouldChangeVal) {
        this.setState({ maxItems });
        this.context.setMaxItems(maxItems);
      }
    });
  }

  onQuestionChange(e: ChangeEvent<HTMLInputElement>) {
    this.context.setQuestion(e.target.value);
  }

  onMaxItemsChange(val: number | false) {
    this.context.setMaxItems(val);
  }

  private getMaxItems(): number {
    return this.context.items.reduce((prev, item) => prev + (item.weight || 1), 0);
  }

  render() {
    return <>
      <h1 className="display-1">Item Entry</h1>
      <ReactifyMarkdown>{`
        Enter the items you wish to sort.  Each line represents one item.

        If an item is *required*, prepend a \`*\` to it.  If a line represents multiple items (i.e. has a *weight*)
        append \`| <weight>\` to it, where \`<weight>\` is the number of items the line represents.  See the examples
        below for more details.

        Your entries will be saved automatically.
      `}</ReactifyMarkdown>
      <ItemInput onChange={this.onInputChange.bind(this)} onSaved={this.onInputSaved.bind(this)} />
      <QuestionInput className="mt-4" onChange={this.onQuestionChange.bind(this)} value={this.context.question} />
      <div className="d-flex flex-row justify-content-between my-2">
        <MaxItems value={this.context.maxItems} onChange={this.onMaxItemsChange.bind(this)}
          maxItems={this.state.maxItems} />
        <Link to="/algorithm" className="my-auto">
          <Button color="primary" disabled={!this.state.hasItems} className="ml-auto" size="lg">
            Sort Entries <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </Button>
        </Link>
      </div>
      <CardDeck className="mt-1">
        <Card color="light" id="examples">
          <CardHeader><CardTitle><h3>Examples</h3></CardTitle></CardHeader>
          <CardBody>
            <ReactifyMarkdown>{`
              **Single entries**
              \`\`\`
              Anna
              Bob
              \`\`\`

              **Required single entries**
              \`\`\`
              * Candice
              * Derek
              \`\`\`

              **Weighted entries**
              \`\`\`
              The Smiths | 4
              Edna + 1 | 2
              \`\`\`

              **Required weighted entries**
              \`\`\`
              * The Jones | 3
              * Fred and Gwen + 1 | 3
              \`\`\`
            `}</ReactifyMarkdown>
          </CardBody>
        </Card>
        <div className="w-100 d-md-none" />
        <Card color="light">
          <CardHeader><CardTitle><h3>Tips</h3></CardTitle></CardHeader>
          <CardBody>
            <ReactifyMarkdown>{`
              Entries marked required will not require any questions on the quiz.  This will *dramatically* reduce the
              length of the quiz.

              Required items are not ordered amongst other required items.

              If you have already sorted your list and add new items, don't add them to the start; add them "near"
              where they need to be or to the end of the list.  Then select *Insertion Sort* on the next step.

              If you make a mistake during the sorting quiz, finish the quiz and then do the quiz again with the
              *Insertion Sort* method.  This quiz will be (relatively) very short.
            `}</ReactifyMarkdown>
          </CardBody>
        </Card>
      </CardDeck>
    </>;
  }

  static contextType = Context;
}
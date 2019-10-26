import React, { ChangeEvent, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactifyMarkdown from 'reactify-markdown';
import { Button, Card, CardBody, CardDeck } from 'reactstrap';
import ItemInput from '../components/item-input';
import Context from '../context';

interface State {
  hasItems: boolean;
}

export default class DataEntry extends PureComponent<{}, State> {
  context!: CT;
  state = { hasItems: false };

  componentDidMount() {
    this.setState({ hasItems: this.context.items.length > 2 });
  }

  onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ hasItems: e.target.value.split('\n').filter(l => l.trim().length).length > 2 });
  }

  render() {
    return <>
      <ReactifyMarkdown>{`
        Item Entry
        ==========

        Enter the items you wish to sort.  Each line represents one item.

        If an item is *required*, prepend a \`*\` to it.  If a line represents multiple items (i.e. has a *weight*) append
        \`| <weight>\` to it, where \`<weight>\` is the number of items the line represents.  See the examples below for
        more details.

        Your entries will be saved automatically.
      `}</ReactifyMarkdown>
      <ItemInput onChange={this.onInputChange.bind(this)} />
      <div className="d-flex flex-row justify-content-end">
        <Link to="/algorithm">
          <Button color="primary" disabled={!this.state.hasItems} className="ml-auto">
            Sort Entries
          </Button>
        </Link>
      </div>
      <CardDeck className="mt-1">
        <Card color="light">
          <CardBody>
            <ReactifyMarkdown>{`
              ### Examples ###

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
        <Card color="light">
          <CardBody>
            <ReactifyMarkdown>{`
              ### Tips ###

              * If you have already sorted your list and add new items, add them to the end, and use Insertion Sort.
            `}</ReactifyMarkdown>
          </CardBody>
        </Card>
      </CardDeck>
    </>;
  }

  static contextType = Context;
}
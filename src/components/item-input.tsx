import React, { ChangeEvent, PureComponent } from 'react';
import Context from '../context';
import { Item } from '../item';

const itemRegex = /^\s*(\*)?\s*(.+?)\s*(?:\|\s*(\d+))?\s*$/;

interface Props {
  onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
}

interface State {
  text: string;
  saved: boolean;
}

export default class ItemInput extends PureComponent<Props, State> {
  private inputRef = React.createRef<HTMLTextAreaElement>();
  context!: React.ContextType<typeof Context>;
  state: State = {
    text: '',
    saved: false
  };

  private saveTimeout = -1;

  componentDidMount() {
    this.setState({ text: this.stringifyItems() });
    const input = this.inputRef.current!,
      offset = input.offsetHeight - input.clientHeight;
    setImmediate(() => input.style.height = input.scrollHeight + offset + 'px');
  }

  private parseItems(): Item[] {
    if (!this.inputRef.current) {
      return [];
    }

    return this.inputRef.current.value
      .split('\n')
      .filter(i => i.trim().length)
      .map(line => {
        const [_, required, text, weight] = itemRegex.exec(line)!;
        return {
          text,
          weight: !weight ? undefined : parseInt(weight),
          required: required !== undefined ? !!required : undefined
        };
      });
  }

  private updateItems(): void {
    clearTimeout(this.saveTimeout);
    this.context.updateItems(this.parseItems());
    this.setState({ saved: true });
  }

  private onChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    clearTimeout(this.saveTimeout);
    this.saveTimeout = window.setTimeout(() => this.updateItems(), 3000);

    const input = event.target;
    this.setState({
      text: input.value,
      saved: false
    });

    const offset = input.offsetHeight - input.clientHeight;
    input.style.height = 'auto'; // allow resizing to be smaller
    input.style.height = input.scrollHeight + offset + 'px';

    this.props.onChange && this.props.onChange(event);
  }

  private stringifyItems(): string {
    if (!this.context || !this.context.items) {
      return '';
    }

    return this.context.items
      .map(i => {
        let text = i.required ? '* ' : '';
        text += i.text;
        if (i.weight) {
          text += ' | ' + i.weight;
        }

        return text;
      }).join('\n');
  }

  render() {
    return <>
      <textarea value={this.state.text} onBlur={this.updateItems.bind(this)} ref={this.inputRef}
        onChange={this.onChange.bind(this)} className="form-control" style={{ minHeight: '25vh', resize: 'none' }} />
      <div className="mt-1" style={{ height: 0 }}>{this.state.saved && `Items saved`}</div>
    </>;
  }

  static contextType = Context;
}
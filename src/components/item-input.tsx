import React, { ChangeEvent, PureComponent } from 'react';
import Context from '../context';
import { Item } from '../types';

const itemRegex = /^\s*(\*)?\s*(.+?)\s*(?:\|\s*(\d+))?\s*$/;

interface Props {
  onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
}

interface State {
  text: string;
  saved: boolean;
  error: string | null;
  autosize: boolean;
  canResize: boolean;
}

declare global {
  interface Window {
    ResizeObserver: ResizeObserver;
  }
}

export default class ItemInput extends PureComponent<Props, State> {
  private inputRef = React.createRef<HTMLTextAreaElement>();
  context!: React.ContextType<typeof Context>;
  state: State = {
    text: '',
    saved: false,
    error: null,
    autosize: true,
    canResize: true,
  };

  private saveTimeout = -1;

  componentDidMount() {
    this.setState({ text: this.stringifyItems() });
    this.validate();
    const input = this.inputRef.current!,
      offset = input.offsetHeight - input.clientHeight;
    setImmediate(() => input.style.height = input.scrollHeight + offset + 'px');

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        this.setState({ autosize: false });
        observer.disconnect();
      });

      observer.observe(input);
    } else {
      this.setState({ canResize: false });
    }
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
    const items = this.validate();
    if (items) {
      this.context.updateItems(items);
      this.setState({ saved: true, error: null });
    }
  }

  private validate(): Item[] | null {
    const items = this.parseItems();
    for (let i = 0; i < items.length - 1; i++) {
      for (let j = i + 1; j < items.length; j++) {
        if (items[i].text === items[j].text) {
          this.setState({
            saved: false,
            error: `Duplicate item: ${items[i].text}`,
          });
          return null;
        }
      }
    }

    return items;
  }

  private onChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    clearTimeout(this.saveTimeout);
    const input = event.target,
      items = this.validate(),
      nextState: Partial<State> = {
        text: input.value,
      };

    if (items) {
      this.saveTimeout = window.setTimeout(() => this.updateItems(), 3000);
      nextState.saved = false;
      nextState.error = null;
    }

    this.setState(nextState as State);

    if (this.state.autosize) {
      const offset = input.offsetHeight - input.clientHeight;
      input.style.height = 'auto'; // allow resizing to be smaller
      input.style.height = input.scrollHeight + offset + 'px';
    }

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
    const {
        saved,
        error,
        canResize,
      } = this.state,
      messageStyle = {
        height: 0,
        color:
          saved ? 'green' :
          error ? 'red' :
          'inherit'
      };

    return <>
      <textarea value={this.state.text} onBlur={this.updateItems.bind(this)} ref={this.inputRef}
        onChange={this.onChange.bind(this)} className="form-control"
        style={{ minHeight: '25vh', resize: canResize ? 'vertical' : 'none' }} />
      <div className="pt-1" style={messageStyle}>{saved ? `Items saved` : error}</div>
    </>;
  }

  static contextType = Context;
}
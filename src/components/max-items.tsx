import React, { ChangeEvent, FocusEvent, PureComponent } from 'react';
import { Input } from 'reactstrap';
import Context from '../context';

interface Props {
  onChange(value: number | false): void;
  value: number | false;
  maxItems: number;
}

export default class MaxItems extends PureComponent<Props> {
  private onCBChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      this.props.onChange(this.props.maxItems);
    } else {
      this.props.onChange(false);
    }
  }

  private onNumChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onChange(parseInt(e.target.value));
  }

  private onNumBlur(e: FocusEvent<HTMLInputElement>) {
    let val = parseInt(e.target.value);
    if (isNaN(val) || val > this.props.maxItems) {
      val = this.props.maxItems;
    } else if (val < 1) {
      val = 1;
    }

    this.props.onChange(val);
  }

  render() {
    const {
      value,
      maxItems
    } = this.props;
    return <div>
      <h5>Maximum Items</h5>
      <div className="d-flex flex-row align-items-baseline">
        <Input type="checkbox" onChange={this.onCBChange.bind(this)} checked={value !== false}
          className="ml-0 mr-2 position-relative" />
        <Input type="number" onChange={this.onNumChange.bind(this)} value={value === false ? '' : value} min={1}
          max={maxItems} disabled={value === false} onBlur={this.onNumBlur.bind(this)} className="text-right" />
      </div>
    </div>;
  }

  static contextType = Context;
}
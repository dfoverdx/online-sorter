import React, { PureComponent } from 'react';
import { Progress } from 'reactstrap';
import { Item } from '../types';

interface ItemProps {
  progress: (Item | false)[];
}

interface NumberProps {
  progress: number;
  max: number;
}

function isNumberProps(props: ItemProps | NumberProps): props is NumberProps {
  return typeof props.progress === 'number';
}

export default class ProgressBar<Props extends ItemProps | NumberProps> extends PureComponent<Props> {
  render() {
    let value: number,
      props = this.props as unknown as ItemProps | NumberProps;

    if (isNumberProps(props)) {
      value = props.progress / props.max * 100;
    } else {
      value = props.progress.filter(p => p !== false).length / props.progress.length * 100;
    }

    return <Progress value={value} />;
  }
}
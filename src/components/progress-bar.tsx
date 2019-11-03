import React, { FC } from 'react';
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

const ProgressBar: FC<ItemProps | NumberProps> = (props) => {
  let value: number,
    max: number;

  if (isNumberProps(props)) {
    value = props.progress;
    max = props.max;
  } else {
    value = props.progress.filter(p => p !== false).length;
    max = props.progress.length;
  }

  return <Progress value={value} striped max={max} />;
}

export default ProgressBar;
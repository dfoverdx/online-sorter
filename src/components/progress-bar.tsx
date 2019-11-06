import React, { FC, Fragment as F } from 'react';
import { Progress, UncontrolledTooltip } from 'reactstrap';
import classnames from 'classnames';
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
    return <Progress value={value} striped max={max} />;
  } else {
    value = 100 / props.progress.length;
    return <Progress multi>
      {props.progress.map((v, i) => {
        const cl = classnames(!!i && 'border-left');

        return !v ?
          <Progress key={i} bar color="light" value={value} className={cl} /> :
          <F key={i}>
            <Progress bar striped value={value} className={cl}>
              <div id={`progress-${i}`} className="d-block h-100" />
            </Progress>
            <UncontrolledTooltip placement="top" target={`progress-${i}`}>
              {v.text}
            </UncontrolledTooltip>
          </F>
        })}
    </Progress>;
  }
}

export default ProgressBar;
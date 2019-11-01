import React, { FC } from 'react';
import { Button } from 'reactstrap';
import { Item, Prompt } from '../types';

const OptionPromptButtons: FC<{ prompt: Prompt }> = ({ prompt }) => {
    const {
      resolve,
      item1: opt1,
      item2: opt2,
      item3: opt3,
    } = prompt;
    const OptBtn: FC<{ opt: Item }> = ({ opt }) => <Button onClick={() => resolve(opt)}>{opt.text}</Button>
    return <>
      <OptBtn opt={opt1} />
      <OptBtn opt={opt2} />
      {opt3 && <OptBtn opt={opt3} />}
    </>;
}

export default OptionPromptButtons;
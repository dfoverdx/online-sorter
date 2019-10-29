import React, { FC } from 'react';
import { Button } from 'reactstrap';
import { Option, Prompt } from '../types';

const OptionPromptButtons: FC<{ prompt: Prompt }> = ({ prompt }) => {
    const {
      resolve,
      option1: opt1,
      option2: opt2,
      option3: opt3,
    } = prompt;
    const OptBtn: FC<{ opt: Option }> = ({ opt }) => <Button onClick={() => resolve(opt)}>{opt.name}</Button>
    return <>
      <OptBtn opt={opt1} />
      <OptBtn opt={opt2} />
      {opt3 && <OptBtn opt={opt3} />}
    </>;
}

export default OptionPromptButtons;
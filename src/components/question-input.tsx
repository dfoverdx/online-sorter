import React, { FC } from 'react';
import { Input } from 'reactstrap';

const QuestionInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) =>
  <>
    <h5 className={className}>
      Ask yourself a question to help compare items, such as <i>Who would you rather have at your wedding?</i>
    </h5>
    <Input {...props} type="text" placeholder="(Optional)" />
  </>;

export default QuestionInput;
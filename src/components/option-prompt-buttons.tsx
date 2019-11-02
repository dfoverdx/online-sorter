import React, { FC } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Item, Prompt } from '../types';

const OptionPromptButtons: FC<{ prompt: Prompt }> = ({ prompt }) => {
    const {
      resolve,
      item1: opt1,
      item2: opt2,
      item3: opt3,
    } = prompt;

    const OptBtn: FC<{ opt: Item }> = ({ opt }) =>
      <Col xs={12} md={opt3 ? 12 : 6} lg={opt3 ? 4 : 6} className="align-self-stretch mb-2">
        <Button onClick={() => resolve(opt)} className="w-100 border h-100" color="light"
            style={{minHeight: 100, fontSize: 40}}>
          {opt.text}
        </Button>
      </Col>;

    return <Row className="align-items-stretch">
      <OptBtn opt={opt1} />
      <OptBtn opt={opt2} />
      {opt3 && <OptBtn opt={opt3} />}
    </Row>;
}

export default OptionPromptButtons;
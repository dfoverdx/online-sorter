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
      <Button onClick={() => resolve(opt)} className="w-100 mb-2 border" style={{height: 100, fontSize: 40}} color="light">
        {opt.text}
      </Button>

    return <Row>
      <Col xs={12} md={opt3 ? 12 : 6} lg={opt3 ? 4 : 6}><OptBtn opt={opt1} /></Col>
      <Col xs={12} md={opt3 ? 12 : 6} lg={opt3 ? 4 : 6}><OptBtn opt={opt2} /></Col>
      {opt3 && <Col xs={12} lg={4}><OptBtn opt={opt3} /></Col>}
    </Row>;
}

export default OptionPromptButtons;
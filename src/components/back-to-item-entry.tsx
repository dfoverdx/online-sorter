import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const BackToItemEntry: FC = () =>
  <Link to="/data-entry">
    <Button className="mb-3">
      <FontAwesomeIcon icon={faAngleLeft} /> Back to Item Entry
    </Button>
  </Link>

export default BackToItemEntry;
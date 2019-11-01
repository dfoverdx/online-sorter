import React, { AnchorHTMLAttributes, FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

const BackToItemEntry: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) =>
  <Link to="/data-entry" className={classnames('btn btn-secondary', className)} {...props}>
    <FontAwesomeIcon icon={faAngleLeft} /> Back to Item Entry
  </Link>

export default BackToItemEntry;
import React, { FC } from 'react';
import { Navbar } from 'reactstrap';
import './footer.scss';

const Footer: FC = () =>
  <Navbar fixed="bottom" color="light" className="d-none d-md-flex footer-nav">
    <div className="container justify-content-between">
      <a href="https://github.com/dfoverdx/subjective-sorter">Source Code</a>
      <span><a href="https://dfdx.us/">Haley Hitch</a> © 2019</span>
    </div>
  </Navbar>;

export default Footer;
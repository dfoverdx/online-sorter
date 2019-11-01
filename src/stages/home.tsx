import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ReactFitText from '@kennethormandy/react-fittext';

const Home: FC = () =>
  <div className="d-flex flex-column w-100 h-100">
    <div className="w-100 text-center" style={{ marginTop: '20%', marginBottom: '20%' }}>
      <ReactFitText compressor={.745} minFontSize={65}>Subjective Sorter</ReactFitText>
    </div>
    <p>
      Sometimes it is helpful to order things from most important to least important.  For example, maybe you need to
      figure out who to invite to your wedding, and you can only invite so many people.  Or maybe you want to determine
      what your <a href="https://dfdx.us/core-values-quiz">core values</a> are.  Maybe you need to figure out who your
      favorite Backstreet Boy is, idk!
    </p>
    <p>
      The Subjective Sorter allows you to order your list of items given subjective criteria.  Input your data and the
      tool will generate a "quiz", presenting you with two options per question.  Choose which is the more important
      option, and the tool will handle the rest.
    </p>
    <Link to="/item-entry" className="align-self-end btn btn-primary btn-lg mt-auto">
      Get Started <FontAwesomeIcon icon={faAngleRight} size="lg" />
    </Link>
  </div>;

export default Home;
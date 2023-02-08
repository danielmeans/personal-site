import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Daniel Means's personal website. Santa Barbara based Software Engineer "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">welcome</Link></h2>
          <p>
            I&apos;m a Santa Barbara based Software engineer working
            on Machine Learning and Security problems.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/danielmeans/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;

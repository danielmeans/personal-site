import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Daniel Means</h2>
        <p><a href="mailto:daniel.r.means@gmail.com">daniel.r.means (at) gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Daniel. I like building things.
        I am a <a href="https://www.cs.ucsb.edu/">UC Santa Barbara M.S. Computer Science</a> graduate, UC Berkeley Alumni, and
        am a Machine Learning Engineer at <a href="https://cloudflare.com/">Cloudflare</a>. Before Cloudflare I was
        at <a href="https://aws.amazon.com/athena/">Amazon Web Services</a>
        , <a href="https://evidation.com/">Evidation Health</a>
        , <a href="https://www.appfolio.com/">Appfolio</a>
        , and <a href="https://haas.berkeley.edu/realestate/">UC Berkeley Haas</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Daniel Means <Link to="/">danielrmeans.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;

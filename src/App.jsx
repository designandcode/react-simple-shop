import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>
    <main>
      <header className="header">
        <div className="header-inner container">
          <h1><Link to="/">Logo</Link></h1>
          <ul className="header-menu">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <Routes />
      </div>
    </main>
  </BrowserRouter>
);

export default App;

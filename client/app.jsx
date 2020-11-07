import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';

import './app.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Description from './components/Description.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

ReactDOM.render(
  <React.StrictMode>
    <Description />
  </React.StrictMode>,
  document.getElementById('description-module')
);

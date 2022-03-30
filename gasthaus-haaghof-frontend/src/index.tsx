import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import './style/fonts.css';

// Media queries imports
import './style/media-queries/header.css';
import './style/media-queries/menu-bar.css';
import './style/media-queries/home.css';
import './style/media-queries/menu.css';
import './style/media-queries/about.css';
import './style/media-queries/news.css';
import './style/media-queries/contact.css';
import './style/media-queries/imprint.css';
import './style/media-queries/footer.css';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


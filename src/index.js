import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { CharacterListProvider } from './contexts/CharacterListContext';
import { CharacterProvider } from './contexts/CharacterContext';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <CharacterListProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </CharacterListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

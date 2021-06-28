import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FamilyContextProvider} from './family-context'

ReactDOM.render(
  <FamilyContextProvider>
    <App />
  </FamilyContextProvider>,
  document.getElementById('root')
);


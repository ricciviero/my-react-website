// importazione elementi base react
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// importazioni variabili e costanti
import { riccardo } from './back-end/riccardo';
import { thisYear } from './back-end/riccardo';
import { myYear } from './back-end/riccardo';
import { calculateAge } from './back-end/riccardo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

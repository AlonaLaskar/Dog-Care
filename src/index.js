
import React from 'react';
import { createRoot } from 'react-dom/client';
import {defineCustomElements} from '@ionic/pwa-elements/loader';


import App from './App';
const root = createRoot(document.getElementById('root'));

root.render(<App />);
defineCustomElements(window);

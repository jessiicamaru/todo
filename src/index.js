import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'intro.js/introjs.css';
import App from './App';
import Manual from './manual';
import IntroJsManual from './introJsManual';
import { StoreProvider } from './store';
import { getRootManual, getRoot } from './getRoot';

const rootManual = ReactDOM.createRoot(getRootManual);
rootManual.render(<IntroJsManual />);

const root = ReactDOM.createRoot(getRoot);
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);

getRoot.style.display = 'none';

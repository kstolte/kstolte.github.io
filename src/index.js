import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './pages/_app';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(<App />, rootElement);
} else {
  const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

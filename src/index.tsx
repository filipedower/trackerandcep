import ReactDOM from 'react-dom';
import { Suspense } from 'react';

import App from './pages/App/App';

ReactDOM.render(
  <Suspense>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
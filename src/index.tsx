import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { works } from './reducers';
import * as actions from './actions';
import { StoreState } from './types/index';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(works, { works: [] });
store.dispatch(actions.fetchWorks());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

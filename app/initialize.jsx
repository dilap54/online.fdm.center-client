import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const store = createStore(
  reducers,
  module.hot && module.hot.data && (module.hot.data.counter || 0),
  composeWithDevTools(applyMiddleware(thunk))
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState(); // eslint-disable-line
    [].slice.apply(document.querySelector('#app').children).forEach(c => c.remove());
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App dispatch={store.dispatch} />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

// Components
import { App } from './App';
import './styles/styles.scss';
import { RootRouter } from './routes/RootRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RootRouter />
    </React.StrictMode>
  </Provider>
)

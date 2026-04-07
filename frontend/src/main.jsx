import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import initI18n from './i18next.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { rollbarConfig } from './rollbar.js';
import App from './App.jsx';
import store from './store.js';
import { ToastContainer } from 'react-toastify';

initI18n().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RollbarProvider config={rollbarConfig}>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <App />
            <ToastContainer autoClose={2500} />
          </ReduxProvider>
        </ErrorBoundary>
      </RollbarProvider>
    </StrictMode>,
  );
});

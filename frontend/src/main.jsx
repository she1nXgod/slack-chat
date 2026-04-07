import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { rollbarConfig } from './rollbar.js';
import App from './App.jsx';
import store from './store.js';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <ReduxProvider store={store}>
          <I18nextProvider i18n={i18n}>
            <App />
            <ToastContainer autoClose={2500} />
          </I18nextProvider>
        </ReduxProvider>
      </ErrorBoundary>
    </RollbarProvider>
  </StrictMode>,
);
